'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-haml', function() {
  var r = require('../lib/renderer');

  it('default', function() {
    var result = r({
      text: '%div Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('\n<div>Hello Hexo</div>');
  });
});
