
/**
 * Module dependencies.
 */

var fs = require('fs')
  , html2js = require('..')
  , read = fs.readFileSync
  , vm = require('vm')

describe('html2js(str)', function(){
  it('should return js', function(){
    var html = read('test/tip.html', 'utf8');
    var js = html2js(html);
    var mod = { exports: {} };
    vm.runInNewContext(js, { module: mod });
    mod.exports.should.equal(html);
  })
})