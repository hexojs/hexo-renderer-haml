var haml = require('hamljs'),
  _ = require('lodash');

hexo.extend.renderer.register('haml', 'html', function(data, locals){
  return haml.render(data.text, _.extend({filename: data.path}, locals));
}, true);