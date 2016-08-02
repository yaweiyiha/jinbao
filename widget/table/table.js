import Widget from 'static/js/widget.js';
import tableModel from 'model/tableModel.js'

var style = __inline('./table.inline.less');
var tpl = __inline('./table.tpl');

require.loadCss({
    name: 'usersys-widget-table-style',
    content: style
});

var table = Widget.extend({
    
    data :{
        data : [],  
    },
    init: function (data) {
        this.vm = this.display(data, tpl ,'vue');
        this.bind();
    },
    bind: function(){
        listener.on('page', 'tableUpdate', (type ,data) => {
            this.update(data);
        });
    },
    get: function(){
    	return this.vm;
    },
    update: function(data){

        let model = new tableModel();
        model.getData(data.url ,data.param).then((res) => {
            this.vm.data = res.data;
        });
    },
    watch :{
        data : function(){
            if( this.data.length === 0){
                $(".emptyContent").css('display' , 'block');
            }
        }
    }
})

export default table; 