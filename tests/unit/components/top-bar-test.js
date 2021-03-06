import { get, set } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

module('Unit | Component | top-bar', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      t() {
        return '2019 CIGI Annual Report';
      },
    }));
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    assert.ok(component);
  });

  test('should hide menu when on table of contents route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(component, 'hideMenu'), true);
  });

  test('should not hide menu on any other route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    assert.strictEqual(get(component, 'hideMenu'), false);
  });

  test('should have menuIsOpen=false with no lightbox open', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', null);

    assert.strictEqual(get(component, 'menuIsOpen'), false);
  });

  test('should have menuIsOpen=true with table of contents lightbox', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(component, 'menuIsOpen'), true);
  });

  test('should have menuIsOpen=false with another lightbox type', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', 'youtube');

    assert.strictEqual(get(component, 'menuIsOpen'), false);
  });

  test('should have correct share links for /', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'index');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/a-clarion-call-for-protecting-the-worlds-refugees',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/a-clarion-call-for-protecting-the-worlds-refugees',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/a-clarion-call-for-protecting-the-worlds-refugees',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /braiding-legal-orders-implementing-undrip-in-canada', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'braiding-legal-orders-implementing-undrip-in-canada');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders-implementing-undrip-in-canada',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders-implementing-undrip-in-canada',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders-implementing-undrip-in-canada',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /building-closer-ties-between-canada-and-india', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/building-closer-ties-between-canada-and-india',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/building-closer-ties-between-canada-and-india',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/building-closer-ties-between-canada-and-india',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /chairs-message', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /curbing-cultural-appropriation-through-intellectual-property', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /disinformation-and-social-media-a-global-governance-challenge', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'disinformation-and-social-media-a-global-governance-challenge');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/disinformation-and-social-media-a-global-governance-challenge',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/disinformation-and-social-media-a-global-governance-challenge',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/disinformation-and-social-media-a-global-governance-challenge',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/auditors-report', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/summarized-statement-of-financial-position', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/notes', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /models-for-data-governance', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /outputs-and-activities', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /presidents-message', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /table-of-contents', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /thank-you', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /timeline', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'timeline');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct twitterShareLink',
    );
  });
});
