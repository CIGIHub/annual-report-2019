import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | innovation-nation-making-canada-a-leader-in-the-global-ideas-economy', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:innovation-nation-making-canada-a-leader-in-the-global-ideas-economy');
    assert.ok(route);
  });
});
