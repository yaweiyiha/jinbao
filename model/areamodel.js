import Model from 'static/js/model.js'



class areaModel extends Model{

    getData(dataKey = '') {

    	var Dict = {
    		'province' : 'listProvinces',
    	}
    	
        return new Promise(function(resolve, reject){

            var xhr = $.ajax({
                url: Config['host'] + Dict[dataKey],
                method: 'GET',
                timeout : 5000,
                dataType: 'json',
                cache: false,
                success: function (ret) {
                	debugger
                    if (ret.status === 'S') {
                    	debugger
                        resolve(ret.data);
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