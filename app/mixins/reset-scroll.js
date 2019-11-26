import Mixin from '@ember/object/mixin';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Mixin.create({
  fastboot: service(),
  activate() {
    this._super(...arguments);
    if (!get(this, 'fastboot.isFastBoot')) {
      window.scrollTo(0, 0);
    }
  },
});
