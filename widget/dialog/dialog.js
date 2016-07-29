var style = __inline('./dialog.inline.less');
var tpl = __inline('./dialog.tpl');
 
require.loadCss({
    name: 'usersys-widget-dialog-style',
    content: style
});

class dialog{

    constructor(opts){

        this.opts = opts || [];
        this.el = $('.dialog-cover');
        opts.el = this.el;
        
        this.init(opts);
        this.create(opts);
    }

    init(opts) {
        this.setStyles(opts.css);
    }

    create(opts){
        var me = this;
        this.open(opts);
    }
    open(opts){


        vm = new Vue({
            el :'.dialog-wrapper',
            data: opts,
            template: tpl,
            replace : false,
            methods: {
                show :function(){
                    this.$el.hidden = false;
                },
                hide :function(){
                    this.$el.hidden = true
                }
            }
        });

        if(vm && vm.$el.hidden == true){
            vm.show();
        }
    }


    setStyles(styles){
        var me = this;
        styles.forEach(function( k , v){
            me.el.css(k , v + 'px');
        });
    }
}

export default dialog;