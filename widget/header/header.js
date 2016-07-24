import Widget from 'static/js/widget.js';

var style = __inline('./header.inline.less');
var tpl = __inline('./header.tpl');

require.loadCss({
    name: 'usersys-widget-header-style',
    content: style
});

var header = Widget.extend({

    data : {
        message: 'hello xuyawei'
    },
    
    init: function () {
        var vm = this.display(this.data, tpl);

        // vm.$set('message', 'hello taotao');
    }
})

export default header;