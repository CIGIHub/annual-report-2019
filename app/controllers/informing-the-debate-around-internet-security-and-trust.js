import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('informing-the-debate-around-internet-security-and-trust');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'chart-bar',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/internet-survey-2019',
      title: get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.link1'),
      type: get(this, 'intl').t('survey'),
    }, {
      icon: 'twitter',
      iconPrefix: 'fab',
      link: 'https://twitter.com/CIGIonline/status/1143232825413554177',
      title: get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.link2'),
      type: get(this, 'intl').t('socialMedia'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph1'),
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5891adf417e60b71/slides/informing-the-debate-around-internet-security-and-trust.mp4`;
  }),
});
