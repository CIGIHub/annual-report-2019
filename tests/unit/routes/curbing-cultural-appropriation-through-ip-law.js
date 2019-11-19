import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | curbing-cultural-appropriation-through-ip-law', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:curbing-cultural-appropriation-through-ip-law');
    assert.ok(route);
  });
});
