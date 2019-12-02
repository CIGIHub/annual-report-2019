import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/publications/four-internets-geopolitics-digital-governance',
      title: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/four-visions-shaping-way-we-use-internet',
      title: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link2'),
      type: get(this, 'intl').t('opinion'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph1'),
    }, {
      bullets: [
        get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2.bullet1'),
        get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2.bullet2'),
        get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2.bullet3'),
        get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2.bullet4'),
      ],
      isList: true,
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph3'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance.mp4`;
  }),
});
