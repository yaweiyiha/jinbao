urlConfig['sales/orderEffective'] =
 {
	'form' : {
		'tabs' : [
			{ key: 'effective', value: '未审核', url:'sales/orderEffective' },
			{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
			{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
			{ key: 'all', value: '所有订单', url :'sales/orderAll'}
		],
		'formlist' :[
			[ 	
				{ key :'orderNumber' ,name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
				{ key :'productName', name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
				{ key :'manageName', name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
				{ key :'', name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
			],[	
				{ key :'customer', name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
				{ key :'code', name : '理财师归属地' , wrapperClass :'col-md-9 city-select' ,type : 'area'},
			],[
				{ key :'', name : '待审核状态', wrapperClass : 'col-md-3',
			      selectList : ['全部','资料审核','资料复核','支付审核','产品审核','产品二次复核','总审核'] ,type:'select'},
				{ key :'order_type', name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
				{ key :'beginTime', name : '下单时间', wrapperClass: 'col-md-3' ,type : 'time', classList: 'beginTime' },
				{ key:'endTime', name : '到', wrapperClass: 'col-md-3' ,type : 'time', classList: 'endTime' }

			],[
				{ key :'selectedDeptIds', name : '部门', wrapperClass: 'col-md-3' ,type : 'dep',},
			]
		],
		'buttonlist': [
			{name : '搜索', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
			{name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
		],
		'title' : '订单管理',
		'subtitle' : '投资审核',
		'type' : 'effective',
		'host' : 'index.html#main/',
		'tables' : [
			{ name :'订单号', width:"10%" ,key : 'orderNumber'},
			{ name :'下单时间', width:"5%" ,key : 'dateCreate'},
			{ name :'产品名称', width:"8%" ,key : 'paymentName'},
			{ name :'理财经理', width:"6%" ,key : 'manageName'},
			{ name :'理财经理账号', width:"6%" ,key : 'manageAccount'},
			{ name :'上级部门', width:"6%" ,key : 'parentDepartmentName'},
			{ name :'部门', width:"6%" ,key : 'departmentName'},
			{ name :'投资人', width:"6%" ,key : 'customer'},
			{ name :'成交金额(元)', width:"6%" ,key : 'totalAmount'},
			{ name :'类型', width:"5%" ,key : 'order_type'},
			{ name :'已审核', width:"7%",key : 'excuteedNodeNames' },
			{ name :'待审核', width:"7%" ,key : 'notExcuteedNodeNames'},
			{ name :'支付方式', width:"5%" ,key : 'paymentName'},
			{ name :'操作栏', width:"8%" ,key: ''},
		],
		'url' : "/admin/sales/searchSalesOrder/search?orderStatus=REVIEWING",
		'param' : {
			 draw : 1 ,orderStatus :"REVIEWING" ,pageNow : 1, pageSize : 10,
			 sortString : "dateCreate.desc",
		}
	}
}
