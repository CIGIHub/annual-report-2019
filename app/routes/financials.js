import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    if (![
      'financials.auditors-report',
      'financials.revenue-and-expenses',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
    ].includes(transition.targetName)) {
      this.replaceWith('financials.auditors-report');
    }
  },
});
