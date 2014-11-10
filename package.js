Package.describe({
  name: 'zaku:ui-obj',
  summary: 'Easily create plain objects with computed keys as meteor ui helper.',
  version: '0.9.0',
  git: 'https://github.com/Zaku-eu/meteor-ui-obj.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'mrt:obj@1.0.0',
    'coffeescript',
    'standard-app-packages'
  ],'client');
  api.addFiles('zaku:ui-obj.coffee');
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'standard-app-packages',
    'zaku:ui-obj',
    'tinytest'
  ], 'client');
  api.add_files([
    'zaku:ui-obj-tests.html',
    'zaku:ui-obj-tests.coffee'
  ], 'client');
});
