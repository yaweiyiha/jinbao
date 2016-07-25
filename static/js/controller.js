/**
 * 此处需要声明 require.async所有的可能值

 * @require.async usersysv2:model/centermodel.js
 * @require.async usersysv2:model/rankmodel.js
 * @require.async usersysv2:model/likemodel.js
 * @require.async usersysv2:model/landownermodel.js
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
        var modelPath  = "usersysv2:model/" + modelName + 'model.js';
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
            var viewPath = 'usersysv2:widget/' + item.widget  + '/' + item.widget + '.js';
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

    createPageStructure(structure, widgets, container) {
        structure = structure || [];
        widgets = widgets || [];
        container = container || '#page-wrapper';
        container = $(container);

        structure.forEach(function (item) {
            var item = item.replace(/\./g, ' ');
            var eleHtml = '<div class="' + item + '"></div>';
            container.append($(eleHtml));
        });

        var counter = 1;
        for (var i in widgets) {
            if (widgets.hasOwnProperty(i)) {
                var item = widgets[i];
                var eleHtml = '<div class="dynamic-widget-' + counter + '"></div>';
                var eleDom = $(eleHtml);
                var wrapper = item.container ? $(item.container) : container;

                wrapper.append(eleDom);

                widgets[i].wrapper = '.dynamic-widget-' + counter;
                widgets[i].wrapperDom = eleDom;
                counter++;
            }
        }

        return widgets;
    }

 }


