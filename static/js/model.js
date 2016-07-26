export default class Model{
    
    getData(dataKey) {
        var self = this;
        var dataArr = [];
        if(self.dataModel && $.isFunction(self.dataModel)){
            return  self.dataModel(dataKey);
        }

    }
    
    get(property) {
        if(this.getData()[property]) {
            return this.getData()[property];
        } else {
            return {};
        }
    }
    
    setData(data) {
        this.data = data;
    }

    remove() {

    }
}
