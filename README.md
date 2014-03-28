# handlebars-obj
[![Build Status](https://travis-ci.org/Zaku-eu/meteor-handlebars-obj.png?branch=master)](https://travis-ci.org/Zaku-eu/meteor-handlebars-obj)

Easily create plain objects with computed keys as Handlebars helper.

Useful to set the context of the current scope e.g. for `iron-router` paths.

```
{{#with $obj "one" 1 "two" 2}}
```

sets context to

```
{one: 1, two: 2}
```

Merge the context within a `each` block with the outer context

```
{{#each items}}
  {{#with $obj .. .}}
```
