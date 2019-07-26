<template>
  <!-- <div class="about">
    <div id="echarts-pic">11</div>
  </div> -->
    <div class="content">
        <div class="home-list home-left">
            <div class="list-li" id="container1"></div>
            <div class="list-li" id="container2">
                <div id="echarts-data">
                    <template v-for="(item,index) in data_echarts2">
                        <div :class="'echarts-num'+(index+1)" :key="index+'1'">{{item.value}}</div>
                        <div :class="'echarts-title'+(index+1)" :key="index+'2'">{{item.name}}</div>
                    </template>

                </div>
                <div class="list-li-fr" id="container21"></div>
                <div class="list-li-sd" id="container22"></div>
            </div>
        </div>
        <div class="home-list home-right">
            <div class="choose-echart">
                <h4 @click="showEcharts(1)" id="1" :class="{h4_active : show_a}">COD</h4>
                <h4 @click="showEcharts(2)" id="2" :class="{h4_active: show_b}">总磷</h4>
                <h4 @click="showEcharts(3)" id="3" :class="{h4_active: show_c}">氨氮</h4>
            </div>
            <div class="list-li" id="container3"></div>
            <div class="list-li" id="container4"></div>
        </div>
    </div>
</template>

<style>
    .home-list{
        width:501px;
        height: 863px;
        margin:10px;
        color: #fff;
    }
    .home-left{
        float:left;
        width:451px;
        height: 863px;
        margin-left:50px;
        background: url("../../image/home/home_left.png") no-repeat;
    }
    .home-right{
        float:right;
        width:501px;
        height: 863px;
        margin-right:50px;
        position: relative;
        background: url("../../image/home/home_right.png") no-repeat;
    }
    #container1{
        width: 430px;
        height: 500px;
        margin-left: 20px;
    }
    #container2{
        width: 430px;
        height: 363px;
        margin-left: 20px;
        position: relative;
    }
    #container21{
        float: left;
        width: 200px;
        height: 363px;
    }
    #container22{
        float: left;
        width: 200px;
        height: 363px;
    }
    #echarts-data{/*设置蒙层盖住饼图*/
        width: 430px;
        height: 363px;
        position: absolute;
        z-index: 100;
    }
    .echarts-title1,.echarts-title2{
        font-size: 16px;
        color: #FFFFFF;
        width: 96px;
        height: 22px;
        text-align: center;
    }
    .echarts-title1{
        position: absolute;
        left: 50px;
        top: 260px;
    }
    .echarts-title2{
        position: absolute;
        left: 250px;
        top: 260px;
    }
    .echarts-num1,.echarts-num2{
        font-size: 16px;
        width: 39px;
        height: 25px;
        text-align: center;
        color: rgb(55,171,209);
    }
    .echarts-num1{
        position: absolute;
        left: 80px;
        top: 170px;
    }
    .echarts-num2{
        position: absolute;
        left: 280px;
        top: 170px;
    }
    #container3{
        width: 430px;
        height: 450px;
    }
    #container5{
        width: 430px;
        height: 450px;
    }
    #container6{
        width: 430px;
        height: 450px;
    }
    .choose-echart{
        display: flex;
        justify-content: space-around;
        position: absolute;
        top: 15px;
        z-index: 2;
    }
    h4{
        cursor: pointer;
        font-size: 14px;
        color: #5e8dba;
        width: 55px;
        height: 30px;
        line-height: 30px;
        margin-left: 70px;
        text-align: center;
    }
    .h4_active{
        cursor: pointer;
        color: #ffffff;
        background-image:url('../../image/home/line1.png');
        background-repeat:no-repeat;
        background-position:bottom;
        background-origin:border-box;
    }
    #container4{
        width: 430px;
        height: 410px;
        margin-left: 20px;
    }
    /*echarts显示的图例样式*/
    .tonghang{
        display: flex;
        justify-content: flex-start;
    }
    .circle1{
        width: 10px;
        height: 10px;
        background-color:#188df0;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        margin-top: 5px;
        margin-right:5px;
    }
</style>


<script>

