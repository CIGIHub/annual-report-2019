import { computed, get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  routes: [{
    route: 'index',
    subRoutes: [],
    title: 'home',
  }, {
    route: 'table-of-contents',
    subRoutes: [],
    title: 'tableOfContents.title',
  }, {
    route: 'chairs-message',
    subRoutes: [],
    title: 'chairsMessage.title',
  }, {
    route: 'presidents-message',
    subRoutes: [],
    title: 'presidentsMessage.title',
  }, {
    route: 'disinformation-and-social-media-a-global-governance-challenge',
    subRoutes: [],
    title: 'disinformationAndSocialMedia.title',
  }, {
    route: 'governing-cyberspace-during-a-crisis-in-trust',
    subRoutes: [],
    title: 'governingCyberspaceDuringACrisisInTrust.title',
  }, {
    route: 'multilateral-institutions-mark-a-tumultuous-year',
    subRoutes: [],
    title: 'multilateralInstitutionsMarkATumultuousYear.title',
  }, {
    route: 'building-closer-ties-between-canada-and-india',
    subRoutes: [],
    title: 'buildingCloserTiesBetweenCanadaAndIndia.title',
  }, {
    route: 'a-clarion-call-for-protecting-the-worlds-refugees',
    subRoutes: [],
    title: 'aClarionCallForProtectingTheWorldsRefugees.title',
  }, {
    route: 'innovation-nation-making-canada-a-leader-in-the-global-ideas-economy',
    subRoutes: [],
    title: 'innovationNation.title',
  }, {
    route: 'braiding-legal-orders-implementing-undrip-in-canada',
    subRoutes: [],
    title: 'braidingLegalOrders.htmlTitle',
  }, {
    route: 'curbing-cultural-appropriation-through-intellectual-property-law',
    subRoutes: [],
    title: 'curbingCulturalAppropriationThroughIntellectualPropertyLaw.title',
  }, {
    route: 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
    subRoutes: [],
    title: 'mediaAndMassAtrocityTheRwandaGenocideAndBeyond.title',
  }, {
    route: 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
    subRoutes: [],
    title: 'exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title',
  }, {
    route: 'informing-the-debate-around-internet-security-and-trust',
    subRoutes: [],
    title: 'informingTheDebateAroundInternetSecurityAndTrust.title',
  }, {
    route: 'models-for-data-governance',
    subRoutes: [],
    title: 'modelsForDataGovernance.title',
  }, {
    route: 'a-bretton-woods-moment-for-the-digital-age',
    subRoutes: [],
    title: 'aBrettonWoodsMomentForTheDigitalAge.title',
  }, {
    route: 'outputs-and-activities',
    subRoutes: [],
    title: 'outputsAndActivities.title',
  }, {
    route: 'timeline',
    subRoutes: [],
    title: 'timeline.title',
  }, {
    route: 'financials.auditors-report',
    subRoutes: [
      'financials.balance-sheet',
      'financials.notes',
      'financials.revenue-and-expenses',
    ],
    title: 'financials.title',
  }, {
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
    get(this, 'routes').forEeach((route, index) => {
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
