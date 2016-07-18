var tpl = _inline('foo.tpl');
require('../commons/heo.js')
exports.render = function(dom){
	dom.innerHTML = tpl
}