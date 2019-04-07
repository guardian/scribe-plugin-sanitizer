define([
  'html-janitor',
  'lodash-amd/modern/object/merge',
  'lodash-amd/modern/lang/cloneDeep'
], function (
  HTMLJanitor,
  merge,
  cloneDeep
) {

  /**
   * This plugin adds the ability to sanitize content when it is pasted into the
   * scribe, adhering to a whitelist of allowed tags and attributes.
   */

  'use strict';

  return function (config) {
    // We extend the config to let through (1) Scribe position markers,
    // otherwise we lose the caret position when running the Scribe content
    // through this sanitizer, and (2) BR elements which are needed by the
    // browser to ensure elements are selectable.
    var configAllowMarkers = merge(cloneDeep(config), {
      tags: {
        em: {'class': 'scribe-marker'},
        br: {}
      }
    });

    return function (scribe) {
      var janitor = new HTMLJanitor(configAllowMarkers);

      scribe.registerHTMLFormatter('sanitize', janitor.clean.bind(janitor));
    };
  };

});
