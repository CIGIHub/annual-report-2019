import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('governing-cyberspace-during-a-crisis-in-trust');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/cyberspace',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link1'),
      type: get(this, 'intl').t('opinion'),
    }, {
      icon: 'comment-alt-lines',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/articles/patching-our-digital-future-unsustainable-and-dangerous',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link2'),
      type: get(this, 'intl').t('essay'),
    }, {
      icon: 'film',
      iconPrefix: 'fal',
      link: 'https://www.cigionline.org/multimedia/video-crime-and-policing-cyber-enabled-world',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [{
      isParagraph: true,
      text: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.paragraph1'),
    }, {
      isParagraph: true,
      text: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.paragraph2'),
    }];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust.mp4`;
  }),
});
