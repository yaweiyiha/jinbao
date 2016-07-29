import Widget from 'static/js/widget.js';

var style = __inline('./table.inline.less');
var tpl = __inline('./table.tpl');

require.loadCss({
    name: 'usersys-widget-table-style',
    content: style
});

var table = Widget.extend({
    
    init: function (data) {
    	console.log(data);
        var vm = this.display(data, tpl ,'vue');
        this.set(vm);
    },
    get: function(){
    	return this.vm;
    },
    set: function(vm){
    	this.vm = vm;
    }
})

export default table;