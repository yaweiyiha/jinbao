/**
 * 此处需要声明 require.async所有的可能值
 * @require.async jinbao:controller/mainControl.js
 */

import Url from 'widget/url/url.js'

/*class Router {
    
    constructor(){
        this.DEFUALT_PAGE = 'main';
    }

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
}*/

class Router {
	
	init(){
		var me = this;
		if (window.history.pushState) {
			window.addEventListener("popstate", function() {
				me.stateTrigger();																
			});

			// 默认载入
			me.stateTrigger();
		}
	}
	
	stateTrigger(){
		let me = this;
		var query = location.href.split("/").slice(3);
		var pageHrefVal = '';
		for(var i=0;i<query.length;i++){
			pageHrefVal = pageHrefVal +'/'+ query[i];
		}
		
		if(pageHrefVal == '/'){
			history.replaceState(null, document.title, location.href+'index.html');
		}else{
			
		}
		
		me.navigation();
	}
	
	navigation() {
        let page = Url.getPage() || '';
        let configData = urlConfig[page] || {};
        let path = `jinbao:controller/mainControl.js`;
        
        require.async(path, function (controller) {
            new controller(configData);
        });
    }
};
