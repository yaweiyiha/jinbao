import Model from 'static/js/model.js'

var url = require('jinbao:widget/url/url.js');

class centerModel extends Model{

    dataModel(dataKey) {
        var me = this;

        var data = {
            area : "-1" ,
            beginTime : '' ,
            city : "-1" ,
            customer : "",
            department : "",
            departmentIds : "" ,
            draw :1,
            endTime : "",
            manageAccount : "",
            manageName : "",
            orderNumber : "" ,
            orderStatus : "-1",
            order_type  : "-1",
            pageNow  : 1,
            pageSize  : 10 ,
            productName : "",
            province : "-1",
            reconciliationStatusx : "-1"  
        }

        return new Promise(function(resolve, reject){


            //var url = userConfig['host'] + urlDict[dataKey];
            // var url = 'http://cq01-ocean-53.epc.baidu.com:8787/usersystem_v2/' + urlDict[dataKey];

            var xhr = $.ajax({
                url: "http://qikun.bravowhale-dev.com:8118/admin/sales/searchAllSalesOrder/search",
                data: JSON.stringify(data),
                contentType : 'application/json;charset=utf-8',
                method: 'POST',
                timeout : 5000,
                dataType: 'jsonp',
                cache: false,
                success: function (ret) {
                    console.log(ret);
                    // if (ret.error === 2000 || ret.error === 4001) {
                    //     if (ret.error === 4001) {

                    //         ret.data.needLogin = true;
                    //     }
                    //     resolve(ret.data);
                    // } else {
                    //     reject();
                    // }

                },
                error: function () {
                    console.log('fail')
                    reject();
                }
            });
        });
    }


}


module.exports = centerModel;