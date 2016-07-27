<div class="jinbao-widget-menu">
	<div class="sidebar sidebar-fixed" id="sidebar">
		<ul class="nav nav-list">
			<li v-for="menuData in menusData">
				<div v-if="!menuData.url" class="icldsub">
					<a href="javascript:;" class="dropdown-toggle">
						<i class="{{ menuData.classStyle }}"></i>
						<span class="menu-text">{{ menuData.name }}</span>
						<b class="arrow icon-angle-down"></b>
					</a>
					<ul class="submenu">
						<li v-for="level2item in menuData.level2List">
							<a href="{{level2item.url}}"  data-level="2" >
								<i class="icon-double-angle-right"></i>
								<span>{{level2item.name}}</span>
							</a>
						</li>
					</ul>
				</div>
				<div v-else class="unicldsub">
					<a href="{{ menuData.url }}" data-level="1" >
						<i class="icon-list {{ menuData.classStyle }}" ></i>
						<span class="menu-text">{{ menuData.name }}</span>
					</a>
				</div>
			</li>
		</ul>
	</div>
</div>