import Widget from 'static/js/widget.js';
import areaModel from 'model/areaModel.js';

var style = __inline('./cityselect.inline.less');
var tpl = __inline('./cityselect.tpl');

require.loadCss({
    name: 'usersys-widget-cityselect-style',
    content: style
});

var cityselect = Widget.extend({
    data : {
        province: {
    		name : [],
    		code : [],
        }
    },
    init: function () {
        var vm = this.display(this.data, tpl,'vue');
        this.area = new areaModel();
        this.render();

    },
    bind: function(){
    	
    },
    render:function(){
    	var me = this;
    	this.getProvince();

    },
    getProvince :function(){

    	this.area.getData('province').then(function(data){
    		debugger
    		let list = data.list ;
				var html = '';
				list.forEach(function(li){
					me.data.province.name.push(li.provinceName);
					me.data.province.code.push(li.provinceCode);
				});
    	},
    	 function(value) {
  				// failure
		});
    },
    getCity : function(){

    },
    getArea :function(){

    },

    watch: {
    	province : function(){
    		console.log('provonce changed!');
    	}
    }
})

export default cityselect;