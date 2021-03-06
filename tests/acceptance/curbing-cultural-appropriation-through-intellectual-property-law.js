import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | curbing cultural appropriation through ip law', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /curbing-cultural-appropriation-through-intellectual-property', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');

    assert.equal(currentURL(), '/curbing-cultural-appropriation-through-intellectual-property');
  });

  test('should have correct head title', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Curbing Cultural Appropriation through IP Law | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'CIGI fellow Brigitte Vézina’s paper, Curbing Cultural Appropriation in the Fashion Industry calls on reform to intellectual property laws, as well as practical solutions for designers and consumers to put an end of cultural appropriation.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property/',
    );
  });

  test('should transition to /braiding-legal-orders-implementing-undrip-in-canada on scroll-arrow-up-btn click', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/braiding-legal-orders-implementing-undrip-in-canada');
  });

  test('should transition to /media-and-mass-atrocity-the-rwanda-genocide-and-beyond on scroll-arrow-down-btn click', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  });
});
