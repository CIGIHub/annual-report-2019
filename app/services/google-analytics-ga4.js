import ENV from 'annual-report-2019/config/environment';
import { get, set } from '@ember/object';
import { later } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  fastboot: service(),
  headData: service(),
  router: service(),
  gtag: null,

  sendPageView() {
    if (!get(this, 'fastboot.isFastBoot')
        && ENV.environment === 'production'
        && !ENV.staging) {
      if (!get(this, 'gtag')) {
        window.dataLayer = window.dataLayer || [];
        set(this, 'gtag', function() {
          window.dataLayer.push(arguments);
        });
        get(this, 'gtag')('js', new Date());
        get(this, 'gtag')('config', 'GTM-NKKJHZX');
      }

      later(this, function() {
        get(this, 'gtag')('event', 'page_view', {
          'page_path': `${ENV.rootURL}${get(this, 'router.currentURL').replace('/', '')}`,
          'page_title': get(this, 'headData.title'),
        });
      }, 500);
    }
  },
});
