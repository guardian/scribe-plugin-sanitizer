# 0.1.10

Bumps the version of HTML Janitor to 2.0.2 to allow validation functions to be used in the Sanitizer.

# 0.1.9

Bumps the HTML Janitor version to 1.0.1 to be more module friendly

Contribution from [Steven Hauser](https://github.com/stevenhauser)

# 0.1.8

Updates Lodash version to 3.5.0

# 0.1.7

Whitelist BR elements due to the way they are used in Scribe. If they scrubbed out then a lot of things start to fail in strange ways.

# 0.1.5

* Avoids an issue with IE9 where class is used as a keyword
* Sync the version numbers of bower and NPM

# 0.1.1

* Whitelist Scribe position markers to avoid stripping them and losing
  the caret position.
