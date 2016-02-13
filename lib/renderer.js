'use strict';

var haml = require('hamljs');

function hamlRenderer(data, locals) {
  return haml.render(data.text, {
    filename: data.path,
    cache: false,
    locals: locals
  });
}

module.exports = hamlRenderer;
