/**
 * 此处需要声明 require.async所有的可能值
 * @require.async jinbao:widget/header/header.js
 * @require.async jinbao:widget/form/form.js
 * @require.async jinbao:widget/menu/menu.js
 */

import Control from 'static/js/controller.js'

var style = __inline('/static/css/page/main-page.inline.less');

require.loadCss({
    name: 'jinbao-main-page-style',
    content: style
});
var widgets  = {
    header: {
        widget: 'header',
        data: {},
        container: '.header-box'
    },
    form : {
        widget: 'form',
        data: {},
        container: '.cnt-box'
    },
    menu : {
        widget: 'menu',
        container: '.menu-box'
    },
    table : {
        widget: 'table',
        container: '.cnt-box',
    },
    backtotop : {
        widget: 'backtotop',
        container: '.cnt-box'
    }
};

let pageStructure = `
<div class="header-box"></div>
<div class="clearfix">
    <div class="menu-box left"></div>
    <div class="cnt-box right"></div>
</div>`;

class MainControl extends Control{

    constructor(data){
        super(data);
    }

    init(data) {
        var me = this;
        var formData = data.form;
        this.widgets = this.createPageStructure(pageStructure, widgets);
        me.getViews([me.widgets.header]);
        me.getViews([me.widgets.menu],menusConfig);
        me.getViews([me.widgets.backtotop]);
        me.getViews([me.widgets.form],formData)

        if( locData && locData[formData.type] 
            && typeof locData[formData.type] === Object 
            && locData[formData.type] !== null){
            me.getViews([me.widgets.form,me.widgets.table], $.extend(locData[formData.type],data.form));
        }else{
            var centerData = this.getModel('table',function(model){
                
                model.getData(formData.url,formData.param).then(function(res){
                    me.setLocData(formData.type , res);
                    me.getViews([me.widgets.table], $.extend(res,formData));
                });
            });
        }

        listener.trigger('page', 'loaded', {info: '加载成功'});
    }
    setLocData(key,data){
        locData[key] = data;
    }
}

export default MainControl;
