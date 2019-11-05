import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | braiding legal orders', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /braiding-legal-orders', async function(assert) {
    await visit('/braiding-legal-orders');

    assert.equal(currentURL(), '/braiding-legal-orders');
  });

  test('should have correct head title', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Braiding Legal Orders | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Braiding Legal Orders is the culmination of the ILRP’s research over the past three years on the implementation in Canada of the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP).',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders/',
    );
  });

  test('should transition to /media-and-mass-atrocity-the-rwanda-genocide-and-beyond on scroll-arrow-up-btn click', async function(assert) {
    await visit('/braiding-legal-orders');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  });

  test('should transition to /models-for-data-governance on scroll-arrow-down-btn click', async function(assert) {
    await visit('/braiding-legal-orders');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/models-for-data-governance');
  });
});
