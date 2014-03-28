Package.describe({
    summary: 'Easily create plain objects with computed keys as Handlebars helper.'
});
 
Package.on_use(function (api) {
  api.use([
    'obj',
    'coffeescript',
    'handlebars'
  ],'client');
 
  api.add_files('client.coffee', 'client');
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'handlebars-obj',
    'templating',
    'test-helpers',
    'tinytest'
  ], 'client');
  api.add_files([
    'test.html',
    'test.coffee'
  ], 'client');
});