<div class="jinbao-widget-datecontrol row">
    <div class="col-md-6">
  		<div class="input-group form-group">
    		<div class="input-group-addon">{{from}}</div>
			  <input class="form-control beginTime"  value v-model="beginTime">
    	</div>
        </div>

  <div class="col-md-6">
  	<div class="form-group">
  		<div class="input-group">
    		  <div class="input-group-addon">{{to}}</div>
			    <input class="form-control endTime" name="endTime" v-model="endTime" value >
    	</div>
  	</div>
  </div>		
</div>
