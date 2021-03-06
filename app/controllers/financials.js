import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),
  router: service(),

  rootURL: ENV.rootURL,

  downloadPdfLink: 'https://www.cigionline.org/sites/default/files/annual-reports/2019-Centre-for-International-Governance-Innovation-FS.pdf',

  menuLinks: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    const menuLinks = [{
      current: currentRouteName === 'financials.auditors-report',
      linkTo: 'financials.auditors-report',
      title: get(this, 'intl').t('financials.auditorsReport.title'),
    }, {
      current: currentRouteName === 'financials.summarized-statement-of-financial-position',
      linkTo: 'financials.summarized-statement-of-financial-position',
      title: get(this, 'intl').t('financials.balanceSheet.title'),
    }, {
      current: currentRouteName === 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      linkTo: 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      title: get(this, 'intl').t('financials.revenueAndExpenses.title'),
    }, {
      current: currentRouteName === 'financials.notes',
      last: true,
      linkTo: 'financials.notes',
      title: get(this, 'intl').t('financials.notes.title'),
    }];

    return menuLinks;
  }),
});
