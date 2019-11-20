import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | disinformation and social media a global governance challenge', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /disinformation-and-social-media-a-global-governance-challenge', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');

    assert.equal(currentURL(), '/disinformation-and-social-media-a-global-governance-challenge');
  });

  test('should have correct head title', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Disinformation and Social Media: A Global Governance Challenge | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'The 2016 US election was marked by malicious uses of technology, including new forms of “fake news” on social media platforms designed to sway voters. Since then, there has been a striking number of cases of commercially and politically driven disinformation, foreign interference in elections, data breaches, cyber attacks, the proliferation of harmful speech, data exploitation and surveillance abuses.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/disinformation-and-social-media-a-global-governance-challenge/',
    );
  });

  test('should transition to /governing-cyberspace-during-a-crisis-in-trust on scroll-arrow-up-btn click', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/governing-cyberspace-during-a-crisis-in-trust');
  });

  test('should transition to /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy on scroll-arrow-down-btn click', async function(assert) {
    await visit('/disinformation-and-social-media-a-global-governance-challenge');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
  });
});
