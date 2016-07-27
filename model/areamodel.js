import Model from 'static/js/model.js'



class areaModel extends Model{

    getData(dataKey = '',opt) {

    	var Dict = {
    		'province' : 'listProvinces',
            'city' : 'listByProvinceCode',
    	}
    	
        return new Promise(function(resolve, reject){

            var xhr = $.ajax({
                url: Config['host'] + Dict[dataKey],
                method: 'GET',
                timeout : 5000,
                dataType: 'json',
                cache: false,
                success: function (ret) {
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


module.exports = areaModel;