import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should have correct head title', async function(assert) {
    await visit('/');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/',
    );
  });

  test('should not find scroll-arrow-up-btn', async function(assert) {
    await visit('/');

    assert.notOk(
      document.querySelector('.scroll-arrow-up-btn'),
      'should not find scroll-arrow-up-btn',
    );
  });

  test('should transition to /table-of-contents on scroll-arrow-down-btn click', async function(assert) {
    await visit('/');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/table-of-contents');
  });
});
