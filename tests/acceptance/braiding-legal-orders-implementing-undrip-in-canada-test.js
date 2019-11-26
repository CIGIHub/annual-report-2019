import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | braiding legal orders', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /braiding-legal-orders-implementing-undrip-in-canada', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');

    assert.equal(currentURL(), '/braiding-legal-orders-implementing-undrip-in-canada');
  });

  test('should have correct head title', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Braiding Legal Orders: Implementing UNDRIP in Canada | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Braiding Legal Orders is the culmination of the ILRP’s research over the past three years on the implementation in Canada of the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP).',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders-implementing-undrip-in-canada/',
    );
  });

  test('should transition to /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy on scroll-arrow-up-btn click', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
  });

  test('should transition to /curbing-cultural-appropriation-through-intellectual-property on scroll-arrow-down-btn click', async function(assert) {
    await visit('/braiding-legal-orders-implementing-undrip-in-canada');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/curbing-cultural-appropriation-through-intellectual-property');
  });
});
