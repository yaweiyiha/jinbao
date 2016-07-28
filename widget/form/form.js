import Widget from 'static/js/widget.js';
import dateControl from 'widget/datecontrol/datecontrol.js';
import cityselect from 'widget/cityselect/cityselect.js';

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
        new Vue({
            el: $('.city-select', this._containerDom_).get(0)
        });
        $('.nav-tabs > li:first-child', this.eles).addClass('active');
        if($('.time').length !== 0){
            var container = $(this);
            // var data = [];
            // data.container = container;
            // dateControl.init(data);
        }
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

        this.beginTimeControl = new dateControl({
            wrapper: $('.beginTime', this._containerDom_)
        });
        this.endTimeControl = new dateControl({
            wrapper: $('.endTime', this._containerDom_)
        });
    }
})

export default form;