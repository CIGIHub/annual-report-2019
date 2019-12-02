import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('a-clarion-call-for-protecting-the-worlds-refugees');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/call-action-transforming-global-refugee-system',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/concrete-solutions-transform-global-refugee-system',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link2'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/no-strangers-gate-collective-responsibility-and-regions-response-venezuelan-refugee',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link3'),
      type: get(this, 'intl').t('publication'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.paragraph2'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5ab09e92875a54ff/slides/a-clarion-call-for-protecting-the-worlds-refugees.mp4`;
  }),
});
