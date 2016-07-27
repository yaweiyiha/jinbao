window.menusConfig = {
	menus: [
		{ 
			key: '1',
			url: 'ums/dashboard/dashboardManagement', 
			classStyle:'icon-dashboard', 
			name:'工作台' 
		},
		{
			key: '2',
			url: '', 
			classStyle:'icon-briefcase', 
			name:' 产品管理',
			level2List: [
				{ name:'产品维护', url:'product/maintenance' }
			]
		}, 
		{
			key: '3',
			url: '', 
			classStyle:'icon-credit-card', 
			name:'订单管理',
			level2List: [
				{ name:'投资审核', url:'sales/orderEffective' },
				{ name:'赎回审核', url:'sales/redemptionReview' },
				{ name:'上海银联对账明细', url:'sales/union/sh/reconciliation/list' }
			]
		}
	]
}