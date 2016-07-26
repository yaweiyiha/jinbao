window.urlConfig = {
	'sales/orderEffective' :{
		'form' : {
			'tabs' : [
				{ key: 'effective',value: '未审核', url:'sales/orderEffective' },
				{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
				{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
				{ key: 'all', value: '所有订单', url :'sales/orderAll'}
			],
			'formlist' :[
				[ 	
					{ name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
					{ name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
					{ name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
					{ name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
				],[	
					{ name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
					{ name : '理财师归属地' , wrapperClass :'col-md-9' ,type : 'area'},
				],[
					{ name : '待审核状态', wrapperClass : 'col-md-3',
				      selectList : ['全部','资料审核','资料复核','支付审核','产品审核','产品二次复核','总审核'] ,type:'select'},
					{ name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
					{ name : '下单时间', wrapperClass : 'col-md-3' ,type : 'input' },
					{ name : '到', wrapperClass : 'col-md-3',type : 'input'},
				],[
					{ name : '搜索', wrapperClass: 'tr', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
					{ name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
				]

			],
			'title' : '订单管理',
			'subtitle' : '投资审核',
			'host' : 'index.html#main/',
			'tables' : [
				{ name :'订单号', width:"10%" },
				{ name :'下单时间', width:"5%" },
				{ name :'产品名称', width:"8%" },
				{ name :'理财经理', width:"6%" },
				{ name :'理财经理账号', width:"6%" },
				{ name :'上级部门', width:"6%" },
				{ name :'部门', width:"6%" },
				{ name :'投资人', width:"6%" },
				{ name :'成交金额(元)', width:"6%" },
				{ name :'类型', width:"5%" },
				{ name :'已审核', width:"7%" },
				{ name :'待审核', width:"7%" },
				{ name :'支付方式', width:"5%" },
				{ name :'操作栏', width:"8%" },
			]
		}
	},
	'sales/orderProcess' :{
		'form' : {
			'tabs' : [
				{ key: 'effective',value: '未审核', url:'sales/orderEffective' },
				{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
				{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
				{ key: 'all', value: '所有订单', url :'sales/orderAll'}
			],
			'formlist' :[
				[ 	
					{ name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
					{ name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
					{ name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
					{ name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
				],[	
					{ name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
					{ name : '理财师归属地' , wrapperClass :'col-md-9' ,type : 'area'},
				],[

					{ name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
					{ name : '下单时间', wrapperClass : 'col-md-3' ,type : 'input' },
					{ name : '到', wrapperClass : 'col-md-3',type : 'input'},
					{ name : '部门', wrapperClass : 'col-md-3',type : 'input'},
				],[
					{ name : '搜索', wrapperClass: 'tr', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
					{ name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
				]

			],
			'title' : '订单管理',
			'subtitle' : '投资审核',
			'host' : 'index.html#main/'
		}
	},
	'sales/orderFailure' :{
		'form' : {
			'tabs' : [
				{ key: 'effective',value: '未审核', url:'sales/orderEffective' },
				{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
				{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
				{ key: 'all', value: '所有订单', url :'sales/orderAll'}
			],
			'formlist' :[
				[ 	
					{ name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
					{ name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
					{ name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
					{ name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
				],[	
					{ name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
					{ name : '理财师归属地' , wrapperClass :'col-md-9' ,type : 'area'},
				],[
					{ name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
					{ name : '下单时间', wrapperClass : 'col-md-3' ,type : 'input' },
					{ name : '到', wrapperClass : 'col-md-3',type : 'input'},
					{ name : '部门', wrapperClass : 'col-md-3',type : 'input'},
				],[
					{ name : '搜索', wrapperClass: 'tr', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
					{ name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
				]

			],
			'title' : '订单管理',
			'subtitle' : '投资审核',
			'host' : 'index.html#main/'
		}
	},
	'sales/orderAll' :{
		'form' : {
			'tabs' : [
				{ key: 'effective',value: '未审核', url:'sales/orderEffective' },
				{ key: 'process', value: '审核通过' , url :'sales/orderProcess'}, 
				{ key: 'failure', value: '审核不通过', url :'sales/orderFailure'}, 
				{ key: 'all', value: '所有订单', url :'sales/orderAll'}
			],
			'formlist' :[
				[ 	
					{ name : '订单号', wrapperClass : 'col-md-3' ,   type : 'input'},
					{ name : '产品名称', wrapperClass : 'col-md-3' , type : 'input' },
					{ name : '理财经理', wrapperClass : 'col-md-3' , type : 'input'},
					{ name : '理财经理账号', wrapperClass : 'col-md-3', type : 'input'},
				],[	
					{ name : '投资人',  wrapperClass : 'col-md-3',type : 'input'},
					{ name : '理财师归属地' , wrapperClass :'col-md-9' ,type : 'area'},
				],[
					{ name : '审核状态', wrapperClass : 'col-md-3',selectList : ['全部','未成功','完成','进行中'], type:'select'},
					{ name : '类型', wrapperClass : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
					{ name : '下单时间', wrapperClass : 'col-md-3' ,type : 'input' },
					{ name : '到', wrapperClass : 'col-md-3',type : 'input'},
				],[
					{ name : '对账状态', wrapperClass : 'col-md-3',selectList : ['全部','未对账','已对账','对账异常'], type:'select'},
					{ name : '部门', wrapperClass : 'col-md-3',type : 'input'},
				],[
					{ name : '搜索', wrapperClass: 'tr', classList : 'btn btn-primary search',type : 'button', evt : 'submit'},
					{ name : '重置搜索条件', wrapperClass: 'tr', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
					{ name : '批量导入', wrapperClass: 'tl', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
					{ name : '批量导出word',wrapperClass: 'tl', classList : 'btn btn-primary search',type : 'button',evt:'clearInput'},
				]

			],
			'title' : '订单管理',
			'subtitle' : '投资审核',
			'host' : 'index.html#main/'
		}
	},

}