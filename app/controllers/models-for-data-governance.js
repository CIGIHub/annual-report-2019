import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('models-for-data-governance');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/big-data-analytics-need-standards-thrive-what-standards-are-and-why-they-matter',
      title: get(this, 'intl').t('modelsForDataGovernance.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/reclaiming-data-trusts',
      title: get(this, 'intl').t('modelsForDataGovernance.link2'),
      type: get(this, 'intl').t('opinion'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/data-trusts-defining-what-how-and-who-can-use-your-data',
      title: get(this, 'intl').t('modelsForDataGovernance.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('modelsForDataGovernance.paragraph1'),
      get(this, 'intl').t('modelsForDataGovernance.paragraph2'),
      get(this, 'intl').t('modelsForDataGovernance.paragraph3'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('modelsForDataGovernance.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}78657d2aac4c3ba0/slides/models-for-data-governance.mp4`;
  }),
});
