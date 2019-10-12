<template>
    <div class="history">
        <div class="hengtiao">
          <span>{{data_name}}</span>
          <div class="close" @click.stop="show_false">
            X
          </div>
        </div>
        <div class="together_xiao">
          <span class="shangban">时间：</span>
          <input class="choose_alone" v-model="value_time1" readonly="true">
          <div class="img_xia" @click.stop="date_show(1)">
          </div>
          <!-- 日期选择器 -->
          <TimeList class="choose_options1"
            v-if="show_list1"
            :remember-year="remember_year"
            :remember-month="remember_month"
            :remember-hour="remember_hour"
            :remember-minute="remember_minute"
            :days="days"
            @date-reduce="date_reduce"
            @date-add="date_add"
            @change-time="change_time"
            @choose-datetime="choose_datetime1"
          />

          <div class="jiantou">
            →
          </div>

          <input class="choose_alone" v-model="value_time2" readonly="true">
          <div class="img_xia" @click.stop="date_show(2)">
          </div>
          <!-- 日期选择器 -->
          <TimeList class="choose_options2"
            v-if="show_list2"
            :remember-year="remember_year"
            :remember-month="remember_month"
            :remember-hour="remember_hour"
            :remember-minute="remember_minute"
            :days="days"
            @date-reduce="date_reduce"
            @date-add="date_add"
            @change-time="change_time"
            @choose-datetime="choose_datetime2"
          />
        </div>

        <!-- 查询按钮 -->
        <div class="together_search" @click.stop="search_run">
          <div class="history_log">
            <img src="../../image/search_icon.jpg" class="history_logo">
            <span class="history_name">查询</span>
          </div>
        </div>

        <div id="echarts" class="echarts"></div>
    </div>
