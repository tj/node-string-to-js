
/**
 * Module dependencies.
 */

var fs = require('fs')
  , str2js = require('..')
  , read = fs.readFileSync
  , vm = require('vm')

describe('str2js(str)', function(){
  it('should return js', function(){
    var html = read('test/tip.html', 'utf8');
    var js = str2js(html);
    var mod = { exports: {} };
    vm.runInNewContext(js, { module: mod });
    mod.exports.should.equal(html);
  })
})
describe('str2js(str, var)', function(){
  it('should return js with custom variable', function(){
    var html = read('test/tip.html', 'utf8');
    var js = str2js(html, 'testVar');
    js.should.match(/var testVar =/);
  })
})
