<template>
    <div class="content warn">
        <div class="warn-top">
            <div class="warn-tp-lt">
                <!--<h4 class="w-tt">报警历史信息</h4>-->
                <div class="table-box">
                    <table class="table table-bordered table-striped" id="table1">
                        <thead>
                            <tr>
                                <th>报警时间</th>
                                <th>水厂名称</th>
                                <th>报警类型</th>
                                <th>报警详情</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in data_table.list" :key="index">
                                <template v-if="index < upper && index >lower">
                                    <td>{{item.time}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.warnType == 'T_DATA_INTERRUPT_WARN' ? '数据中断告警' : '数据上下限告警'}}</td>
                                    <td>{{item.content}}</td>
                                </template>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <!--分页按钮-->
                <el-pagination
                    :hide-on-single-page="show_pag"
                    class="pagination"
                    background
                    layout="prev, pager, next"
                    :total="data_table.count"
                    @current-change="next_page"
                    >
                </el-pagination>

            </div>
            <div class="warn-tp-rt">
                <!--<h4 class="w-tt">预警</h4>-->
                <ul class="list-ul">
                    <li class="list-li" v-for="(item,index) in data_list" :key="index">
                        <span class="li-sd">{{item.content}}</span>
                        <span class="li-td">{{item.time}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="warn-bottom">
            <!--<h4 class="w-tt">水厂预警</h4>-->
            <ul class="w-bt-ul">
                <li class="w-bt-li" v-for="(item,index) in data_water" :key="index">
                    <h4 class="w-bt-li-tt">{{item.company_name}}</h4>
                    <div class="w-img-box" v-if="item.count != 0"> <img class="img" src="@/image/warn/red.png" /></div>
                    <div class="w-img-box" v-else> <img class="img" src="@/image/warn/green.png" /></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    .warn-top,.warn-bottom{
        float:left;
        width:1850px;
        margin:0 0 0 35px;
        height: 608px;
    }
    .warn-tp-lt{
        float:left;
        width:1125px;
        height:608px;
        position: relative;
        background: url("../../image/warn/warn_history.png") no-repeat;
    }
    .warn-tp-rt{
        float:right;
        width:700px;
        height:608px;
        position: relative;
        background: url("../../image/warn/warn_pump.png") no-repeat;
    }
    .warn-bottom{
        margin-top:20px;
        height: 285px;
        position: relative;
        background: url("../../image/warn/warn_water.png") no-repeat;
    }
    .w-tt{
        position: absolute;
        width:200px;
        height: 30px;
        left:35px;
        top:-5px;
        color:#f39f51;
        font-size: 16px;
    }
    .warn .table-box{
        margin:30px auto 15px;
        width: 96%;
        height: 490px;
        overflow: auto;
    }
    .warn .table-box .table{
        font-size: 14px;
        margin:auto;
        width:100%;
        height: auto;
        color:#bbb;
        text-align: center;
    }
    .warn .table-box .table th{
        text-align: center;
    }
    .warn .table-striped{
        background: #17314c;
    }
    .warn .table-striped>tbody>tr:nth-of-type(odd){
        background: #142238;
    }
    .warn .w-tp-lt-tp{
        margin:25px auto 0;
        width:96%;
        height: 40px;
        color:#bbb;
    }
    .w-tp-list{
        float:left;
        width:auto;
        height:35px;
        line-height: 35px;
        margin:0 10px;
    }
    .w-tp-list select{
        width:200px;
        height:35px;
        margin:0 5px;
        background: #142238;
        border:1px solid #2d77b1;
    }
    .w-btn{
        width:85px;
        height: 35px;
        box-sizing: border-box;
        background: #142238;
        border:1px solid #2d77b1;
        margin:0 10px;
    }
    .w-btn-query{
        background: #17314c;
    }
    .warn-tp-rt .list-ul{
        font-size: 14px;
        margin: 20px auto 5px;
        width:96%;
        height: 570px;
        overflow: auto;
    }
    .warn-tp-rt .list-li{
        float:left;
        width:100%;
        height:40px;
        line-height: 40px;
    }
    .warn-tp-rt .list-li .li-fr,
    .warn-tp-rt .list-li .li-sd,
    .warn-tp-rt .list-li .li-td{
        float:left;
        width:15%;
        display: block;
        color:#5e8dba;
    }
    .warn-tp-rt .list-li .li-sd{
        width:75%;
        text-align: left;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        color:#f39f51;

    }
    .warn-tp-rt .list-li .li-td{
        width:25%;
        text-align: right;
    }
    .w-bt-ul{
        margin:50px auto 10px;
        width:96%;
        height:210px;
    }
    .w-bt-li{
        float:left;
        width:16.6%;
        height: 210px;
        border-top:1px solid #55acee;
        position: relative;;
    }
    .w-bt-li-tt{
        position: absolute;
        width:80%;
        height: 30px;
        left: -15%;
        top: -33px;
        text-align: center;
        line-height: 30px;
        background: rgba(5,14,39,1);
        color:#5e8dba;
        font-size:14px;
    }
    .w-img-box{
        margin:20px auto;
        width:96%;
        height: 180px;
        line-height: 180px;
        text-align: center;
    }
    .w-img-box img{
        vertical-align: middle;
    }
    .pagination{
        position: absolute;
        top: 560px;
        right: 23px;
    }
</style>

<script>
export default {
    data () {
        return{
            data_table: {
                count: 11,
                list: [
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-01-24 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-10 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        isNewRecord: false,
                        id: "1120846062514266117",
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-13 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-25 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-24 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-24 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-15 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-22 21:15:00",
                        content: "告警！数据项(LS测试数据)已10小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-04-12 05:56:00",
                        content: "告警！数据项(LS测试数据)已10小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_UPPER_LOWER_WARN",
                        time: "2019-04-03 10:33:00",
                        content: "告警！数据项(LS测试数据)已143小时超出数据上下限了！数值当前为651.5999756",
                        name: "上海金山廊下污水处理有限公司",
                    },
                    {
                        warnType: "T_DATA_INTERRUPT_WARN",
                        time: "2019-01-24 08:25:00",
                        content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                        name: "上海金山廊下污水处理有限公司",
                    }
                ],
                next: 1,
                prev: 1,
                first: 1,
                pageSize: 10
            },
            data_list: [
                {
                    time: "2019-01-24 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-10 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-13 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-25 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-24 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-24 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-15 08:25:00",
                    content: "告警！数据项(进水瞬时流量)已20小时未有数据连接！",
                },
                {
                    time: "2019-04-22 21:15:00",
                    content: "告警！数据项(LS测试数据)已10小时未有数据连接！",
                }
            ],
            data_water: [
                {
                    company_name: "上海枫亭水质净化有限公司",
                    count: 0
                },
                {
                    company_name: "上海金山枫泾水质净化有限公司",
                    count: 0
                },
                {
                    company_name: "上海金山廊下污水处理有限公司",
                    count: 9
                },
                {
                    company_name: "上海金山排海工程有限公司",
                    count: 0
                },
                {
                    company_name: "上海金山卫污水处理有限公司",
                    count: 0
                },
                {
                    company_name: "上海金兴水处理工程有限公司",
                    count: 0
                }
            ],
            show_pag:true,
            upper:10,
            lower:-1
        }
    },
    mounted () {
        this.upper = this.data_table.pageSize;
    },
    methods: {
        next_page: function (value) {//value是分页控件自动返回的当前页码
            this.upper = value*this.data_table.pageSize;
            this.lower = value*this.data_table.pageSize-11;
        }
    }
}
</script>