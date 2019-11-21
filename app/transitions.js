import ENV from 'annual-report-2019/config/environment';

export default /* istanbul ignore next */ function() {
  const customDuration = ENV.environment === 'test' ? 0 : 500;
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('table-of-contents'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('disinformation-and-social-media-a-global-governance-challenge'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('multilateral-institutions-mark-a-tumultuous-year'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('innovation-nation-making-canada-a-leader-in-the-global-ideas-economy'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('curbing-cultural-appropriation-through-ip-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('braiding-legal-orders-implementing-undrip-in-canada'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-ip-law'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
}
