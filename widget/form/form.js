import Widget from 'static/js/widget.js';
import tableNodel from 'model/tablemodel.js';
import table from 'widget/table/table.js';
import dateControl from 'widget/datecontrol/datecontrol.js';
import cityselect from 'widget/cityselect/cityselect.js';
import Dialog from 'widget/dialog/dialog.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tmpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({
    
    init: function (data = {}) {

        this.localData = {};
    	let res  = this.processData(data);
        this.eles = this.display(res, tpl, 'native');
        this.render();
        this.bind();
    },
    processData : function (data = {}){

    	this.data = data;
        return this.data;   
    },
    render :function(){
        
        if($('.city-select').length !== 0){
            new Vue({
                el: $('.city-select', this._containerDom_).get(0)
            });
        }

        if($('.time').length !== 0){
            var container = $(this);
        }

        if(this.data.tabs.length !== 0){
            var navType = this.data.type;
            var arr = $('.nav-tabs > li').toArray();
            arr.forEach(function(li){
                if($(li).attr('data-key') === navType ){
                     $(li).addClass('active');
                 }else{
                    $(li).hasClass('active') && $(c).removeClass('active');
                 }  
            });
        }

    },
    bind : function(){

        this.beginTimeControl = new dateControl({
            wrapper: $('.beginTime', this._containerDom_)
        });
        this.endTimeControl = new dateControl({
            wrapper: $('.endTime', this._containerDom_)
        });

        $('.dep .choose-button').click(function(){
            var setting = {
                type : 'dep',
                close : false ,
                css :[  {width : 600}, {height : 349} ],
                title : '选择部门'
            }
            var dialog = new Dialog(setting);
        }) 
    },
    submit :function(){
        
        var setting = {
            url : this.data.url,
            data : data
        }
        var model = new tableNodel(setting);
    },
    clearInput :function(){

    }
})

export default form;