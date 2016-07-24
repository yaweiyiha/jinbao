
var url = require('usersysv2:widget/url/url.js');

var urlDict  = {
    center : 'user/pipe/',
    task : 'task/list/' ,
    achievement : 'user/achievement/',
    sign : 'user/signinlist'

}

function centerModel() {

}

centerModel.prototype = new Model();

/* globals config */
$.extend(centerModel.prototype,{

    dataModel : function (dataKey) {
        var me = this;
        var data = {
            uid: _APP_HASH.uid || '',
            cuid: config.clientInfo.cuid,
            sv: config.clientInfo.sv || '',
            c: config.clientInfo.c || ''
        };
        if (window.config.clientInfo.loc) {
            var loc = window.config.clientInfo.loc.replace(/^\(|\)$/g, '');
            loc = loc.split(',');

            data.loc_x = loc[0];
            data.loc_y = loc[1];
        }
        return new Promise(function(resolve, reject){


            var url = userConfig['host'] + urlDict[dataKey];
            // var url = 'http://cq01-ocean-53.epc.baidu.com:8787/usersystem_v2/' + urlDict[dataKey];

            var xhr = $.ajax({
                url: url,
                data: data,
                method: 'GET',
                timeout : 5000,
                dataType: 'jsonp',
                cache: false,
                success: function (ret) {
                    if (ret.error === 2000 || ret.error === 4001) {
                        if (ret.error === 4001) {
                            ret.data.needLogin = true;
                        }
                        resolve(ret.data);
                    } else {
                        reject();
                    }

                },
                error: function () {
                    reject();
                }
            });
        });
    }
});

module.exports = centerModel;