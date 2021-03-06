import { computed, get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  routes: [{
    number: '00',
    route: 'index',
    subRoutes: [],
    title: 'home',
  }, {
    number: '00',
    route: 'table-of-contents',
    subRoutes: [],
    title: 'tableOfContents.title',
  }, {
    number: '01',
    route: 'chairs-message',
    subRoutes: [],
    title: 'chairsMessage.title',
  }, {
    number: '02',
    route: 'presidents-message',
    subRoutes: [],
    title: 'presidentsMessage.title',
  }, {
    number: '03',
    route: 'disinformation-and-social-media-a-global-governance-challenge',
    subRoutes: [],
    title: 'disinformationAndSocialMedia.title',
  }, {
    number: '04',
    route: 'governing-cyberspace-during-a-crisis-in-trust',
    subRoutes: [],
    title: 'governingCyberspaceDuringACrisisInTrust.title',
  }, {
    number: '05',
    route: 'multilateral-institutions-mark-a-tumultuous-year',
    subRoutes: [],
    title: 'multilateralInstitutionsMarkATumultuousYear.title',
  }, {
    number: '06',
    route: 'building-closer-ties-between-canada-and-india',
    subRoutes: [],
    title: 'buildingCloserTiesBetweenCanadaAndIndia.title',
  }, {
    number: '07',
    route: 'a-clarion-call-for-protecting-the-worlds-refugees',
    subRoutes: [],
    title: 'aClarionCallForProtectingTheWorldsRefugees.title',
  }, {
    number: '08',
    route: 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy',
    subRoutes: [],
    title: 'innovationNation.title',
  }, {
    number: '09',
    route: 'braiding-legal-orders-implementing-undrip-in-canada',
    subRoutes: [],
    title: 'braidingLegalOrders.htmlTitle',
  }, {
    number: '10',
    route: 'curbing-cultural-appropriation-through-intellectual-property-law',
    subRoutes: [],
    title: 'curbingCulturalAppropriationThroughIntellectualPropertyLaw.title',
  }, {
    number: '11',
    route: 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
    subRoutes: [],
    title: 'mediaAndMassAtrocityTheRwandaGenocideAndBeyond.htmlTitle',
  }, {
    number: '12',
    route: 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
    subRoutes: [],
    title: 'exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title',
  }, {
    number: '13',
    route: 'informing-the-debate-around-internet-security-and-trust',
    subRoutes: [],
    title: 'informingTheDebateAroundInternetSecurityAndTrust.title',
  }, {
    number: '14',
    route: 'models-for-data-governance',
    subRoutes: [],
    title: 'modelsForDataGovernance.title',
  }, {
    number: '15',
    route: 'a-bretton-woods-moment-for-the-digital-age',
    subRoutes: [],
    title: 'aBrettonWoodsMomentForTheDigitalAge.title',
  }, {
    number: '16',
    route: 'outputs-and-activities',
    subRoutes: [],
    title: 'outputsAndActivities.title',
  }, {
    number: '17',
    route: 'timeline',
    subRoutes: [],
    title: 'timeline.title',
  }, {
    number: '18',
    route: 'financials.auditors-report',
    subRoutes: [
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
    ],
    title: 'financials.title',
  }, {
    number: '19',
    route: 'thank-you',
    subRoutes: [],
    title: 'thankYou.title',
  }],

  firstRoute: computed('routes.[]', function() {
    return get(this, 'routes')[0].route;
  }),

  firstSubRoutes: computed('routes.[]', function() {
    return get(this, 'routes')[0].subRoutes;
  }),

  lastRoute: computed('routes.[]', function() {
    return get(this, 'routes')[get(this, 'routes').length - 1].route;
  }),

  lastSubRoutes: computed('routes.[]', function() {
    return get(this, 'routes')[get(this, 'routes').length - 1].subRoutes;
  }),

  getNextRoute(currentRouteName) {
    let ind = -1;
    get(this, 'routes').forEach((route, index) => {
      if (currentRouteName === route.route
          || route.subRoutes.includes(currentRouteName)) {
        ind = index;
      }
    });
    ind += 1;
    if (ind > 0 && ind < get(this, 'routes.length')) {
      return get(this, 'routes')[ind].route;
    }
    return null;
  },

  getPreviousRoute(currentRouteName) {
    let ind = 0;
    get(this, 'routes').forEach((route, index) => {
      if (currentRouteName === route.route
          || route.subRoutes.includes(currentRouteName)) {
        ind = index;
      }
    });
    ind -= 1;
    if (ind >= 0) {
      return get(this, 'routes')[ind].route;
    }
    return null;
  },
});
