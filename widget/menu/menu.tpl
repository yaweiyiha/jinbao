<div class="jinbao-widget-menu">
	<div class="sidebar sidebar-fixed" id="sidebar">
		<ul class="nav nav-list" v-on:click="subShow">
			<li v-for="menuData in menusData">
				<div v-if="!menuData.url" class="icldsub">
					<a href="javascript:;" class="dropdown-toggle">
						<i class="{{ menuData.classStyle }}"></i>
						{{ menuData.name }}
						<b class="arrow icon-angle-down"></b>
					</a>
					<ul class="submenu">
						<li v-for="level2item in menuData.level2List">
							<a href="{{level2item.url}}"  data-level="2" >
								<i class="icon-double-angle-right"></i>
								{{level2item.name}}
							</a>
						</li>
					</ul>
				</div>
				<div v-else class="unicldsub">
					<a href="{{ menuData.url }}" data-level="1" >
						<i class="icon-list {{ menuData.classStyle }}" ></i>
						{{ menuData.name }}
					</a>
				</div>
			</li>
		</ul>
	</div>
</div>