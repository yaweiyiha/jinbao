import Model from 'static/js/model.js'



class loginModel extends Model{

    getData(dataKey = '',opt) {

        var opt = opt || '';
    	var url = '/app/user/login';
        var data = {
            account : 'yuyangxing' ,
            password : 'Abc123456',
            padEquipmentNo : '862823023940986',
            deviceTokenCode : '862823023940986'
        }

        return new Promise(function(resolve, reject){
            
            var xhr = $.ajax({

                url: url,
                type: 'POST',
                dataType: 'json',
                data : data,
                headers: {
                    "token" : "7b8ec865a2dba4e4f96d5b98707a0894"
                },
                success: function (ret) {
                    console.log(ret);
                    if (ret.status === 'S') {
                        resolve(ret.list);
                    } else {
                        reject();
                    }
                },
                error: function () {
                    console.log('fail')
                    reject();
                }
            });
        });
    }
}


export default loginModel;