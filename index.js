/* global hexo */
'use strict';

hexo.extend.renderer.register('haml', 'html', require('./lib/renderer'), true);
