define([
  'html-janitor',
  'lodash-modern/objects/assign'
], function (
  HTMLJanitor,
  extend
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
    var tags = config && config.tags;
    var em   = tags   && tags.em;
    var configAllowMarkers = extend({}, config, {
      tags: extend({}, tags, {
        em: extend({}, em, {class: 'scribe-marker'})
      })
    });

    return function (scribe) {
      var janitor = new HTMLJanitor(configAllowMarkers);

      scribe.htmlFormatter.formatters.push(janitor.clean.bind(janitor));
    };
  };

});
