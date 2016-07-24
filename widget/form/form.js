import Widget from 'static/js/widget.js';

var style = __inline('./form.inline.less');
var tpl = __inline('./form.tpl');

require.loadCss({
    name: 'usersys-widget-form-style',
    content: style
});

var form = Widget.extend({

    data : {
        message: 'hello xuyawei'
    },
    
    init: function () {
        var vm = this.display(this.data, tpl);

    }
})

export default form;