export default {
  data () {
    return {
        show_a: true,
        show_b: false,
        show_c: false,
        flag_echarts3: 1,
        data_echarts1: [],
        data_echarts2: [],
        data_echarts3: {
            legend: [],
            a:[],
            b:[],
        },
        data_echarts4: [],
    }
  },
  mounted() {
    this.echarts1();
    this.echarts2();
    this.echarts3();
    this.echarts4();
  },
  methods: {
    showEcharts : function (flag){
        this.flag_echarts3 = flag;
        if(flag==1){
            this.show_a = true;
            this.show_b = false;
            this.show_c = false;
            
        }
        if(flag==2){
            this.show_a = false;
            this.show_b = true;
            this.show_c = false;
        }
        if(flag==3){
            this.show_a = false;
            this.show_b = false;
            this.show_c = true;
        }
        this.echarts3();
    },
    echarts1 : function () {
      let myChart = this.$echarts.init(document.getElementById('container1'));
      myChart.setOption({
            backgroundColor: 'rgba(0,0,0,0.1)',
            title: {
                text: '年排水处理量(万/吨)',
                textStyle: {
                    color: 'rgb(75,111,170)'
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter:function(params){ // 改鼠标悬浮提示值格式
                    var relVal = "年排水处理量:<br/>";
                    relVal += '<div class="tonghang">'+'<p class="circle1">'+'</p>'+params[1].name+ ' : ' +params[1].value +'</div>';
                    return relVal;
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['枫亭','枫泾','廊下','金兴','排海','金山卫'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#aaa'
                        },

                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show:false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                    max:3500
                }
            ],
            series : [
                { // For shadow
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {color: 'rgba(12,34,73,1)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: [3500,3500,3500,3500,3500,3500],
                    animation: false
                },
                {
                    type:'bar',
                    barWidth: '20%',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data:[1507.4351, 839.5, 570.3923, 492.75, 3078.8088, 1131.5]
                }
            ]
        });
    //   this.$axios.post('http://117.184.195.160:8080/a/index#/a/admin//data/getAvgQuality?name=液位&type=bz', {
        
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    },
    echarts2 : function () {
        let dom1 = document.getElementById("container21");
        let myChart1 = this.$echarts.init(dom1);
        let dom2 = document.getElementById("container22");
        let myChart2 = this.$echarts.init(dom2);
        myChart1.setOption({
            backgroundColor: 'rgba(0,0,0,0.1)',
            title: {
                text: '排污企业数量',
                textStyle: {
                    color: 'rgb(75,111,170)'
                },
                top:20
            },
            color:['rgb(55,171,209)','rgba(12,34,73)'],
            tooltip: {
                show: false
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     top:'10%',
            //     textStyle: {
            //         color: '#ccc'
            //     },
            //     data:[]
            // },
            series: [
                {
                    name:'数据项',
                    type:'pie',
                    radius: ['50%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[]
                }
            ]
        });
        myChart2.setOption({
            backgroundColor: 'rgba(0,0,0,0.1)',
            tooltip: {
                show: false,
            },
            color:['rgb(55,171,209)','rgba(12,34,73)'],
            series: [
                {
                    name:'数据项',
                    type:'pie',
                    radius: ['50%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[]
                }
            ]
        });
        let a = [
            {
                value : 3,
                name : '一般排污企业'
            },
            {
                value : 2,
                name : '重点排污企业'
            },
        ];
        this.data_echarts2 = a;
        myChart1.setOption({
            series: [
                {
                    data:a
                }
            ]
        });
        a.reverse();
        myChart2.setOption({
            series: [
                {
                    data:a
                }
            ]
        });
        a.reverse();
    },
    echarts3 : function () {
        let dom = document.getElementById("container3");
        let myChart = this.$echarts.init(dom);
        myChart.setOption({
            backgroundColor: 'rgba(0,0,0,0.1)',
            title: {
                text: '污染物消减统计',
                textStyle: {
                    color: 'rgb(75,111,170)'
                },
                top:-1,
                left:20
            },
            color:['#6f9fa7','#9cc5b0'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '25%',
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                textStyle: {
                    color: '#bbb'
                },
                top:70,
                data:[]
            },
            xAxis: {
                type: 'category',
                data: ['枫亭', '金兴', '金山卫', '廊下', '排海', '枫泾'],
                axisLine:{
                    lineStyle:{
                        color:'#666666'
                    }
                },
                axisLabel:{
                    textStyle: {
                        color:'#bbb'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#666666'
                    }
                },
                axisLabel:{
                    textStyle: {
                        color:'#bbb'
                    }
                }
            },
            series: [
                {
                    name:'进水COD',
                    type:'bar',
                    data:[],
                    barGap:'0%',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 1
                        }
                    }
                },
                {
                    name:'出水COD',
                    type:'bar',
                    data:[],
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 1
                        }
                    }
                }
            ]
        });
        if(this.flag_echarts3==1){
            this. data_echarts3.legend = ['进水COD','出水COD'];
            this.data_echarts3.a = [100,130.5,1968.6999512,268.7999878,0,231.1999969];
            this.data_echarts3.b = [17.7999992,16.5,32.7999992,22.2126808,34.5,8.8000002];
        }
        if(this.flag_echarts3==2){
            this. data_echarts3.legend = ['进水TP','出水TP'];
            this.data_echarts3.a = [0, 0, 1.23, 3.2640624, 0, 0];
            this.data_echarts3.b = [0.057, 0, 0.24, 0.2348203, 0.0632, 0];
        }
        if(this.flag_echarts3==3){
            this. data_echarts3.legend = ['进水AD','出水AD'];
            this.data_echarts3.a = [7.2451901, 0.65, 41.2299995, 24.8375168, 0, 11];
            this.data_echarts3.b = [0.069, 0.042, 0.037, 0.0568207, 0.1, 0.04];
        }

        myChart.setOption({
            legend: {
                data: this. data_echarts3.legend
            },
            series: [{
                // 根据名字对应到相应的系列
                name: this. data_echarts3.legend[0],
                data: this.data_echarts3.a
            }, {
                // 根据名字对应到相应的系列
                name: this. data_echarts3.legend[1],
                data: this.data_echarts3.b
            }]
        });
    },
    echarts4 : function () {
        let dom = document.getElementById("container4");
        let myChart = this.$echarts.init(dom);
        myChart.setOption({
            backgroundColor: 'rgba(0,0,0,0.1)',
            color:'#fff',
            title: {
                text: '瞬时流量',
                subtext:'(单位:m³/h)',
                textStyle: {
                    color: 'rgb(75,111,170)'
                },
                top:5
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '20%',
                left: '5%',
                right: '5%',
                containLabel: true
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['枫亭', '金山卫', '排海', '枫泾', '金兴', '廊下'],
                axisLabel: {
                    textStyle: {
                        color: '#aaa'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#aaa'
                    }
                }
            },
            series: [
                {
                    name: '数据',
                    type:'scatter',
                    data:[]
                },
            ]
        });
        this.data_echarts4 = [0, 905.9992065, 6180.5557, 623.697937, 180.8449097, 361.7999878];
        myChart.setOption({
            series: [{
                // 根据名字对应到相应的系列
                name: '数据',
                data: this.data_echarts4
            }]
        });
    }
  }
}
</script>