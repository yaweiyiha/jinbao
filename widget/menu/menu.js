import Widget from 'static/js/widget.js';

var style = __inline('./menu.inline.less');
var tpl = __inline('./menu.tpl');

require.loadCss({
    name: 'jinbao-widget-menu-style',
    content: style
});

var menu = Widget.extend({
    
    init: function (data) {
		this.display(data, tpl);
        
    },
    methods : {
		subShow: function (event) {
			var g = $(event.target).closest("a");
			if (!g || g.length == 0) {
				return
			}
			
			var f = g.next().get(0);
			
			if (!$(f).is(":visible")) {
				var d = $(f.parentNode.parentNode).closest("ul");
				d.find("> .open > .submenu").each(function() {
					if (this != f && !$(this.parentNode).hasClass("active")) {
						$(this).slideUp(200).parent().removeClass("open")
					}
				})
			} else {}
			
			if ($(f.parentNode.parentNode).hasClass("nav-list")) {
				return false
			}
			$(f).slideToggle(200).parent().toggleClass("open");
			return false
			
		}
    }
})

export default menu;