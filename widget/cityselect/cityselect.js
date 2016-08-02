import areaModel from 'model/areamodel.js';

var style = __inline('./cityselect.inline.less');
var tpl = __inline('./cityselect.tpl');

require.loadCss({
    name: 'usersys-widget-cityselect-style',
    content: style
});

export default Vue.component('city-select', {
  template: tpl,
  props: ['key'],
  data: function () {
    return {
            provinceSelected : '省',
            citySelected : '市',
            province : [],
            city     : [],
            subarea  : [],
            area : new areaModel()
        }
    },
    ready: function(){
        this.getProvince();
    },
    methods:{
        getProvince :function(){
            var me = this;
            let param = [key,code,arr,name,code] 
                      = ['province','',me.province ,'provinceName','provinceCode'];
            me.getData(...param);
        },
        getCity : function(provinceCode = -1){
            var me = this;
            let param = [key ,code,arr,name ,code] 
                      = ['city',provinceCode,me.city ,'cityName','id'];
            me.getData(...param);
        },
        getArea :function(cityCode = -1){
            var me = this;
            let param = [key ,code,arr,name ,code] 
                      = ['subarea',cityCode,me.subarea ,'name','id'];
            me.getData(...param);         
        },
        getData :function( key,code, arr ,name,id ){
            
            this.area.getData(key,code).then(function(data){
                data.forEach(function(li){
                    
                    let obj = {
                        name : li[name],
                        code : li[id]
                    }
                    arr.push(obj)
                });
            });
        }

    },
    watch: {
        provinceSelected : function(){
            if(!$.isArray(this.provinceSelected)){
                this.getCity(this.provinceSelected);
            } 
        },
        citySelected :function(){
            if(!$.isArray(this.citySelected)){
                this.getArea(this.citySelected);
            }
        },

    }
});