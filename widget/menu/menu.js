import Widget from 'static/js/widget.js';

var style = __inline('./menu.inline.less');
var tpl = __inline('./menu.tpl');

require.loadCss({
    name: 'jinbao-widget-menu-style',
    content: style
});

var menu = Widget.extend({
    
    init: function (data) {
        var vm = this.display(data, tpl);

        // vm.$set('message', 'hello taotao');
    }
})

export default menu;