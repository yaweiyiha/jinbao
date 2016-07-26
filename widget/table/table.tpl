<div class="jinbao-widget-table ">
	<div class="row table-page-option">
		<div class="col-sm-6">
			<div class="dataTables_length" id="tp_length">
				<label>
					<span>每页</span>  
					<select name="tp_length" aria-controls="tp" class="form-control page-select">
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
					</select> 
					<span>条记录</span>
				</label>
			</div>
		</div>
	</div>

	<table id="tp" class="table table-striped table-hover table-bordered table-responsive dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="tp_info">                
		<thead>
			<tr role="row">
				<template  v-for="item in tables">
					<th width="{{item.width}}" class"sorting_disabled" rowspan="1" colspan="1" aria-label="{{item.name}}">{{item.name}}</th>
				</template>
			</tr>
		</thead>
        <tbody>
        	<tr role="row" class="odd"><td>SO201607157904142846</td><td class="sorting_1">2016-07-15</td><td>基金产品测试转账支付</td><td>张恒瑞</td><td>zhanghengrui</td><td>杨唐鹏部门</td><td>张恒瑞部门</td><td>gg</td><td>1</td><td>普通</td><td>支付审核 </td><td>产品审核 </td><td>转账付款</td><td><a class="detail" href="javascript:void(0);" data-id="1603"><span>详情</span>&nbsp;</a><a class="submit" href="javascript:void(0);" data-id="1603"><span>审核</span></a></td>
        	</tr>
        </tbody>
    </table>	
</div>