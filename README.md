# scribe-plugin-sanitizer

## Installation

```
bower install scribe-plugin-sanitizer
```

## Usage Example

scribe-plugin-sanitizer is an AMD module:

```javascript
require(['scribe', 'scribe-plugin-sanitizer'], function (Scribe, scribePluginSanitizer) {
  var scribeElement = document.querySelector('.scribe');
  var scribe = new Scribe(scribeElement);
  scribe.use(scribePluginSanitizer({
    tags: {
      p: true,
      a: {
        href: true,
        target: '_blank'
      }
    }
  }));
});
```

It uses the same format of options as [html-janitor](https://github.com/guardian/html-janitor). To whitelist a tag, specify `true` for it. To whitelisted specific attributes or even specific values, use an object.
