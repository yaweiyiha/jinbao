/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
**/
import Control from 'static/js/controller.js';
import mainPageStructure  from 'config/pageStructure.js';

/**
 * mainPage own css
 */
var style = __inline('/static/css/page/main-page.inline.less');

require.loadCss({
    name: 'jinbao-main-page-style',
    content: style
});

/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    header: 
        { widget: 'header',data: {},container: '.header-box' },
    form : 
        { widget: 'form', data: {},container: '.cnt-box' },
    menu : 
        { widget: 'menu', container: '.menu-box' },
    table : 
        { widget: 'table', container: '.cnt-box' },
    backtotop : 
        { widget: 'backtotop', container: '.cnt-box'}
};


class MainControl extends Control{

    constructor(data){
        super(data);
    }
    /**
     * data from router
     * @param  {object} data
     * @return void
     */
    init(data){
        var me = this;
        var formData = data.form;
        this.widgets = this.createPageStructure(mainPageStructure, widgets);

        /**
         * has no data ,can render directly
         */
        me.getViews([widgets.header,widgets.backtotop]);
        /**
         * render with widget's own data
         */
        me.getViews([widgets.menu],menusConfig);
        me.getViews([widgets.form],formData);


        me.getModel('table',(model) => {
            
            model.getData(formData.url,formData.param).then((res) => {
                me.getViews([me.widgets.table], $.extend(res,formData));
            });
        });

        listener.trigger('page', 'loaded', {info: 'load success'});
    }
}

export default MainControl;
