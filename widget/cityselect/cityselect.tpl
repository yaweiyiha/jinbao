<div class="jinbao-widget-cityselect row">
	<select class="form-control col-md-3 " class="province" v-model="provinceSelected">
		<option value="">省</option>
		<template v-for="(index, pr) in province" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
		
	</select>
	<select class="form-control col-md-3 " class="city" v-model="citySelected">
		<option value="">市</option>
		<template v-for="(index, pr) in city" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
	</select>
	<select class="form-control col-md-3 " class="area">
		<option value="">区</option>
		<template v-for="(index, pr) in subarea" track-by="$index" >
			<option value="{{pr.code}}" >{{pr.name}}</option>
		</template>
	</select>
</div>