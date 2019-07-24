'use strict';

const should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-haml', () => {
  const r = require('../lib/renderer');

  it('default', () => {
    const result = r({
      text: '%div Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('\n<div>Hello Hexo</div>');
  });
});
