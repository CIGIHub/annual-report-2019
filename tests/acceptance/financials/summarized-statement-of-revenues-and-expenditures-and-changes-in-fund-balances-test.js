import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | financials/summarized statement of revenues and expenditures and changes in fund balances', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.equal(currentURL(), '/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
  });

  test('should have correct head title', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Financials | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances/',
    );
  });

  test('should transition to /timeline on scroll-arrow-up-btn click', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/timeline');
  });

  test('should transition to /thank-you on scroll-arrow-down-btn click', async function(assert) {
    await visit('/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/thank-you');
  });
});
