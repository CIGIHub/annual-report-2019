import { get } from '@ember/object';
import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  googleAnalytics: service(),
  googleAnalyticsGA4: service(),

  actions: {
    didTransition() {
      get(this, 'googleAnalytics').sendPageView();
      get(this, 'googleAnalyticsGA4').sendPageView();
      return true;
    },
  },
});
