# ui-obj

[![Build Status](https://travis-ci.org/tamino-martinius/meteor-ui-obj.png?branch=master)](https://travis-ci.org/tamino-martinius/meteor-ui-obj)

Easily create plain objects with computed keys as meteor ui helper.

Useful to set the context of the current scope e.g. for `iron-router` paths.

```hbs
{{#with $obj "one" 1 "two" 2}}
```

sets context to

```hbs
{one: 1, two: 2}
```

Merge the context within a `each` block with the outer context

```hbs
{{#each items}}
  {{#with $obj .. .}}
```
