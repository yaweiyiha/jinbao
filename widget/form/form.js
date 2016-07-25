import Widget from 'static/js/widget.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tmpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init: function (data = {}) {
    	data  = this.processData(data);
        var eles = this.display(data, tpl, 'native');

        $('.nav-tabs > li:first-child', eles).addClass('active');
    },
    processData : function (data = {}){
    	return data;
    },

    method:{
    	doSomeThing : function(){
            alert('hello');
    	}
    }
})

export default form;