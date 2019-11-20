import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/media-and-mass-atrocity-rwanda-genocide-and-beyond',
      title: get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/reporting-atrocity',
      title: get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.link2'),
      type: get(this, 'intl').t('opinion'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/video-reporting-atrocity',
      title: get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph1'),
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph2'),
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph3'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}78657d2aac4c3ba0/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.mp4`;
  }),
});
