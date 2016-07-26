import Widget from 'static/js/widget.js';

var style = __inline('./table.inline.less');
var tpl = __inline('./table.tpl');

require.loadCss({
    name: 'usersys-widget-table-style',
    content: style
});

var table = Widget.extend({
    
    init: function (data) {
        var vm = this.display(data, tpl ,'vue');
    }
})

export default table;