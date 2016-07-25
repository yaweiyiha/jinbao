/* globals INTERFACE_FATAL_ERROR */
var Widget = (function() {
    var self;
    var _init = function(data) {
        if (!data._containerDom_) {
            // console.log('widget container is not exists!');
            return;
        }
        self._containerDom_ = data._containerDom_;
        self._data_ = data;
        self._load_error = false;
        if (self._data_._error_ === INTERFACE_FATAL_ERROR) {
            self._load_error = true;
        }

        if (self.init && $.isFunction(self.init)) {
            self.init(data);
        }
    };

    function Widget(data) {
        _init(data);
    }

    Widget.prototype._setLoadError = function (flag) {
        var _data_ = this._data_;
        if (flag) {
            _data_._error_ = INTERFACE_FATAL_ERROR;
        } else {
            _data_._error_ = '';
        }
        this._load_error = !!flag;
    }

    Widget.prototype.display = function (data, tpl) {
        var me = this;
        var _data_ = this._data_;
        var container = this._containerDom_;
        var vm = null;
        container.empty();

        var errorTpl = '<div class="wrapper">\
                        <div class="error-img"></div>\
                        <p class="info">加载失败，点击重新加载</p>\
                        </div>';

        if (_data_._error_ === INTERFACE_FATAL_ERROR) {
            tpl.find('.content-wrapper').remove();
            tpl.find('.error-wrapper').empty().append($(errorTpl));
        } else {
            vm = new Vue({
                el: container.get(0),
                data: data,
                template: tpl,
                methods: me.method
            });
        }

        // tpl.appendTo(container);

        // container.find('.error-wrapper').on('click', function () {
        //     me._last_reload_time = +new Date();
        //     $(this).find('.info').text('重新加载中...');
        //     me.reload();
        // });
        return vm;
    }

    Widget.prototype.reload = function () {
        // throw new Error('must implement reload function in widget!');
    }

    Widget.prototype.revertErrorTip = function () {
        var _data_ = this._data_;
        var container = this._containerDom_;

        var currentTime = +new Date();
        var timeLimit = 500;

        var timeDiff = currentTime - this._last_reload_time;
        if (timeDiff >= timeLimit) {
            container.find('.error-wrapper .info').text('加载失败，点击重新加载');
        } else {
            setTimeout(function () {
                container.find('.error-wrapper .info').text('加载失败，点击重新加载');
            }, (timeLimit - timeDiff));
        }

    }
    /**
     * 根据传进来的对象实例扩展组件基类，会返回child而不是Widget是因为如果在Widget基类上直接扩展，多个组件会相互影响
     * @param  {Object} obj 组件对象实例
     * @return {function}  扩展Widget基类后的组件构造函数
     */
    Widget.extend = function(obj) {
        var parent = this;
        var child = function() {
            self = this;
            return parent.apply(this, arguments);
        };
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        Surrogate = null;
        $.extend(child.prototype, obj);
        child.createWidget = function(data) {
            new child(data);
        }
        return child;
    };
    return Widget;
})();

export default Widget;