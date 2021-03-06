import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | governing cyberspace during a crisis in trust', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /governing-cyberspace-during-a-crisis-in-trust', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');

    assert.equal(currentURL(), '/governing-cyberspace-during-a-crisis-in-trust');
  });

  test('should have correct head title', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Governing Cyberspace during a Crisis in Trust | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'It is almost impossible to read the news without coming across a lead story cataloguing the latest cyber breach or misuse of data. The volume of these events lays bare the paradox of the digital economy and cyber security: technology has led to convenience, efficiency and wealth creation, but the push to digitize society quickly and relentlessly has meant building vulnerability into the core of the global economic model.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust/',
    );
  });

  test('should transition to /disinformation-and-social-media-a-global-governance-challenge on scroll-arrow-up-btn click', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/disinformation-and-social-media-a-global-governance-challenge');
  });

  test('should transition to /multilateral-institutions-mark-a-tumultuous-year on scroll-arrow-down-btn click', async function(assert) {
    await visit('/governing-cyberspace-during-a-crisis-in-trust');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/multilateral-institutions-mark-a-tumultuous-year');
  });
});
