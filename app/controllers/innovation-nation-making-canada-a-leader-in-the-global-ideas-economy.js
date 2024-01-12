import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'newspaper',
      iconPrefix: 'fal',
      link: 'http://innovation.financialpost.com/',
      title: get(this, 'intl').t('innovationNation.link1'),
      type: get(this, 'intl').t('media'),
    }, {
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/it-time-reboot-canadas-tax-and-benefit-system',
      title: get(this, 'intl').t('innovationNation.link2'),
      type: get(this, 'intl').t('opinion'),
    }, {
      icon: 'x-twitter',
      iconPrefix: 'fab',
      link: 'https://twitter.com/CIGIonline/status/1091043474344943616',
      title: get(this, 'intl').t('innovationNation.link3'),
      type: get(this, 'intl').t('socialMedia'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('innovationNation.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('innovationNation.paragraph2'),
    }];
  }),

  photoCredit: computed('intl.locale', function() {
    return get(this, 'intl').t('innovationNation.photoCredit');
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('innovationNation.title');
  }),
});
