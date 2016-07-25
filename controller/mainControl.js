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
            username: 'xuyawei',
            formdata: {},
        }
    }
};

class MainControl extends Control{

    constructor(data){
        super(data);
    }

    init(data) {

        this.pageStructure = [];

        this.widgets = this.createPageStructure(this.pageStructure, widgets);
        this.getViews([this.widgets.header,this.widgets.form], data.form);
    }
}

export default MainControl;
