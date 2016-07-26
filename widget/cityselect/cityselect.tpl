<div class="jinbao-widget-cityselect row">
	<div class="input-group form-group col-md-9">
		<select class="form-control col-md-3 " class="province" v-model="province">
			<template v-for="pr in province" >
				<option value="{{pr.code}}">{{pr.name}}</option>
			</template>
			
		</select>
		<select class="form-control col-md-3 " class="city">
			<option value="">市</option>
		</select>
		<select class="form-control col-md-3 " class="area">
			<option value="">区</option>
		</select>
	</div>
</div>