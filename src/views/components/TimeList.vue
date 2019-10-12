<template>
    <div class="choose_options">
        <span class="year">
            <a class="left_jiantou" @click.stop="$emit('date-reduce')"></a>
              {{rememberYear}}-{{rememberMonth}}
            <a class="right_jiantou" @click.stop="$emit('date-add')"></a>
        </span>
        <span v-for="(list,index) in days" :key="index" @click.stop="$emit('change-time',list)" :class="{'month':true,'inactive':list.active}">{{list.time}}</span>
        <div class="date_time">
            <input class="choose_time" :value="rememberHour">
            <span class="month">:</span>
            <input class="choose_time" :value="rememberMinute">
            <span class="sure" @click.stop="$emit('choose-datetime',rememberHour,rememberMinute)">确定</span>
        </div>
    </div>
</template>

<style scoped>
/*历史数据表*/
.history{
  height: 13.71rem;
  width: 9.0rem;
  background-color: #ffffff;
  border-radius: 0.1rem;
  color: black;
  position: fixed;
  top: 3.25rem;
  left: 0.9rem;
  box-shadow: 0.01rem 0.01rem 2px #888888;
  z-index: 5;
}

/*名字选择框*/
.together{
  display: flex;
  flex-wrap: wrap;
}
.together_xiao{
  display: flex;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  z-index: 9;
}

.shangban{
  font-size: 0.32rem;
  line-height: 0.78rem;
  z-index: 10;
}
.choose_alone{/*单独的输入框*/
  width: 2.93rem;
  height: 0.78rem;
  border: 0.01rem solid #dddddd;
  padding: 0.2rem;
  font-size: 0.32rem;
  color: #666666;
}
.choose_time{
  -webkit-user-select:auto;
  width: 1.0rem;
  height: 0.78rem;
  border: 0.01rem solid #dddddd;
  padding: 0.2rem;
  font-size: 0.32rem;
  text-align: center;
  color: #666666;
}
.jiantou{
  font-size: 0.32rem;
  font-weight: 900;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  line-height: 0.78rem;
}
.img_xia{/*下拉框*/
  position: relative;
  width: 0.48rem;
  height: 0.78rem;
  border: 0.01rem solid #dddddd;
}
.img_xia:before{
  content:"";
  display:block;
  border-width:0.17rem;
  position:absolute;
  top:0.30rem;
  left:0.05rem;
  border-style:solid dashed dashed;
  border-color:#1589d0 transparent transparent;
  line-height:0;
}

/*日期选择列表*/
.choose_options{
  content:"";
  position: absolute;
  top: 1.7rem;
  left: 2rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background-color: #fff;
  height: 7.875rem;
  width: 5.41rem;
  box-shadow: 0.01rem 0.01rem 2px #888888;
  z-index: 10;
  overflow: hidden;/*可滑动*/
  overflow-y: auto;
}

.choose_options .year{
  font-size: 0.36rem;
  height: 1.0rem;
  width: inherit;
  line-height: 1.0rem;
  border-bottom: 0.01rem solid #cccccc;
}

.choose_options .month{/*日历插件中的天数样式*/
  font-size: 0.32rem;
  height: 0.5rem;
  padding: 0.01rem;
  line-height: 0.5rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.left_jiantou{
  display:block;
  border-width:0.17rem;
  position:absolute;
  top:0.30rem;
  left:0.05rem;
  border-style:solid dashed dashed;
  border-color:transparent #1589d0 transparent transparent;
  line-height:0;
}

.right_jiantou{
  display:block;
  border-width:0.17rem;
  position:absolute;
  top:0.30rem;
  right:0.05rem;
  border-style:dashed dashed dashed solid;
  border-color: transparent transparent transparent #1589d0;
  line-height:0;
}

.date_time{
  margin-left:auto;
  margin-right:auto;
  margin-top:-0.1rem;
  border-top:0.01rem solid #cccccc
}

/*可视化echars*/
.echarts {
  width: 8.8rem;
  height: 12.0rem;
  margin: auto;
  display: block;
  position: absolute;
  top: 1.7rem;
}
/*历史数据标题*/
.hengtiao{
  width: 9.0rem;
  height: 0.5rem;
  text-align: center;
  font-size: 0.36rem;
  line-height: 0.5rem;
}
.hengtiao span{
  margin-top: 0.15rem;
}

/*关闭按钮*/
.close{
  width: 0.5rem;
  height: 0.5rem;
  line-height:0.5rem;
  font-size: 0.32rem;
  background-color: red;
  color: white;
  border-radius: 0.5rem;
  text-align: center;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}

/*查询按钮*/
.together_search{
  float: right;
  display: block;
  position: absolute;
  top: 1.9rem;
  right: 0.3rem;
  z-index: 9;
}
.history_log{
  display: flex;
  width: 1.68rem;
  border: 0.02rem solid #dddddd;
  border-radius: 0.2rem;
  padding-left: 0.3rem;
  margin-left: 0.4rem;
  background-color: #169df3;
}
.history_logo{
  width: 0.28rem;
  height: 0.32rem;
  margin-top: 0.2rem;
  margin-right: 0.01rem;
}
.history_name{
  margin-top: 0.1rem;
  font-size:0.32rem;
  color: #ffffff;
}

/*确定按钮*/
.sure{
  width: 1.68rem;
  border: 0.02rem solid #dddddd;
  border-radius: 0.2rem;
  margin-left: 0.4rem;
  background-color: #169df3;
  margin-top: 0.1rem;
  font-size:0.32rem;
  color: #ffffff;
}

.inactive{
  background-color:  blue;
  border-radius: 10px;
  color: #ffffff;
}

</style>

<script>
export default {
    props: {
        rememberYear:[String,Number],
        rememberMonth:[String,Number],
        rememberHour:[String,Number],
        rememberMinute:[String,Number],
        days:[Object,Array]
    }
}
</script>