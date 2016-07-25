<div class="jinbao-widget-form navbar  navbar-fixed-top">
	<div class="breadcrumbs" id="breadcrumbs">
        <ul class="breadcrumb">
            <li>{{title}}</li>
            <li>{{subtitle}}</li>
        </ul>
    </div>
    <div>
        <div class="panel-heading">
            <h3 class="panel-title">{{title}}</h3>
        </div>
        <ul class="nav nav-tabs nav-justified">
          <li v-bind:class="[index===0 ? 'active' : '']" v-for="(index, tab) in tabs">
            <a href="javascript:;" data-key="{{ tab.key }}" @click="doSomeThing">{{ tab.value }}</a>
          </li>
        </ul>

        <div class="panel panel-default">
            <div class="panel-body">
                <div v-for=" row in formlist">
                    <div class= "row" >
                      <div v-for="(index, item) in row">
                        <div class="{{ item.length }}" >
                            <div class="form-group input-group">
                                <div class="input-group-addon">{{ item.name }}</div>
                                <input v-if="item.type === 'input'" class="form-control" id="orderNumber" name="orderNumber" value="" maxlength="40" placeholder="">
                                <select v-else="item.type === 'select'" class="form-control" id="orderNumber" name="orderNumber" value="" maxlength="40" placeholder="" >
                                    <option value="" v-for="option in item.selectList">{{option}}</option>
                                </select>
                             </div>
                          </div>                          
                      </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

</div>