Package.describe({
    summary: 'Easily create plain objects with computed keys as meteor ui helper.'
});
 
Package.on_use(function (api) {
  api.use([
    'obj',
    'coffeescript',
    'standard-app-packages'
  ],'client');
 
  api.add_files('client.coffee', 'client');
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'standard-app-packages',
    'ui-obj',
    'test-helpers',
    'tinytest'
  ], 'client');
  api.add_files([
    'test.html',
    'test.coffee'
  ], 'client');
});