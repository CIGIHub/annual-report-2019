import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('disinformation-and-social-media-a-global-governance-challenge');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/world-faces-turning-point-data-and-ai-will-we-learn-financial-crisis',
      title: get(this, 'intl').t('disinformationAndSocialMedia.link1'),
      type: get(this, 'intl').t('opinion'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-beware-fake-news',
      title: get(this, 'intl').t('disinformationAndSocialMedia.link2'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: '',
      link: 'https://twitter.com/cattunneycbc/status/1133353482981924869?s=20',
      title: get(this, 'intl').t('disinformationAndSocialMedia.link3'),
      type: get(this, 'intl').t('socialMedia'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('disinformationAndSocialMedia.paragraph1'),
      get(this, 'intl').t('disinformationAndSocialMedia.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('disinformationAndSocialMedia.title');
  }),
});
