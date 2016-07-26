/**
 * 此处需要声明 require.async所有的可能值
 * @require.async jinbao:controller/mainControl.js
 */

import Url from 'widget/url/url.js'

class Router {
    
    constructor(){
        this.DEFUALT_PAGE = 'main';
    }
    /**
    *  route init 
    **/
    init() {
        var me = this;
        this.navigation();

        listener.on('page', 'reload', function() {
            me.navigation();
        });

        window.addEventListener('hashchange', function () {

            listener.trigger('hash', 'change');
            me.navigation();
        }, false);
    }

    navigation() {

        let me = this;
        let hash = Url.getHash() || this.DEFUALT_PAGE;
        let page = Url.getPage() || '';
        let configData = urlConfig[page] || {};
        let path = `jinbao:controller/${hash}Control.js`;
        
        listener.trigger('page', 'change');
        
        require.async(path, function (controller) {
            new controller(configData);

        });
    }
}
