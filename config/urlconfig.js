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
					{ name : 'xuxu', length : 'col-md-3' ,type : 'input'},
					{ name : '产品名称', length : 'col-md-3' , type : 'input' },
					{ name : '理财经理', length : 'col-md-3' ,type : 'input'},
					{ name : '理财经理账号', length : 'col-md-3',type : 'input'},
				],[	
					{ name : '投资人', length : 'col-md-3',type : 'input'},
					{ name : '理财师归属地' , length :'col-md-9' ,type : 'select'},
				],[
					{ name : '待审核状态', length : 'col-md-3',
				      selectList : ['全部','资料审核','资料复核','支付审核','产品审核','产品二次复核','总审核'] ,type:'select'},
					{ name : '类型', length : 'col-md-3',selectList : ['全部','续投','普通'], type:'select'},
					{ name : '下单时间', length : 'col-md-3' ,type : 'input' },
					{ name : '到', length : 'col-md-3',type : 'input'},
				],[
					{ name : '搜索', classList : 'btn btn-primary search',type : 'button'},
					{ name : '重置搜索条件', classList : 'btn btn-primary search',type : 'button'},
				]

			],
			'title' : '订单管理',
			'subtitle' : '投资审核'
		}

			

	}
}