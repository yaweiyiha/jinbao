import Widget from 'static/js/widget.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init: function (data = {}) {
    	data  = this.processData(data);
        this.vm = this.display(data, tpl);
    },
    processData : function (data){
    	return data;
    },

    method:{
    	doSomeThing : function(){
    	}
    }
})

export default form;