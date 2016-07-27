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
        province: [

            { name : '', code : '' }
        ],
        city : [
            { name : '', code : '' }
        ]
    },
    init: function () {
        var vm = this.display(this.data, tpl,'vue');
        this.area = new areaModel();
        this.render();

    },
    bind: function(){
    	
    },
    render:function(){
    	this.getProvince();

    },
    getProvince :function(){
        var me = this;
    	this.area.getData('province').then(function(data){
			data.forEach(function(li){

                let obj = {
                    code : li.provinceCode,
                    name : li.provinceName
                }
				me.data.province.push(obj);
			});

    	},
    	 function(value) {
  				// failure
		});
    },
    getCity : function(){
        this.area.getData('city').then(function(data){
            data.forEach(function(li){

                let obj = {
                    name : li.provinceName,
                    code : li.provinceCode
                }
                me.data.province.push(obj);
            });
        });
    },
    getArea :function(){

    },

    watch: {
    	province : function(){

            console.log(this.province);

    		console.log('provonce changed!');
    	}
    }
})

export default cityselect;