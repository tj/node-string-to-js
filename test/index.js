
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
  it('should allow for exporting multiple strings', function(){
    var obj = { a: 'aaaaa', b: 'bbbbb', c: 'ccccc' };
    var js = str2js(obj);
    var mod = { exports: {} };
    vm.runInNewContext(js, { module: mod, exports: mod.exports });
    mod.exports.a.should.be.equal(obj.a);
    mod.exports.b.should.be.equal(obj.b);
    mod.exports.c.should.be.equal(obj.c);
  })
})
