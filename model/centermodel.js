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

        // var data = {
        //     account : 'yaoone',
        //     password : 'Abc123456',
        //     padEquipmentNo : '862823023570478',
        //     deviceTokenCode :'862823023570478',
        // }

        return new Promise(function(resolve, reject){


            //var url = userConfig['host'] + urlDict[dataKey];
            // var url = 'http://cq01-ocean-53.epc.baidu.com:8787/usersystem_v2/' + urlDict[dataKey];
           // var url = "http://qikun.bravowhale-dev.com:8118/app/user/login";
            // var url ="http://10.66.19.231:8088/app/user/login";
            var url = "http://127.0.0.1:8080/admin/sales/searchAllSalesOrder/search?orderStatus=REVIEW"
            //var url = "http://qikun.bravowhale-dev.com:8118/admin/sales/searchAllSalesOrder/search?orderStatus=REVIEW"
            var xhr = $.ajax({
                url:  url ,
                type: 'POST',
                data: JSON.stringify(data),
                timeout : 5000,
                dataType: 'json',
                cache: false,
                success: function (ret) {
                    // console.log(ret);
                    // console.log('success');
                    resolve(ret);
                    // if (ret.error === 2000 || ret.error === 4001) {
                    //     if (ret.error === 4001) {

                    //         ret.data.needLogin = true;
                    //     }
                    //     resolve(ret.data);
                    // } else {
                    //     reject();
                    // }

                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    }


}


module.exports = centerModel;