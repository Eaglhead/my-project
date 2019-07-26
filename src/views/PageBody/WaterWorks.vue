<template>
    <div class="content water-works">
        <div v-for="(item,index) in data_Water" :class="['list', item.bg_class]"  :key="index">
            <div class="list-content">
                <div :id="item.name">
                    <img v-if="item.show_img" class="list-img" :src="item.Process_img" alt="fengting"/>
                    <img v-else class="list-img" :src="item.flow_img" alt="fengting"/>
                </div>
                <img class="change-img" src="@/image/waterWorkes/change.png" alt="images" @click="changeimg(item.name)"/>
                <div class="list-footer" :id="index">
                    <table class="table table-bordered text-middle">
                        <thead>
                            <tr>
                                <th>数据项</th>
                                <th>氨氮</th>
                                <th>COD</th>
                                <th>TP</th>
                                <th>TN</th>
                                <th>MLSS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>进水口</td>
                                <td>{{item.value.INNH3N != 0 ? item.value.INNH3N : '-'}}</td>
                                <td>{{item.value.INCOD != 0 ? item.value.INCOD : '-'}}</td>
                                <td>{{item.value.INTP != 0 ? item.value.INTP : '-'}}</td>
                                <td>{{item.value.INTN != 0 ? item.value.INTN : '-'}}</td>
                                <td rowspan="2">{{item.value.MLSS != 0 ? item.value.MLSS : '-'}}</td>
                            </tr>
                            <tr>
                                <td>出水口</td>
                                <td>{{item.value.OUTNH3N != 0 ? item.value.OUTNH3N : '-'}}</td>
                                <td>{{item.value.OUTCOD != 0 ? item.value.OUTCOD : '-'}}</td>
                                <td>{{item.value.OUTTP != 0 ? item.value.OUTTP : '-'}}</td>
                                <td>{{item.value.OUTTN != 0 ? item.value.OUTTN : '-'}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .list{
        float: left;
        width: 594px;
        height: 434px;
        margin:10px 17px;
        position: relative;
    }
    .list-title{
        position: absolute;
        width: 260px;
        height: 35px;
        left: 40px;
        top: -10px;
        font-weight: normal;
        font-size:16px;
    }
    .list-content{
        float:left;
        width:520px;
        height:auto;
        margin:10px 37px;
    }
    .list-img{
        float:left;
        width:520px;
        margin-top:20px;
    }
    .list-footer{
        float:left;
        width:100%;
        height:auto;
        line-height: 20px;
        margin-top:10px;
    }
    .list-tt-detail{
        float:left;
        width: 33%;
        height:auto;
    }
    .list-tt-detail h4{
        height:25px;
        font-weight: normal;
    }
    .water-works table{
        font-size: 12px;
    }
    .water-works table tr:first-child{
        color: #f39f51;
    }
    .water-works table>thead>tr th , table>tbody>tr td{
        text-align: center;
        padding: 6px!important;/*覆盖bootstrap样式*/
        vertical-align: middle!important;
        background-color: rgb(21,34,55);
    }
    .water-works table>thead>tr th ,.water-works table>tbody>tr td:first-child{
        color: rgb(95,154,220);
    }
    .bg-fengting{
         background: url('../../image/waterWorkes/fengting.png') no-repeat;
    }
    .bg-jinxing{
         background: url('../../image/waterWorkes/jinxing.png') no-repeat;
    }
    .bg-jinshanwei{
         background: url('../../image/waterWorkes/jinshanwei.png') no-repeat;
    }
    .bg-langxia{
         background: url('../../image/waterWorkes/langxia.png') no-repeat;
    }
    .bg-paihai{
         background: url('../../image/waterWorkes/paihai.png') no-repeat;
    }
    .bg-fengjing{
         background: url('../../image/waterWorkes/fengjing.png') no-repeat;
    }
    .change-img{
        position: absolute;
        top: 24px;
        right: 9px;
    }
</style>

<script>
export default {
    data () {
        return {
            data_Water:[{
                name: 'fengting',
                bg_class: 'bg-fengting',
                Process_img: require('@/image/waterWorkes/1.png'),
                flow_img: require('@/image/waterWorkes/flow_fengting.png'),
                show_img: true,
                value: {
                    INTP: 0,
                    OUTCOD: 24.3999996,
                    OUTTN: 9.8599997,
                    INCOD: 100,
                    INNH3N: 10,
                    OUTTP: 0.29,
                    MLSS: 5.5668511,
                    INTN: 0,
                    OUTNH3N: 0.281
                }
            },{
                name: 'jinxing',
                bg_class: 'bg-jinxing',
                Process_img: require('@/image/waterWorkes/2.png'),
                flow_img: require('@/image/waterWorkes/flow_jinxing.png'),
                show_img: true,
                value: {
                    INTP: 0,
                    OUTCOD: 16.5,
                    OUTTN: 0,
                    INCOD: 130.5,
                    INNH3N: 0.65,
                    OUTTP: 0,
                    MLSS: 4192.9106445,
                    INTN: 0,
                    OUTNH3N: 0.042
                }
            },{
                name: 'jinshanwei',
                bg_class: 'bg-jinshanwei',
                Process_img: require('@/image/waterWorkes/3.png'),
                flow_img: require('@/image/waterWorkes/flow_jinshanwei.png'),
                show_img: true,
                value: {
                    INTP: 1.23,
                    OUTCOD: 32.7999992,
                    OUTTN: 9.3999996,
                    INCOD: 1968.6999512,
                    INNH3N: 41.2299995,
                    OUTTP: 0.24,
                    MLSS: 20000,
                    INTN: 32.1399994,
                    OUTNH3N: 0.037
                }
            },{
                name: 'langxia',
                bg_class: 'bg-langxia',
                Process_img: require('@/image/waterWorkes/4.png'),
                flow_img: require('@/image/waterWorkes/flow_langxia.png'),
                show_img: true,
                value: {
                    INTP: 3.2640624,
                    OUTCOD: 22.2126808,
                    OUTTN: 7.3625002,
                    INCOD: 268.7999878,
                    INNH3N: 24.8375168,
                    OUTTP: 0.2348203,
                    MLSS: 35.214119,
                    INTN: 34.1119995,
                    OUTNH3N: 0.0568207
                }
            },{
                name: 'paihai',
                bg_class: 'bg-paihai',
                Process_img: require('@/image/waterWorkes/5.png'),
                flow_img: require('@/image/waterWorkes/flow_paihai.png'),
                show_img: true,
                value: {
                    INTP: 0,
                    OUTCOD: 11.9,
                    OUTTN: 8.88,
                    INCOD: 0,
                    INNH3N: 0,
                    OUTTP: 0.022,
                    MLSS: 5644.6904,
                    INTN: 0,
                    OUTNH3N: 0.04
                }
            },{
                name: 'fengjing',
                bg_class: 'bg-fengjing',
                Process_img: require('@/image/waterWorkes/6.png'),
                flow_img: require('@/image/waterWorkes/flow_fengjing.png'),
                show_img: true,
                value: {
                    INTP: 0,
                    OUTCOD: 8.8000002,
                    OUTTN: 0,
                    INCOD: 231.1999969,
                    INNH3N: 11,
                    OUTTP: 0,
                    MLSS: 2905.0925293,
                    INTN: 0,
                    OUTNH3N: 0.04
                }
            },
            ],
            row_list: 'row-list'
        }
    },
    mounted() {

    },
    methods: {
        changeimg: function (name) {
            this.data_Water.forEach( (item) =>{
                if(item.name == name){
                    item.show_img = !item.show_img;
                }
            });
        }
    }
}
</script>