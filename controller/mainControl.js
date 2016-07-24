import Control from 'static/js/controller.js'

// console.log(control);
var widgets  = {
    header: {
        widget: 'header',
        data: {
            username: 'xuyawei'
        }
    },
    form : {
        widget: 'form',
        data: {
            username: 'xuyawei'
        }
    }
};

class MainControl extends Control{

    constructor(){
        super();
    }

    init(opt) {

        this.pageStructure = [];
        this.widgets = this.createPageStructure(this.pageStructure, widgets);
        this.getViews([this.widgets.header,this.widgets.form]);
    }
}

export default MainControl;
