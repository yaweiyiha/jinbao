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
		},
		{
			key: '4',
			url: '', 
			classStyle:'icon-calendar', 
			name:'预约管理',
			level2List: [
				{ name:'预约审批', url:'sales/salesquota/portal' },
				{ name:'分配份额', url:'sales/portionManage/manage' }
			]
		},
		{
			key: '5',
			url: '', 
			classStyle:'icon-group', 
			name:'投资人管理',
			level2List: [
				{ name:'查看', url:'customer/customerList' },
				{ name:'认证', url:'customerAuthentication/inprocesslist' },
				{ name:'账号', url:'phone/customer/account/overview' },
				{ name:'手机变更', url:'phone/customer/account/phone/apply/overview' },
				{ name:'标签管理', url:'tagCategory/tagCategoryList' }
			]
		},
		{
			key: '6',
			url: '', 
			classStyle:'icon-fire', 
			name:'佣金管理',
			level2List: [
				{ name:'确认', url:'sales/commision/lists' },
				{ name:'查看', url:'sales/commision/search' }
			]
		},
		{
			key: '7',
			url: '', 
			classStyle:'icon-gift', 
			name:'收益管理',
			level2List: [
				{ name:'查看', url:'sales/income/list' },
				{ name:'兑付管理', url:'sales/cash/list' }
			]
		},
		{
			key: '8',
			url: '', 
			classStyle:'icon-info-sign', 
			name:'收益管理',
			level2List: [
				{ name:'广告', url:'cms/advertisementPosition/advertisement' },
				{ name:'文章', url:'cms/article/articleList' }
			]
		},
		{
			key: '9',
			url: '', 
			classStyle:'icon-envelope', 
			name:'消息管理',
			level2List: [
				{ name:'公司消息', url:'cms/message' },
				{ name:'系统消息', url:'cms/sysMessage/list' }
			]
		},
		{
			key: '10',
			url: '', 
			classStyle:'icon-envelope', 
			name:'组织管理',
			level2List: [
				{ name:'部门', url:'ums/department/departmentManagement' },
				{ name:'岗位', url:'ums/position/positionManagement' },
				{ name:'员工', url:'ums/employee/employeeManagement' }
			]
		}
	]
}