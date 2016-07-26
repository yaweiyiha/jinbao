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
        data: {
            username: 'xuyawei'
        },
        container: '.header-box'
    },
    form : {
        widget: 'form',
        data: {
            username: 'xuyawei',
        },
        container: '.content-box'
    },
    menu : {
        widget: 'menu',
        container: '.menu-box'
    },
    table : {
        widget: 'table',
        container: '.content-box',
        data: {
            username: 'xuyawei',
        },
    },
    cityselect : {
        widget: 'cityselect',
        container: '.content-box',
        data: {
            username: 'xuyawei',
        },
    }
};

let pageStructure = `
<div class="header-box"></div>
<div class="clearfix">
    <div class="menu-box left"></div>
    <div class="content-box right"></div>
</div>`;

class MainControl extends Control{

    constructor(data){
        super(data);
    }

    init(data) {

        this.widgets = this.createPageStructure(pageStructure, widgets);

        // var centerData = this.getModel('center',function(model){
        //     model.getData();
        // });
        this.getViews([this.widgets.header,this.widgets.form,
            this.widgets.menu,this.widgets.table,this.widgets.cityselect], data.form);
    }
}

export default MainControl;
