import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  // TEST COMPUTED: bounceScrollArrowDown

  test('should have bounceScrollArrowDown=true for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), true);
  });

  test('should have bounceScrollArrowDown=false for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /disinformation-and-social-media-a-global-governance-challenge-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge-public-sphere');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /multilateral-institutions-mark-a-tumultuous-year', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'multilateral-institutions-mark-a-tumultuous-year');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have hideMobileOverlay=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /disinformation-and-social-media-a-global-governance-challenge-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge-public-sphere');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /multilateral-institutions-mark-a-tumultuous-year', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'multilateral-institutions-mark-a-tumultuous-year');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  // TEST COMPUTED: lightBackground

  test('should have lightBackground=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /chairs-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /financials/auditors-report when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /disinformation-and-social-media-a-global-governance-challenge-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge-public-sphere');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /multilateral-institutions-mark-a-tumultuous-year', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'multilateral-institutions-mark-a-tumultuous-year');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /outputs-and-activities when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /presidents-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  // TEST COMPUTED: scrollableContentPage

  test('should have scrollableContentPage=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  test('should have scrollableContentPage=true for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /disinformation-and-social-media-a-global-governance-challenge-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge-public-sphere');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /multilateral-institutions-mark-a-tumultuous-year', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'multilateral-institutions-mark-a-tumultuous-year');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  test('should have scrollableContentPage=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  // TEST COMPUTED: showDotNav

  test('should have showDotNav=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for / when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /disinformation-and-social-media-a-global-governance-challenge-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge-public-sphere');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /multilateral-institutions-mark-a-tumultuous-year', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'multilateral-institutions-mark-a-tumultuous-year');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for /table-of-contents when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  // TEST COMPUTED: showScrollArrowDown

  test('should have showScrollArrowDown=true for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), true);
  });

  test('should have showScrollArrowDown=true for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), true);
  });

  test('should have showScrollArrowDown=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), false);
  });

  test('should have showScrollArrowDown=false for /404', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', '404');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), false);
  });

  // TEST COMPUTED: showScrollArrowUp

  test('should have showScrollArrowUp=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), false);
  });

  test('should have showScrollArrowUp=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), true);
  });

  test('should have showScrollArrowUp=true for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), true);
  });

  test('should have showScrollArrowUp=false for /404', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', '404');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), false);
  });

  // TEST ACTION: transitionBack

  test('should immediately clear isTransitioning for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'index');

    controller.send('transitionBack');

    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  test('should transition for 1500ms for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'table-of-contents');

    controller.send('transitionBack');

    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(1450);
    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(55);
    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  // TEST ACTION: transitionNext

  test('should immediately clear isTransitioning for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'thank-you');

    controller.send('transitionNext');

    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  test('should transition for 1500ms for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'timeline');

    controller.send('transitionNext');

    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(1450);
    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(55);
    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });
});
