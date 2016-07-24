/**
 * @file fis config file
 */

/*******************************************
set namespace ; require file by modular way 
********************************************/

fis.config.set('namespace', 'usersysv2');

/************************************
set domain to make sure that you 
can get back files from corect position
*************************************/


// fis.match('*.{js,css,png,gif}', {
//     domain: 'http://webmap1.map.bdstatic.com/' + fis.get('namespace')
// });

/*******************************************
deploy file to remote machine 
demo : fis3 relase xuxu -w
********************************************/

fis.media('test').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://cp01-rdqa-dev101.cp01.baidu.com:8456/webapp/receiver.php',
        to: '/home/users/songxin03/map/8456/lighttpd/htdocs/usersysv2'
    })
});
fis.media('fang').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://cq01-rdqa-dev050.cq01.baidu.com:8008/webmap/receiver.php',
        to: '/home/users/wangjiapeng/superman/lighttpd/htdocs/usersysv2'
    }),
    domain: '/' + fis.get('namespace')
});

fis.media('xuxu').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: "http://cq01-rdqa-dev072.cq01.baidu.com:8038/webapp/receiver.php",
        to: '/home/users/jiazheng/work-new/8038/lighttpd/htdocs/usersysv2'
    }),
    domain: '/' + fis.get('namespace'),
});



/**********************
     parse files 
**********************/

// fis.match('*.tmpl', {
//     rExt: '.js',
//     parser: fis.plugin('bdtmpl') 
// });

fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less')
});


/**********************
     optimize files 
**********************/

// fis.match('*.{css,less}', {
//     optimizer: fis.plugin('clean-css')
// });
// fis.match('*.js', {
//     optimizer: fis.plugin('uglify-js')
// });
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor', {
      type : 'pngquant'
    })
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.config.set('settings.spriter.csssprites', {
    scale: 0.5
});
// 对 CSS 进行图片合并
fis.match('static/css/achievement/*.css', {
    packTo: 'static/css/achievement-icon.css',
    useSprite: true
});

// fis parse es6 to es5
fis.match('/{controller,widget,model,route,config}/**.js', {
    parser: fis.plugin('babel')
});

fis.match('static/js/**.js', {
    parser: fis.plugin('babel')
});

/**********************
     pack files 
**********************/

fis.match('::package', {
    packager: fis.plugin('map', {
        'static/core-lib.js': [
            '/static/lib/**.js',
        ],
        'static/core-js.js': [
            '/config/**.js',
            '/static/js/*.js',
            '/widget/url/*.js',
            '/widget/cookie/*.js',
            '/widget/util/*.js',
            '/widget/dialog/*.js',
            '/widget/pass/*.js',
            '/widget/backToTop/*.js',
            '/route/route.js'
        ],
        'static/center_sync_0_pkg.js': [
            'controller/centerControl.js',
            'model/centermodel.js',
            'widget/header/header.js',
            'widget/experience/experience.js',
            'widget/countup/countup.js',
            'widget/userCities/userCities.js',
            'widget/task/task.js',
            'widget/signList/signList.js',
            'widget/levelRights/levelRights.js',
            'widget/achievement/achievement.js'
        ],
        'static/like_sync_0_pkg.js': [
            'controller/likeControl.js',
            'model/likemodel.js',
            'widget/like/like.js'
        ],
        'static/landlord_sync_0_pkg.js': [
            'controller/landownerControl.js',
            'model/landownermodel.js',
            'widget/landowner/landowner.js'
        ],
        'static/rank_sync_0_pkg.js': [
            'controller/rankControl.js',
            'model/rankmodel.js',
            'widget/rank/rank.js',
            'widget/rankSelect/rankSelect.js'
        ]
    })
});

/**********************
     Modular files 
**********************/

fis.match('/{controller,widget,model}/**.js', {
    isMod: true
});

fis.match('static/js/**.js', {
    isMod: true
});


/**********************
     preload plugin 
**********************/

fis.match('::package', {

    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true 
    })
});

fis.match('*.{js,css,png}', {
    useHash: true
});

fis.match('*.png', {
    useMap : true
});

fis.hook('commonjs');

fis.config.set('project.watch.usePolling', true);