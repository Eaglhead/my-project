<template>
    <div class="choose_options">
        <span class="year">
            <a class="left_jiantou" @click.stop="$emit('date-reduce')"></a>
              {{rememberYear}}-{{rememberMonth}}
            <a class="right_jiantou" @click.stop="$emit('date-add')"></a>
        </span>
        <span v-for="(list,index) in days" :key="index" @click.stop="$emit('change-time',list)" :class="{'day':true,'inactive':list.active}">{{list.time}}</span>
        <div class="date_time">
            <input class="choose_time" :value="rememberHour" @change="changeHour($event)">
            <span class="month"> : </span>
            <input class="choose_time" :value="rememberMinute" @change="changeMinute($event)">
            <span class="sure" @click.stop="$emit('choose-datetime',timeHour,timeMinute)">确定</span>
        </div>
    </div>
</template>

<style scoped>
/*日期选择列表*/
.choose_options{
    content:"";
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background-color: #fff;
    height: 200px;
    width: 170px;
    box-shadow: 1px 1px 2px #888888;
    z-index: 10;
    overflow: hidden;/*可滑动*/
    overflow-y: auto;
}

.choose_options .year{
    font-size: 12px;
    height: 20px;
    width: inherit;
    line-height: 20px;
    border-bottom: 1px solid #cccccc;
}

.choose_options .day{/*日历插件中的天数样式*/
    font-size: 10px;
    height: 20px;
    width: 20px;
    line-height: 20px;
    margin-left: 4px;
    cursor: pointer;
}


.left_jiantou{
    display:block;
    border-width:7px;
    position:absolute;
    top:2px;
    left:1px;
    border-style:solid dashed dashed;
    border-color:transparent #1589d0 transparent transparent;
    line-height:0;
    cursor: pointer;
}

.right_jiantou{
    display:block;
    border-width:7px;
    position:absolute;
    top:2px;
    right:1px;
    border-style:dashed dashed dashed solid;
    border-color: transparent transparent transparent #1589d0;
    line-height:0;
    cursor: pointer;
}

.date_time{
    margin:auto;
    margin-top:-1px;
    border-top:1px solid #cccccc;
    padding-top:5px;
    width: 90%;
}

.choose_time{
    -webkit-user-select:auto;
    width: 30px;
    height: 15px;
    border: 1px solid #dddddd;
    padding: 2px;
    font-size: 8px;
    text-align: center;
    color: #666666;
}
/*确定按钮*/
.sure{
    float: right;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #169df3;
    margin-top: 1px;
    font-size:12px;
    color: #ffffff;
    cursor: pointer;
}

.inactive{
    background-color:  blue;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
}

</style>

<script>
export default {
    data(){
        return {
            timeHour: this.rememberHour,
            timeMinute: this.rememberMinute
        }
    },
    props: {
        rememberYear:[String,Number],
        rememberMonth:[String,Number],
        rememberHour:[String,Number],
        rememberMinute:[String,Number],
        days:[Object,Array]
    },
    methods:{
        changeHour: function(e) {
            this.timeHour = e.target.value;
        },
        changeMinute: function(e) {
            this.timeMinute = e.target.value;
        }
    }
}
</script>