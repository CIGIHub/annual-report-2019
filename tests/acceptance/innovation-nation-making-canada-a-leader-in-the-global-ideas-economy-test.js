import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | innovation nation making canada a leader in the global ideas economy', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.equal(currentURL(), '/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
  });

  test('should have correct head title', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Innovation Nation: Making Canada a Leader in the Global Ideas Economy | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'The fourth industrial revolution is upon us. And while Canada has had a robust history of innovation and global leadership, there is a real risk that the country will fall behind in the data and technology race. Over six months in late 2018 through early 2019, the Financial Post called on CIGI experts, including Robert Fay, Dan Ciuriak, Myra Tawfik, Jim Hinton, Bianca Wylie and others, to participate in a special series, Innovation Nation. The series brought together thought leaders across the country to lay out what is needed for Canadian businesses to flourish and grow in a global ideas economy.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy/',
    );
  });

  test('should transition to /disinformation-and-social-media-a-global-governance-challenge on scroll-arrow-up-btn click', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/disinformation-and-social-media-a-global-governance-challenge');
  });

  test('should transition to /media-and-mass-atrocity-the-rwanda-genocide-and-beyond on scroll-arrow-down-btn click', async function(assert) {
    await visit('/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  });
});