</template>
<style scoped>
    /*历史数据表*/
    .history{
        height: 500px;
        width: 550px;
        background-color: #ffffff;
        border-radius: 10px;
        color: black;
        box-shadow: 1px 1px 2px #888888;
        z-index: 5;
        margin: 1%;
        position: relative;
    }

    /*名字选择框*/
    .together{
        display: flex;
        flex-wrap: wrap;
    }
    .together_xiao{
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        z-index: 9;
    }

    .shangban{
        font-size: 14px;
        line-height: 14px;
        z-index: 10;
    }
    .choose_alone{/*单独的输入框*/
        width: 140px;
        height: 20px;
        border: 1px solid #dddddd;
        padding: 2px;
        font-size: 14px;
        color: #666666;
    }
    .jiantou{
        font-size: 14px;
        font-weight: 900;
        height: 26px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 26px;
    }
    .img_xia{/*下拉框*/
        position: relative;
        width: 20px;
        height: 24px;
        border: 1px solid #dddddd;
    }
    .img_xia:before{
        content:"";
        display:block;
        border-width:7px;
        position:absolute;
        top:10px;
        left:3px;
        border-style:solid dashed dashed;
        border-color:#1589d0 transparent transparent;
        line-height:0;
    }

    /*日期选择列表*/
    .choose_options1{
      content:"";
      position: absolute;
      top: 57px;
      left: 53px;
    }
    .choose_options2{
      content:"";
      position: absolute;
      top: 46px;
      left: 239px;
    }

    
    /*可视化echars*/
    .echarts {
      width: 550px;
      height: 435px;
      margin: auto;
      display: block;
      position: absolute;
      top: 60px;
    }
    /*历史数据标题*/
    .hengtiao{
        width: 200px;
        height: 20px;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
        margin: auto;
    }
    .hengtiao span{
        margin-top: 0.15rem;
    }

    /*关闭按钮*/
    .close{
        width: 15px;
        height: 15px;
        line-height:15px;
        font-size: 10px;
        background-color: red;
        color: white;
        border-radius: 20px;
        text-align: center;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    /*查询按钮*/
    .together_search{
        float: right;
        display: block;
        position: absolute;
        top: 35px;
        right: 70px;
        z-index: 9;
    }
    .history_log{
        display: flex;
        width: 40px;
        height: 20px;
        border: 1px solid #dddddd;
        border-radius: 10px;
        padding-left: 10px;
        margin-left: 10px;
        background-color: #169df3;
    }
    .history_logo{
        width: 10px;
        height: 10px;
        margin-top: 5px;
        margin-right: 1px;
    }
    .history_name{
        margin-top: 1px;
        font-size:12px;
        color: #ffffff;
    }

</style>
<script>
import TimeList from './TimeList.vue'
export default {
    components : {
      TimeList
    },
    data() {
        return {
            show_list1:false,
            show_list2:false,
            data_name:'111',//用于存储表格的列名，比如压力(kpa)，展示在历史曲线页面标题
            station_name:'杨树浦',
            value_time1: '',
            value_time2: '',
            before_year: '',//用于记录前时间
            before_month: '',
            before_day:'',
            before_hour:'',
            before_minute:'',//
            last_year: '',//用于记录后时间
            last_month: '',
            last_day:'',
            last_hour:'',
            last_minute:'',//
            remember_year:'',//用于在日期选择列表中展示年月日时间
            remember_month: '',
            remember_day:'',
            remember_hour:'',
            remember_minute:'',//
            days:[],
            choose_day:NaN,
            the_id:NaN,//记录数据项的id
            data_history:[]
        }
    },
    mounted(){
        this.get_time();
        this.getEcharts();
    },
    methods: {
        select_days: function(year,month){//判断当月的天数
          var runnian=year%4;
          if (month==1||month==3||month==5||month==7||
            month==8||month==10||month==12) {
            this.choose_day=31;
          }else if(month==2&&runnian==0){
            this.choose_day=29;
          }else if(month==2&&runnian!=0) {
            this.choose_day=28;
          }else {
            this.choose_day=30;
          }

          this.days=[];
          for (var i = 0; i < this.choose_day; i++) {
            let days={'time':''};
            this.days.push(days);
            if (i<9) {
              this.days[i].time='0'+(i+1);
            }else {
              this.days[i].time=''+(i+1);
            }
          }
          var self=this;
          this.$nextTick( () => {
                this.days.forEach( (time) => {
                    this.$set(time,'active',false);
                    if(time.time==self.remember_day&&self.before_month==self.remember_month&&self.before_year==self.remember_year){
                        this.$set(time,'active',true);
                    }
                });
            });
        },
        get_historyDate: function(id,station_name,name){
          this.the_id=id;
          this.show_history=true;
          this.station_name=station_name;
          this.data_name=name;
          setTimeout('getEcharts()','500');
        },
        date_show: function(s){
          if (s==1) {
            this.show_list1=!this.show_list1;
            this.show_list2=false;
            this.remember_year=this.before_year;
            this.remember_month=this.before_month;
            this.remember_day=this.before_day;
            this.remember_hour=this.before_hour;
            this.remember_minute=this.before_minute;
            this.select_days(this.remember_year,this.remember_month);
          }
          if (s==2) {
            this.show_list2=!this.show_list2;
            this.show_list1=false;
            this.remember_year=this.last_year;
            this.remember_month=this.last_month;
            this.remember_day=this.last_day;
            this.remember_hour=this.last_hour;
            this.remember_minute=this.last_minute;
            this.select_days(this.remember_year,this.remember_month);
          }
        },
        date_reduce: function(){
          this.remember_month=+this.remember_month;//把字符型数字转换成整型数字
          this.remember_month--;
          if (this.remember_month<10) {
            this.remember_month='0'+this.remember_month;
          }
          if (this.remember_month==0) {
            this.remember_month='12';
            this.remember_year--;
          }
          this.select_days(this.remember_year,this.remember_month);
        },
        date_add: function(){
          this.remember_month=+this.remember_month;//把字符型数字转换成整型数字
          this.remember_month++;
          if (this.remember_month<10) {
            this.remember_month='0'+this.remember_month;
          }
          if (this.remember_month==13) {
            this.remember_month='01';
            this.remember_year++;
          }
          this.select_days(this.remember_year,this.remember_month);
        },
        change_time: function(time){
            this.remember_day=time.time;
            this.$nextTick( () => {
                this.days.forEach( (time) => {
                    this.$set(time,'active',false);
                });
                this.$set(time,'active',true);
            });
        },
        choose_datetime1: function(remember_hour,remember_minute){
          console.log(remember_hour);
          this.remember_hour=+remember_hour;//把字符型数字转换成整型数字
          this.remember_minute=+remember_minute;
          if (this.remember_hour<10) {
            this.remember_hour='0'+this.remember_hour;
          }
          if (this.remember_minute<10) {
            this.remember_minute='0'+this.remember_minute;
          }
          this.before_year=this.remember_year;
          this.before_month=this.remember_month;
          this.before_day=this.remember_day;
          this.before_hour=this.remember_hour;
          this.before_minute=this.remember_minute;
          this.value_time1=this.before_year+'-'+this.before_month+'-'+this.before_day+' '+this.before_hour+':'+this.before_minute;
          this.show_list1=!this.show_list1;
        },
        choose_datetime2: function(remember_hour,remember_minute){
          this.remember_hour=+remember_hour;//把字符型数字转换成整型数字
          this.remember_minute=+remember_minute;
          if (this.remember_hour<10) {
            this.remember_hour='0'+this.remember_hour;
          }
          if (this.remember_minute<10) {
            this.remember_minute='0'+this.remember_minute;
          }
          this.last_year=this.remember_year;
          this.last_month=this.remember_month;
          this.last_day=this.remember_day;
          this.last_hour=this.remember_hour;
          this.last_minute=this.remember_minute;
          this.value_time2=this.last_year+'-'+this.last_month+'-'+this.last_day+' '+this.last_hour+':'+this.last_minute;
          this.show_list2=!this.show_list2;
        },
        get_time: function() {
            var d= new Date();
            this.before_year=d.getFullYear();
            this.before_month=d.getMonth()+1;
            this.before_day=d.getDate();
            this.before_hour='00';
            this.before_minute='00';
            this.last_year=d.getFullYear();
            this.last_month=d.getMonth()+1;
            this.last_day=d.getDate();
            this.last_hour=d.getHours();
            this.last_minute=d.getMinutes();
            //记录天数
            this.select_days(this.before_year,this.before_month);
            this.select_days(this.last_year,this.last_month);
            // 起始日期
            if (this.before_month<10) {
                this.before_month='0'+this.before_month;
            }
            if (this.before_day<10) {
                this.before_day='0'+this.before_day;
            }
            this.value_time1=this.before_year+'-'+this.before_month+'-'+this.before_day+' '+this.before_hour+':'+this.before_minute;
            // 结束日期
            if (this.last_month<10) {
                this.last_month='0'+this.last_month;
            }
            if (this.last_day<10 ) {
                this.last_day='0'+this.last_day;
            }
            if (this.last_hour<10) {
                this.last_hour='0'+this.last_hour;
            }
            if (this.last_minute<10) {
                this.last_minute='0'+this.last_minute;
            }
            this.value_time2=this.last_year+'-'+this.last_month+'-'+this.last_day+' '+this.last_hour+':'+this.last_minute;

        },
        search_run: function(){
          this.getEcharts();
        },
        getEcharts: function(){
            var myChart = this.$echarts.init(document.getElementById('echarts'));
            myChart.setOption({
                title:{
                  text:this.station_name,
                  textStyle:{
                    fontSize:13,
                    fontWeight:600,
                  },
                  top:20,
                },
                tooltip: {
                  trigger: 'axis'
                },
                grid: {
                  left: '3%',
                  right: '5%',
                  bottom: '3%',
                  containLabel: true
                },
                dataZoom: [{
                  type: 'inside',
                  xAxisIndex: 0,
                  filterMode: 'empty'
                }],
                xAxis: {
                  type: 'time',
                  splitLine: {
                      show: false
                  },
                  min:this.value_time1+':00',
                  max:this.value_time2+':00',
                },
                yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%'],
                  splitLine: {
                      show: false
                  }
                },
                series: [{
                  name:'',
                  type:'line',
                  stack: '总量',
                  symbol:'none',
                  data:[]
                }]
            });

            // myChart.showLoading();
            // api.ajax({
            //     url: Api.get('history_data'),
            //     method: 'post',
            //     data: {
            //     values: {
            //         dataItemId: this.the_id,
            //         startDate:this.value_time1,
            //         endDate:this.value_time2,
            //     },
            //     }
            // },function(ret, err){
            //     if (ret) {

            //     app.data_history=[];
            //     for (var i = 0; i < ret.data.length; i++) {
            //         var z={
            //         name:'',
            //         value:[]
            //         };
            //         app.data_history.push(z);
            //         var dateStr=ret.data[i].时间.split(" ");//把CST格式的时间转换成GMT格式，echarts不识别CST格式时间
            //         var strGMT = dateStr[0]+" "+dateStr[1]+" "+dateStr[2]+" "+dateStr[5]+" "+dateStr[3]+" GMT+0800";
            //         var date = new Date(Date.parse(strGMT));
            //         app.data_history[i].name=date;
            //         app.data_history[i].value=[date,ret.data[i].数值];
            //     }
            //     myChart.hideLoading();
            //     myChart.setOption({
            //         series: [{
            //         data: app.data_history,
            //         }]
            //     });

            //     } else {
            //     alert("网络请求超时");
            //     }
            // });
        }
    }
}
</script>