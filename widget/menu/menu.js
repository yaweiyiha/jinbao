import Widget from 'static/js/widget.js';

var style = __inline('./menu.inline.less');
var tpl = __inline('./menu.tpl');

require.loadCss({
    name: 'jinbao-widget-menu-style',
    content: style
});

var menu = Widget.extend({
    
    init: function (data) {
		//console.log(JSON.stringify(data));
		this.display(data, tpl);
        
    }
})

export default menu;