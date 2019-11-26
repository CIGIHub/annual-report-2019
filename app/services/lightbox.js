import { set } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  showLightbox: null,
  subType: null,

  closeLightbox: function() {
    set(this, 'showLightbox', null);
    set(this, 'subType', null);
  },

  closeTableOfContentsAcknowledgements: function() {
    set(this, 'subType', null);
  },

  showPublicationLightbox: function() {
    set(this, 'subType', 'publication');
  },

  showTableOfContents: function() {
    set(this, 'showLightbox', 'tableofcontents');
  },

  showTableOfContentsAcknowledgements: function() {
    set(this, 'subType', 'acknowledgements');
  },
});
