<template>
    <div class="content">
        <div class="pump-right-table">
            <div class="pump-title">
                <img src="@/image/pump/water_level.png" alt="泵站液位">
            </div>
            <div class="table-box">
                <table class="table table-bordered table-striped" id="table1">
                    <thead>
                        <tr>
                            <th>站点</th>
                            <th>液位</th>
                            <th>站点</th>
                            <th>液位</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in data_Pump" :key="index" >
                            <td :class="item.font_color">{{item.name}}</td>
                            <td :class="item.font_color">{{item.value}}</td>
                            <td :class="item.font_color2">{{item.name2 != null ? item.name2 : '-'}}</td>
                            <td :class="item.font_color2">{{item.value2 != null ? item.value2 : '-'}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
    .pump-right-table{
        float: right;
        width: 511px;
        height: 921px;
        margin-right: 21px;
        background-size: cover;
        position: relative;
        background: url("../../image/pump/pumpTableBg.png") no-repeat;
    }
    .pump-title{
        width: 204px;
        height: 35px;
        margin: 25px 25px 25px 15px;
        line-height: 35px;
    }
    .pump-title img{
        margin-left: 0px; 
    }
    .pump .table-box{
        margin: 25px  auto;
        width: 92%;
        height: 88.5%;
        overflow: auto;
    }
    .pump .table-box .table{
        margin:auto;
        width:100%;
        height: auto;
        color:#bbb;
        text-align: center;
        font-size: 14px;
    }
    .pump .table-box .table th{
        text-align: center;
    }
    .pump .table-striped{
        background: #17314c;
    }
    .pump .table-striped>tbody>tr:nth-of-type(odd){
        background: #142238;
    }
    .langxia-color{
        color: #d623e6;
    }
    .jinxing-color{
        color: #e65123;
    }
    .fengjing-color{
        color: #23e67a;
    }
    .paihai-color{
        color: #23cde6;
    }
    .fengting-color{
        color: #e6c423;
    }
    .jinshanwei-color{
        background-color: blue;
    }
</style>

<script>
export default {
    data () {
        return {
            data_all:[
            {
                officeName: "上海金兴水处理工程有限公司",
                officeCode: "SHJXSCLGCYXGS",
                list: [
                {
                    office_name: "上海金兴水处理工程有限公司",
                    siteName: "1#厂外泵站",
                    office: "SHJXSCLGCYXGS",
                    VALUE: 4.5
                }]
            },
            {
                officeName: "上海金山枫泾水质净化有限公司",
                officeCode: "SHFJSZJHYXGS",
                list: [
                {
                    office_name: "上海金山枫泾水质净化有限公司",
                    siteName: "枫泾1#泵站",
                    office: "SHFJSZJHYXGS",
                    VALUE: 3
                },
                {
                    office_name: "上海金山枫泾水质净化有限公司",
                    siteName: "枫泾2#泵站",
                    office: "SHFJSZJHYXGS",
                    VALUE: 3
                },
                {
                    office_name: "上海金山枫泾水质净化有限公司",
                    siteName: "枫泾3#泵站",
                    office: "SHFJSZJHYXGS",
                    VALUE: 3
                },
                {
                    office_name: "上海金山枫泾水质净化有限公司",
                    siteName: "枫泾4#泵站",
                    office: "SHFJSZJHYXGS",
                    VALUE: 1.9
                }
                ]
            },
            {
                officeName: "上海金山排海工程有限公司",
                officeCode: "SHJSPHGCYXGS",
                list: [
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "亭林泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 5.6136
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "亭林镇泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.3369
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "华新泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.9494
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "天工泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 5.7969
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "张堰1#泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.6269
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "张堰2#泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.3421
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "张堰3#泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.2845
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "张堰4#泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 5.9416
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "新城区泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.5133
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "月工泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.25
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "朱吕路泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.0381
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "朱行泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 8.2375
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "林慧泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.3438
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "林贤路泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.7371
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "浦卫路泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 9.73
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "物流园泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.44
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "石化6#防汛泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 1.5013
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "石化9#防汛泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 2.462
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "金卫泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 6.1582
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "钱圩泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.6758
                },
                {
                    office_name: "上海金山排海工程有限公司",
                    siteName: "龙泉港泵站",
                    office: "SHJSPHGCYXGS",
                    VALUE: 7.1248
                }
                ]
            },
            {
                officeName: "上海枫亭水质净化有限公司",
                officeCode: "SHFTSZJHYXGS",
                list: [
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾1#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 3.4466252
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾2#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 3.9223578
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾3#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 3.0417407
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾4#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 1.7515242
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾5#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 5.5048943
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾6#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 4.6402621
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾7#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 6.85
                },
                {
                    office_name: "上海枫亭水质净化有限公司",
                    siteName: "朱泾8#泵站",
                    office: "SHFTSZJHYXGS",
                    VALUE: 7.01
                }
                ]
            }
        ],
            data_Pump:[],
            data_index: 0,
            font_color:''
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData: function () {
            for (let i = 0 ; i < this.data_all.length ; i++) {
                if (this.data_all[i].officeName=='上海金山廊下污水处理有限公司'){
                    for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'langxia-color';

                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'langxia-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
                if (this.data_all[i].officeName=='上海金兴水处理工程有限公司'){
                  for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'jinxing-color';

                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'jinxing-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
                if (this.data_all[i].officeName=='上海金山枫泾水质净化有限公司'){
                  for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'fengjing-color';


                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'fengjing-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
                if (this.data_all[i].officeName=='上海金山排海工程有限公司'){
                  for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'paihai-color';
                        // console.log(JSON.stringify(this.data_all[i].list[j]));
                        // console.log(JSON.stringify(this.data_Pump[this.data_index]));
                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'paihai-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
                if (this.data_all[i].officeName=='上海枫亭水质净化有限公司'){
                  for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'fengting-color';


                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'fengting-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
                if (this.data_all[i].officeName=='上海金山卫污水处理有限公司'){
                  for (let j = 0 ; j < this.data_all[i].list.length ; j+=2){
                        let a = {
                            name : '',
                            font_color : '',
                            value : '',
                        };
                        this.data_Pump.push(a);
                        this.data_Pump[this.data_index].name = this.data_all[i].list[j].siteName;
                        this.data_Pump[this.data_index].value = this.data_all[i].list[j].VALUE;
                        this.data_Pump[this.data_index].font_color = 'jinshanwei-color';


                        if(this.data_all[i].list[j + 1] != null){
                            this.data_Pump[this.data_index].name2 = this.data_all[i].list[j + 1].siteName;
                            this.data_Pump[this.data_index].value2 = this.data_all[i].list[j + 1].VALUE;
                            this.data_Pump[this.data_index].font_color2 = 'jinshanwei-color';
                            this.data_index++;
                        } else {
                            this.data_index++;
                        }
                    }
                }
            }
        }
    }
}
</script>