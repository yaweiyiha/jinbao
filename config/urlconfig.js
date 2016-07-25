window.urlConfig = {
	'sales/orderEffective' :{
		'form' : {
			'tabs' : [
				{ key: 'effective',value: '未审核' },
				{ key: 'process', value: '审核通过'}, 
				{ key: 'failure', value: '审核不通过'}, 
				{ key: 'all', value: '所有订单'}
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
			'subtitle' : '投资审核'
		}
	}
}