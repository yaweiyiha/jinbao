import dialog from 'dialog.js'

class  alert extends dialog{

    init() {
        this.openDeptSelectWin();
    }

    create(opts){
        this.opts = opts || [];
    }   
   
}

export default alert;