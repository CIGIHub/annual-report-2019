import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('curbing-cultural-appropriation-through-intellectual-property-law');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/curbing-cultural-appropriation-fashion-industry',
      title: get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'twitter',
      iconPrefix: 'fab',
      link: 'https://twitter.com/CIGIonline/status/1113450942664511488',
      title: get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.link2'),
      type: get(this, 'intl').t('socialMedia'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/cultural-appropriation-fashion-industry-can-intellectual-property-rights-help',
      title: get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.paragraph2'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law.mp4`;
  }),
});
