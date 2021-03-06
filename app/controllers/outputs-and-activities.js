import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

// import nodeImages from '../node-images';

export default Controller.extend({
  backgroundImage: service(),
  fastboot: service(),
  intl: service(),

  queryParams: ['id', 'page', 'type'],

  objects: alias('model.objects'),
  publication: alias('model.publication'),
  totalObjects: alias('model.totalObjects'),

  currentPage: computed('page', function() {
    let currentPage = 1;
    if (get(this, 'page') && !isNaN(parseInt(get(this, 'page'), 10))) {
      currentPage = parseInt(get(this, 'page'), 10);
    }
    return currentPage;
  }),

  currentType: computed('type', function() {
    let currentType = 'publications';
    if (get(this, 'type') && [
      'events',
      'opinions',
      'publications',
    ].includes(get(this, 'type'))) {
      currentType = get(this, 'type');
    }
    return currentType;
  }),

  disableNext: computed('currentPage', 'totalPages', function() {
    const currentPage = get(this, 'currentPage');
    const totalPages = get(this, 'totalPages');
    return currentPage >= totalPages;
  }),

  disablePrevious: computed('currentPage', function() {
    const currentPage = get(this, 'currentPage');
    return currentPage <= 1;
  }),

  isArticle: computed('publication.type', function() {
    return get(this, 'publication.type') === 'article';
  }),

  isEvent: computed('publication.type', function() {
    return get(this, 'publication.type') === 'event';
  }),

  isPublication: computed('publication.type', function() {
    return get(this, 'publication.type') === 'publication';
  }),

  isTypeEvents: computed('currentType', function() {
    return get(this, 'currentType') === 'events';
  }),

  isTypeOpinions: computed('currentType', function() {
    return get(this, 'currentType') === 'opinions';
  }),

  isTypePublications: computed('currentType', function() {
    return get(this, 'currentType') === 'publications';
  }),

  paginationPages: computed('currentPage', 'totalPages', function() {
    const currentPage = get(this, 'currentPage');
    const totalPages = get(this, 'totalPages');
    const pageNumbers = [currentPage];
    if (currentPage > 1) {
      for (const i of Array(Math.max(3, currentPage - (totalPages - 6))).keys()) {
        if (currentPage - (i + 1) >= 1) {
          pageNumbers.push(currentPage - (i + 1));
        }
      }
    }
    if (currentPage < totalPages) {
      for (const i of Array(7 - pageNumbers.length).keys()) {
        if (currentPage + (i + 1) <= totalPages) {
          pageNumbers.push(currentPage + (i + 1));
        }
      }
    }

    pageNumbers.sort(function(a, b) { return a - b; });

    return pageNumbers.map((page) => ({
      disabled: (page === currentPage),
      page,
    }));
  }),

  overlayStyle: computed('publication.id', /* istanbul ignore next */ function() {
    const publication = get(this, 'publication');

    if (!get(this, 'fastboot.isFastBoot')
        && publication) {
      const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getNodeBackgroundImage(publication.id);
      return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}')`);
    }

    return null;
  }),

  totalPages: computed('totalObjects', function() {
    return Math.max(Math.ceil(get(this, 'totalObjects') / 16), 1);
  }),

  shortSummary: computed('publication.summary', /* istanbul ignore next */ function() {
    return get(this, 'publication.summary');
  }),

  actions: {
    closePublication() {
      const self = this;
      $.when($('.outputs-activities-overlay').animate({
        'opacity': 0,
      }, 500)).done(() => {
        set(self, 'id', null);
      });
    },
    nextPage() {
      let page = get(this, 'currentPage');
      const totalPages = get(this, 'totalPages');
      page += 1;
      if (page >= totalPages) {
        page = totalPages;
      }
      set(this, 'page', page);
    },
    openPublication(id) {
      set(this, 'id', id);
    },
    previousPage() {
      let page = get(this, 'currentPage');
      page -= 1;
      if (page <= 1) {
        page = 1;
      }
      set(this, 'page', page);
    },
    setPage(page) {
      set(this, 'page', Math.min(page, get(this, 'totalPages')));
    },
    setType(type) {
      if (['events', 'opinions', 'publications'].includes(type)) {
        set(this, 'page', null);
        set(this, 'type', type);
      }
    },
  },
});
