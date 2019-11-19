import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | braiding-legal-orders-implementing-undrip-in-canada', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:braiding-legal-orders-implementing-undrip-in-canada');
    assert.ok(controller);
  });
});
