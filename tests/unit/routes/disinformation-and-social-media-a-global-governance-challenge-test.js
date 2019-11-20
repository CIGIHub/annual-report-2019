import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | disinformation-and-social-media-a-global-governance-challenge', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:disinformation-and-social-media-a-global-governance-challenge');
    assert.ok(route);
  });
});
