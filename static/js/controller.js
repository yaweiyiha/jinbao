/**
 * 此处需要声明 require.async所有的可能值

 * @require.async jinbao:model/tablemodel.js
 * @require.async jinbao:model/rankmodel.js
 * @require.async jinbao:model/likemodel.js
 * @require.async jinbao:model/landownermodel.js
 */

export default class Control{

 	constructor(data){
 		this.init  && this.init(data);
 	}

 	_init(opt) {
        $('#page-wrapper').empty();

        if (self.init && $.isFunction(self.init)) {
            self.init(opt);
        }

        listener.once('page', 'change', function () {
            for (var i in self.widgets) {
                if (self.widgets.hasOwnProperty(i)) {
                    self.widgets[i].wrapperDom = null;
                    self.widgets[i].wrapper = '';
                }
            };
        });
    }

    getModel(modelName, cb) {
        var modelPath  = "jinbao:model/" + modelName + 'model.js';
        require.async(modelPath, function (Model) {
            var model = new Model();
            cb && cb(model);
        });
    } 


    getViews(widgets, pageData, callback) {

        pageData = pageData || {};
        var widgetResource = [];
        var dataResource = [];

        widgets.forEach(function (item) {
            var data = item.data || {};
            data._container_ = item.wrapper || item.container || '#page-wrapper';
            data._error_ = pageData._error_ || '';
            data._containerDom_ = item.wrapperDom || null;
            data._widgetName_ = item.widget;
            var pageDataCopy = $.extend(true, {}, pageData);
            data = $.extend(true, pageDataCopy, data);
            dataResource.push(data);
            var viewPath = 'jinbao:widget/' + item.widget  + '/' + item.widget + '.js';
            widgetResource.push(viewPath);
            
        });
        require.async(widgetResource, function (...widgets) {
            widgets.forEach(function (widget, index) {
                try {
                    widget.createWidget(dataResource[index]);
                } catch (e) {
                    console.error(e);
                }
            });

            callback && callback();
        })
        
    }

    createPageStructure(structure = '', widgets = [], container = '#page-wrapper') {
        container = $(container);
        
        if (structure) {
            structure = $(structure);
            container.empty();
            container.append(structure);
        }

        var counter = 1;
        for (var i in widgets) {
            if (widgets.hasOwnProperty(i)) {
                var item = widgets[i];
                var eleHtml = '<div class="dynamic-widget-' + counter + '"></div>';
                var eleDom = $(eleHtml);
                var wrapper = item.container ? container.find(item.container) : container;

                wrapper.append(eleDom);

                widgets[i].wrapper = '.dynamic-widget-' + counter;
                widgets[i].wrapperDom = eleDom;
                counter++;
            }
        }

        return widgets;
    }

 }


