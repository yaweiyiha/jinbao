import Model from 'static/js/model.js'

var url = require('jinbao:widget/url/url.js');

class tableModel extends Model{

    getData(url,param) {
        var me = this;
        return new Promise(function(resolve, reject){

            var xhr = $.ajax({
                url:  url ,
                type: 'POST',
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 5000,
                cache: false,
                success: function (ret) {
                    resolve(ret);
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    }
}

module.exports = tableModel;