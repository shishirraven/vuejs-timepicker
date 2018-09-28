Vue.component("oyetimepicker",{
	template : `
  <div class="oye-timepicker d-inline-flex flex-row">
  <div class="">
    <select class="form-control  form-control-sm" v-model="oyeHour" name="" id="">
      <option  v-for="n in 12" :value="n.toString().padStart(2, '0')" :key="n">{{n.toString().padStart(2, '0')}}</option>
    </select>
  </div>
  
  <div class="">
    <select class="form-control  form-control-sm"  name="" v-model="oyeMin" id="">
      <option value="00">00</option>
      <option  v-for="n in 60" :value="n.toString().padStart(2, '0')" :key="n">{{n.toString().padStart(2, '0')}}</option>
    </select>
  </div>
  <div class="">
    
    <select class="form-control  form-control-sm"  v-model="oyePeriod" name="" id="">
      <option  value="am" >am</option>
      <option value="pm" >pm</option>
    </select>
  </div>
  <div class="btn btn-primary btn-sm ml-2 text-center" @click="oyeTime=''">
    <svg viewPort="0 0 12 12" width="11px" height="11px"  version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="10"
        x2="10" y2="0"
        stroke="white"
        stroke-width="2"/>
        <line x1="0" y1="0"
          x2="10" y2="10"
          stroke="white"
          stroke-width="2"/>
        </svg>
      </div>
    </div>
  `,
	data : function(){
  	return {
            oyeTime : "",
            oyeHour : "122",
            oyeMin : "",
            oyePeriod :"",
          }
  },
  props: ['value'],
  watch: {
    oyeTime : function (val) {
    
    if(val=="")
    {
    	this.oyePeriod = '';
      this.oyeHour = '';
      this.oyeMin = '';
      this.$emit('input',this.oyeTime);
      return;
    }
    
    
    if(moment(val.toString(), 'HH:mm:a').isValid())
  	{   
      m =moment(val.toString(), 'hh:mm:a');
      this.oyePeriod = m.format("a");
      this.oyeHour = m.format("hh");
      this.oyeMin = m.format("mm"); 
      }
    },
    oyeMin : function (val)
    {
    	if(val!='')
      {
    		this.oyeTime = this.oyeHour + ":" + this.oyeMin + " " + this.oyePeriod;
      	this.$emit('input',this.oyeTime);
       }
    },
    oyeHour : function (val)
    {
    if(val!='')
      {
    	this.oyeTime = this.oyeHour + ":" + this.oyeMin + " " + this.oyePeriod;
      this.$emit('input',this.oyeTime);
      }
    },
    oyePeriod : function (val)
    {
    if(val!='')
      {
    	
    	this.oyeTime = this.oyeHour + ":" + this.oyeMin + " " + this.oyePeriod;
      this.$emit('input',this.oyeTime);
      }
    }
  },
  mounted: function () {
  console.log(this.value);
  	if(moment(this.value, 'HH:mm:a').isValid())
  	{
    	this.oyeTime = this.value;
      m =moment(this.oyeTime, 'hh:mm:a');
      this.oyePeriod = m.format("a");
      this.oyeHour = m.format("hh");
      this.oyeMin = m.format("mm");
    
    }
    else
    {
    	this.oyeTime = "";
      this.oyePeriod = "";
      this.oyeHour = "";
      this.oyeMin = "";
    
    }
  
   
  }
});


