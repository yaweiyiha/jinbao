var style = __inline('./datecontrol.inline.less');

require.loadCss({
    name: 'usersys-widget-datecontrol-style',
    content: style
});

class  datecontrol{

    constructor(opts){
        if (!opts.wrapper) {
            throw new Error('missing opts.wrapper param');
        }
        this.wrapper = opts.wrapper;
        this.tpl = __inline('./datecontrol.tpl');
        this.init();
    }

    init() {
        this.wrapper.datetimepicker({
            language : 'zh-CN',
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayBtn: true,     
            todayHighlight: 1,
            startView: 2,
            minView: 2
        });
    }
}

export default datecontrol;