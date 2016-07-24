

window.Model = function Model() {

}

$.extend(Model.prototype, {
    
    getData: function(dataKey) {
        var self = this;
    	var dataArr = [];
        if(self.dataModel && $.isFunction(self.dataModel)){
            return  self.dataModel(dataKey);
        }

    },
    
    get: function(property) {
        if(this.getData()[property]) {
            return this.getData()[property];
        } else {
            return {};
        }
    },
    
    setData: function(data) {
    	this.data = data;
    },

    remove: function() {

    }

});
