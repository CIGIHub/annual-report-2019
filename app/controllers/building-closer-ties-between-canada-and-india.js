import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('building-closer-ties-between-canada-and-india');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/video-canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.link1'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/series/canada-india-track-15-dialogue',
      title: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.link2'),
      type: get(this, 'intl').t('publication'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph2'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph3'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.title');
  }),
});
