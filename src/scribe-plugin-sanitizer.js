define([
  'html-janitor',
  'lodash-amd/modern/objects/merge',
  'lodash-amd/modern/objects/cloneDeep'
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
    // We extend the config to let through Scribe position markers,
    // otherwise we lose the caret position when running the Scribe
    // content through this sanitizer.
    var configAllowMarkers = merge(cloneDeep(config), {
      tags: {
        em: {'class': 'scribe-marker'}
      }
    });

    return function (scribe) {
      var janitor = new HTMLJanitor.amdWeb(configAllowMarkers);
      scribe.registerHTMLFormatter('sanitize', janitor.clean.bind(janitor));
    };
  };

});
