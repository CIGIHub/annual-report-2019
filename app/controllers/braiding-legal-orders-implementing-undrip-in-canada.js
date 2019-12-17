import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('braiding-legal-orders-implementing-undrip-in-canada');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/braiding-legal-orders-implementing-united-nations-declaration-rights-indigenous',
      title: get(this, 'intl').t('braidingLegalOrders.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/how-undrip-recognizes-sacred-relationship-nibi-water',
      title: get(this, 'intl').t('braidingLegalOrders.link2'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'twitter',
      iconPrefix: 'fab',
      link: 'https://twitter.com/CIGIonline/status/869957715375869952',
      title: get(this, 'intl').t('braidingLegalOrders.link3'),
      type: get(this, 'intl').t('socialMedia'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('braidingLegalOrders.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('braidingLegalOrders.paragraph2'),
    }];
  }),

  photoCredit: computed('intl.locale', function() {
    return get(this, 'intl').t('braidingLegalOrders.photoCredit');
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('braidingLegalOrders.htmlTitle');
  }),
});
