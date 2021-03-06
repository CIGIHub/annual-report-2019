import ENV from 'annual-report-2019/config/environment';
import GoogleAnalyticsMixin from 'annual-report-2019/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import moment from 'moment';
import { hash } from 'rsvp';

const publications = nodes.filter((node) => node.type === 'publication');
const opinions = nodes.filter((node) => node.type === 'article');
const events = nodes.filter((node) => node.type === 'event');

export default Route.extend(GoogleAnalyticsMixin, ResetScrollMixin, {
  assetLoader: service(),
  backgroundImage: service(),
  fastboot: service(),
  headData: service(),
  lightbox: service(),
  intl: service(),
  routeOrder: service(),

  queryParams: {
    id: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    type: {
      refreshModel: true,
    },
  },

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  model(params) {
    let page = 1;
    /* istanbul ignore next */
    if (params.page && !isNaN(parseInt(params.page, 10))) {
      page = parseInt(params.page, 10);
    }

    let type = 'publications';
    if (params.type && [
      'events',
      'opinions',
      'publications',
    ].includes(params.type)) {
      type = params.type;
    }

    let objects = publications;
    if (type === 'opinions') {
      objects = opinions;
    } else if (type === 'events') {
      objects = events;
    }
    objects.sort((a, b) => {
      const aDate = new Date(a.published_date || a.event_date);
      const bDate = new Date(b.published_date || b.event_date);
      if (aDate.valueOf() < bDate.valueOf()) {
        return -1;
      }
      if (aDate.valueOf() > bDate.valueOf()) {
        return 1;
      }
      return 0;
    });

    let publication = null;
    /* istanbul ignore next */
    if (params.id) {
      if (type === 'publications') {
        publication = publications.find((pub) => pub.id === params.id);
      } else if (type === 'opinions') {
        publication = opinions.find((opinion) => opinion.id === params.id);
      } else if (type === 'events') {
        publication = events.find((ev) => ev.id === params.id);
      }
    }

    /* istanbul ignore next */
    if (!get(this, 'fastboot.isFastBoot')) {
      if (publication) {
        get(this, 'lightbox').showPublicationLightbox();
        $('html, body').css({
          'height': '100%',
          'overflow': 'hidden',
        });
        if (type === 'publications' || type === 'opinions') {
          const authorString = get(publication, 'authors').join(', ');
          set(publication, 'author_str', authorString);
        }
      } else if (get(this, 'lightbox.subType') === 'publication') {
        get(this, 'lightbox').closeLightbox();
        $('html, body').css({
          'height': '',
          'overflow': '',
        });
      }
    }

    return hash({
      objects: objects.slice((page - 1) * 16, ((page - 1) * 16) + 16).map((obj) => {
        set(obj, 'date_str', null);
        /* istanbul ignore next */
        if (obj.published_date) {
          set(obj, 'date_str', moment(obj.published_date).format('MMMM D, YYYY'));
        } else if (obj.event_date) {
          set(obj, 'date_str', moment(obj.event_date).format('MMMM D, YYYY'));
        }
        set(obj, 'type_str', get(obj, 'type'));
        /* istanbul ignore next */
        if (get(obj, 'subtype').length > 0) {
          set(obj, 'type_str', get(obj, 'subtype')[0]);
          if (get(obj, 'type_str') === 'Books') {
            set(obj, 'is_italic', true);
          }
        }
        return obj;
      }),
      publication,
      totalObjects: objects.length,
    });
  },

  afterModel() {
    const title = `${get(this, 'intl').t('outputsAndActivities.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}outputs-and-activities/`);
    set(this, 'headData.image', get(this, 'backgroundImage.defaultBackground.ogUrl'));

    // Load next route background
    const nextRoute = get(this, 'routeOrder').getNextRoute('outputs-and-activities');
    if (nextRoute) {
      const { fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        get(this, 'assetLoader').loadAsset(fullSizeUrl);
      }
    }
  },

  resetController(controller) {
    set(controller, 'id', null);
    set(controller, 'page', null);
    set(controller, 'type', null);
  },
});
