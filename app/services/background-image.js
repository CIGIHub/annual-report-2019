import ENV from 'annual-report-2019/config/environment';
import { computed, get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    'a-bretton-woods-moment-for-the-digital-age': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/a-bretton-woods-moment-for-the-digital-age.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/a-bretton-woods-moment-for-the-digital-age-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/a-bretton-woods-moment-for-the-digital-age-thumbnail.jpg',
    },
    'a-clarion-call-for-protecting-the-worlds-refugees': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/a-clarion-call-for-protecting-the-worlds-refugees.png',
      ogUrl: '78657d2aac4c3ba0/slides/a-clarion-call-for-protecting-the-worlds-refugees-og.png',
      thumbnailUrl: '78657d2aac4c3ba0/slides/a-clarion-call-for-protecting-the-worlds-refugees-thumbnail.png',
    },
    'braiding-legal-orders-implementing-undrip-in-canada': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/braiding-legal-orders.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/braiding-legal-orders-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/braiding-legal-orders-thumbnail.jpg',
    },
    'building-closer-ties-between-canada-and-india': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/building-closer-ties-between-canada-and-india.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/building-closer-ties-between-canada-and-india-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/building-closer-ties-between-canada-and-india-thumbnail.jpg',
    },
    'chairs-message': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/chairs-message.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/chairs-message-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/chairs-message-thumbnail.jpg',
    },
    'curbing-cultural-appropriation-through-intellectual-property-law': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/curbing-cultural-appropriation-through-intellectual-property-law.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/curbing-cultural-appropriation-through-intellectual-property-law-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/curbing-cultural-appropriation-through-intellectual-property-law-thumbnail.jpg',
    },
    'disinformation-and-social-media-a-global-governance-challenge': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/disinformation-and-social-media-a-global-governance-challenge.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/disinformation-and-social-media-a-global-governance-challenge-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/disinformation-and-social-media-a-global-governance-challenge-thumbnail.jpg',
    },
    'exploring-the-four-internets-and-the-geopolitics-of-digital-governance': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-thumbnail.jpg',
    },
    'governing-cyberspace-during-a-crisis-in-trust': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/governing-cyberspace-during-a-crisis-in-trust.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/governing-cyberspace-during-a-crisis-in-trust-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/governing-cyberspace-during-a-crisis-in-trust-thumbnail.jpg',
    },
    'informing-the-debate-around-internet-security-and-trust': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/informing-the-debate-around-internet-security-and-trust.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/informing-the-debate-around-internet-security-and-trust-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/informing-the-debate-around-internet-security-and-trust-thumbnail.jpg',
    },
    'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy-thumbnail.jpg',
    },
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-thumbnail.jpg',
    },
    'models-for-data-governance': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/models-for-data-governance.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/models-for-data-governance-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/models-for-data-governance-thumbnail.jpg',
    },
    'multilateral-institutions-mark-a-tumultuous-year': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/multilateral-institutions-mark-a-tumultuous-year.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/multilateral-institutions-mark-a-tumultuous-year-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/multilateral-institutions-mark-a-tumultuous-year-thumbnail.jpg',
    },
    'presidents-message': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/presidents-message.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/presidents-message-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/presidents-message-thumbnail.jpg',
    },
    'thank-you': {
      fullSizeUrl: '78657d2aac4c3ba0/slides/thank-you.jpg',
      ogUrl: '78657d2aac4c3ba0/slides/thank-you-og.jpg',
      thumbnailUrl: '78657d2aac4c3ba0/slides/thank-you-thumbnail.jpg',
    },
  },
  nodesMissingBackground: [
    '13840',
    '14698',
    '14715',
    '14716',
    '14844',
    '14862',
    '14863',
    '14881',
    '14882',
    '14903',
    '14914',
    '14966',
    '14967',
    '15050',
    '15054',
    '15056',
    '15058',
    '15067',
    '15117',
    '15142',
    '15149',
    '15157',
    '15158',
    '15218',
    '15234',
    '15275',
    '15286',
    '15290',
    '15337',
    '15338',
    '15364',
  ],
  nodeS3Directory: '78657d2aac4c3ba0',

  defaultBackground: computed(function() {
    return {
      fullSizeUrl: `${get(this, 'imageHost')}78657d2aac4c3ba0/cigi-campus.jpg`,
      ogUrl: `${get(this, 'imageHost')}78657d2aac4c3ba0/cigi-campus-og.jpg`,
      thumbnailUrl: `${get(this, 'imageHost')}78657d2aac4c3ba0/cigi-campus-thumbnail.jpg`,
    };
  }),

  imageHost: computed(function() {
    if (ENV.environment !== 'production' || ENV.staging) {
      return 'https://staging.cigionline.org/interactives/2019annualreport/static/';
    }
    return 'https://www.cigionline.org/interactives/2019annualreport/static/';
  }),

  getAllBlurImages: function() {
    return Object.keys(get(this, 'backgroundImages')).map((key) => `${get(this, 'imageHost')}${get(this, 'backgroundImages')[key].thumbnailUrl}`);
  },

  getNodeBackgroundImage: function(nodeId) {
    if (get(this, 'nodesMissingBackground').includes(nodeId)) {
      return get(this, 'defaultBackground');
    }
    return {
      fullSizeUrl: `${get(this, 'imageHost')}${get(this, 'nodeS3Directory')}/nodes/${nodeId}.jpg`,
      thumbnailUrl: `${get(this, 'imageHost')}${get(this, 'nodeS3Directory')}/nodes/${nodeId}-thumbnail.jpg`,
    };
  },

  getSlideBackgroundImage: function(routeName) {
    if (get(this, 'backgroundImages')[routeName]
        && get(this, 'backgroundImages')[routeName].fullSizeUrl
        && get(this, 'backgroundImages')[routeName].ogUrl
        && get(this, 'backgroundImages')[routeName].thumbnailUrl) {
      return {
        fullSizeUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].fullSizeUrl}`,
        ogUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].ogUrl}`,
        thumbnailUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].thumbnailUrl}`,
      };
    }
    return { thumbnailUrl: null, ogUrl: null, fullSizeUrl: null };
  },
});
