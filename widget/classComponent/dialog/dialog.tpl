<div class="dialog-cover">
	<div class="ui-widget-overlay ui-front"></div>
	<div class="ui-dialog ui-widget ui-widget-content usersys-widget-dialog" tabindex="-1" role="dialog" aria-describedby="departmentSelectWin" aria-labelledby="ui-id-1">
		<div class="ui-dialog-titlebar ui-widget-header">
			<span id="ui-id-1" class="ui-dialog-title">{{title}}</span>
			
			<span class="ui-button-icon-primary ui-icon ui-icon-closethick" @click="hide"></span><span class="ui-button-text"></span>
		</div>
		<div id="departmentSelectWin" v-if="type == 'dep'" class="ui-dialog-content">
			<ul id="departmentTree" class="ztree" style="width:220px; height: 300px;">
				<tree-component></tree-component> 
			</ul>
		</div>
		<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
			<div class="ui-dialog-buttonset">
				<button type="button" class="btn btn-primary" role="button" aria-disabled="false" @click="confirm">
					<span class="ui-button-text">选择</span>
				</button>
				<button type="button" @click="hide" class="btn" role="button" aria-disabled="false">
					<span class="ui-button-text">关闭</span>
				</button>
			</div>
		</div>
</div>
</div>
