/**
 * 此处需要声明 require.async所有的可能值
 * @require.async usersysv2:controller/mainControl.js
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

        var me = this;
        var pageName = Url.getHash() || this.DEFUALT_PAGE;
        var path = `usersysv2:controller/${pageName}Control.js`;
        
        listener.trigger('page', 'change');
        
        require.async(path, function (controller) {
            var cc = new controller.default();
        });
    }
}
