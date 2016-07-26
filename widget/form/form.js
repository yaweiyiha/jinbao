import Widget from 'static/js/widget.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tmpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init: function (data = {}) {
        //debugger 
    	let res  = this.processData(data);
        this.eles = this.display(res, tpl, 'native');
        this.render();
        this.bind();

    },
    processData : function (data = {}){

    	return data;
    },
    render :function(){
        $('.nav-tabs > li:first-child', this.eles).addClass('active');
    },
    bind : function(){
        $('.nav-tabs > li').on('click' ,function(){
            var childrens = $(this).parent().children();
            // for(var c of Object.entries(childrens)) {
                
            // }
            childrens.forEach(function(c){
                
                $(c).hasClass('active') && $(c).removeClass('active');
            });
            $(this).addClass('active');

        })

    }
})

export default form;