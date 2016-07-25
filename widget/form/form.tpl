<div class="jinbao-widget-form ">
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
                                <div v-if="item.type !== 'button'" class="input-group-addon" >{{ item.name }}</div>
                                <input v-if="item.type === 'input'" class="form-control" id="orderNumber" name="orderNumber" value="" maxlength="40" placeholder="">
                                <select v-if="item.type === 'select'" class="form-control" placeholder="" >
                                    <option value="" v-for="option in item.selectList">{{option}}</option>
                                </select>
                                <button  v-if="item.type === 'button'"  class="{{item.classList}}">{{item.name}}</button>
                                <select > 
                                <div class="area" v-if="item.type === 'area'" class="{{item.length}}">
                                  <select name="" id=""   placeholder='省'>
                                  </select>
                                  <select name="" id=""  placeholder='市'>
                                  </select>
                                  <select name="" id=""  placeholder='县/区'>
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
</div>