import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('multilateral-institutions-mark-a-tumultuous-year');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/regional-arrangements-and-imf-75-defending-global-financial-governance-anniversary',
      title: get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/trump-trade-policy-exchange-rate-surveillance-and-imf-back-future',
      title: get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.link2'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
      title: get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.link3'),
      type: get(this, 'intl').t('multimedia'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.paragraph2'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('multilateralInstitutionsMarkATumultuousYear.title');
  }),
});
