<div class="jinbao-widget-header navbar  navbar-fixed-top">
	<div class="navbar-container">
        <div class="navbar-header pull-left">
            <a href="/admin/" class="navbar-brand">
                <img style="width:23px;height:23px;margin-top:-3px;" src="/static/img/logo.png" alt="">
                <span class="caption">祺鲲开发后台管理平台</span>
            </a>
        </div>

        <div class="navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">
                <li class="light-blue">
                    <a data-toggle="dropdown" href="#" class="dropdown-toggle" aria-expanded="false">
                        <img class="nav-user-photo" src="/static/img/default_user.jpg">
                        <span class="user-info" style="font-size: 13px;">
                            <small style="font-size: 12px;">您好,</small>
                            {{ username }}
                        </span>
                        <i class="icon-caret-down"></i>
                    </a>

                    <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                        <li>
                            <a href="javascript:showChangePwd();">
                                <i class="icon-edit"></i>修改密码
                            </a>
                        </li>

                        <li class="divider"></li>

                        <li>
                            <a href="/admin/logout" onclick="javascript:sessionStorage.clear();">
                                <i class="icon-off"></i>退出
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="green">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="badge badge-success" onclick="changeLocale(this)" id="en_US">English</span>
                        
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>