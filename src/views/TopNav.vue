<template>
    <div :class="[wrap,BgPic]">
        <div class="nav">
            <div class="logo">
                <img src="@/image/homeLogo.png" alt="logo"/>
            </div>
            <ul class="nav-list">
                <li :class="[nav_li , item.nav_li_active]" v-for="(item,index) in data_title" @click="ChangePage(item.name)" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<style>
    .wrap{
        margin: 0;
        position: absolute;
        height: 1080px;
        width: 1920px;
        background: url("../image/bg.jpg") no-repeat;
        background-size: cover;
    }
    .home{
        background: url("../image/home/homeBg.png") no-repeat;
    }
    .pump{
        background: url("../image/pump/pump.png") no-repeat;
    }
    .nav{
        float:left;
        width:100%;
        height: 120px;
    }
    ul,li{
        list-style: none;
        margin:0;
        padding:0;
    }
    .logo{
        float:left;
        width: 602px;
        height: 70px;
        margin:20px;
    }
    .nav-list{
        float:left;
        position: absolute;
        left: 642px;
        width:880px;
        height:40px;
        margin:25px;
        overflow: hidden;
        /*background: red;*/
    }
    .nav-li{
        float:left;
        width:146px;
        height: 40px;
        text-align: center;
        line-height: 40px !important;
        background: url("../image/navList.png") no-repeat;
        color:#5e8dba;
        cursor: pointer;
        font-size: 16px;
    }
    .nav-li a{
        color:#5e8dba;
        cursor: pointer;
        display: block;
    }
    .nav-li-active{
        background: url("../image/navActive.png") no-repeat;
        color:#FFFFFF;
    }
    .nav-li-active a{
        color:#FFFFFF;
    }
/*table*/
    table {
        display: table;
        width: 100%;
        margin: auto;
        font-weight: 700;
        color: rgb(95,154,220);
        text-align: center;
        color: #f39f51;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table>thead>tr th , table>tbody>tr td{
        text-align: center;
        padding: 6px;/*覆盖bootstrap样式*/
        vertical-align: middle;
        background-color: rgb(21,34,55);
    }

    table tr:first-child{
        color: #bbb;
    }
    .table-bordered,
    .table-bordered>tbody>tr>td,
    .table-bordered>tbody>tr>th,
    .table-bordered>tfoot>tr>td,
    .table-bordered>tfoot>tr>th,
    .table-bordered>thead>tr>td,
    .table-bordered>thead>tr>th{
        border: 1px solid #2d77b1;
    }
    .content{
        float:left;
        width:100%;
        height: auto;
        color: #f39f51;
        margin-top:10px;
    }
</style>


<script>

export default {
    data () {
        return {
            data_title:[{
                name: '首页',
                nav_li_active: 'nav-li-active'
            },{
                name: '污水厂',
                nav_li_active: ''
            },{
                name: '泵站',
                nav_li_active: ''
            },{
                name: '报警',
                nav_li_active: ''
            },{
                name: '公司信息',
                nav_li_active: ''
            }],
            nav_li: 'nav-li',
            wrap: 'wrap',
            BgPic: 'home'
        }
    },
    mounted() {
        this.$router.push({path: '/'})
    },
    methods: {
        ChangePage: function (value) {
            this.data_title.forEach( (item) => {
                item.nav_li_active = '';
                if(item.name == value){
                    item.nav_li_active = 'nav-li-active';
                }
            });
            if(value == '首页'){
                this.$router.push({path: '/'});
                this.BgPic = 'home';
            }
            if(value == '污水厂'){
                this.$router.push({path: 'WaterWorks'});
                this.BgPic = '';
            }
            if(value == '泵站'){
                this.$router.push({path: 'Pump'});
                this.BgPic = 'pump';
            }
            if(value == '报警'){
                this.$router.push({path: 'Warn'});
                this.BgPic = '';
            }
            if(value == '公司信息'){
                this.$router.push({path: 'Company'});
                this.BgPic = '';
            }
      }
  }
}
</script>