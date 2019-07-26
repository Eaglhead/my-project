<template>
<div class="content company">
    <div class="company-top">
        <div class="company-tp-lt">
            <div class="com-tp-lt-tp">
                <!--<h4 class="c-tt">公司简介</h4>-->
                <div id="synopsis"  class="panel-body">
                    <p class="text-title-style"><span>金山排水管理所简介</span></p>
                    <p class="text-body-style"><span>上海市金山区排水管理所位于金山区朱泾镇人民路65号，
                        为金山区水务局直属的全民事业单位；负责全区排水管理和污水处理费的征收，规范排水行为，保护水资源，业务上受市排水处的指导。
                        主要职责为：宣传和贯彻执行国家排水管理工作的法律法规规章和上海市制定的有关排水管理工作的规范性规定和技术标准；
                        负责全区城镇污水处理厂及排水泵站的行业管理；负责全区排水管网养护监管和排水接入；负责全区污水处理费的征收和政策的宣传解答。</span>
                    </p>
                    <p><br></p>
                </div>
            </div>
            <div class="com-tp-lt-bt">
                <!--<h4 class="c-tt c-tt-change">污水厂概况</h4>-->
                <ul class="img-list">
                    <li v-for="(item,index) in data_img_list" :class="['img-li' ,item.class_active]" :key="index"><a @click="ChangeImg(item)">{{item.name}}</a></li>
                </ul>
                <div class="com-p-content">
                    <img :src="data_alert.url_img" :alt="data_alert.name" @click="open(data_alert.title,data_alert.content)"/>
                </div>
            </div>
        </div>
        <div class="company-tp-rt">
            <div class="com-tp-rt-tp">
                <!--<h4 class="c-tt">新闻</h4>-->
                <div id="news" class="">
                    <!-- 轮播（Carousel）指标 -->
                    <el-carousel trigger="click">
                    <el-carousel-item v-for="(item,index) in data_carousel" :key="index">
                        <!-- <h3 class="small">{{ item }}</h3> -->
                        <img :src="item.url_img" :alt="item.title" class="carousel-img" @click="open(item.title,item.content)"/>
                    </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="com-tp-rt-bt">
                <!--<h4 class="c-tt">通知</h4>-->
                <ul class="list-ul">
                    <li class="list-li" v-for="(item,index) in data_notice" :key="index" @click="open(item.title,item.content)">
                        <span class="li-sd">{{item.title}}</span>
                        <span class="li-td">{{item.time}}</span>
                    </li>
                </ul>
                <!--分页按钮-->

            </div>
        </div>
    </div>
    <!-- 模态框（Modal） -->

</div>
</template>

<style>
    .company-top{
        float:left;
        width:1850px;
        margin:0 0 0 35px;
        height: 650px;
    }
    .company-tp-lt{
        float:left;
        width:922px;
        height:843px;
        position: relative;
    }
    .company-tp-rt{
        float:right;
        width:900px;
        height:843px;
        position: relative;
    }
    .c-tt{
        position: absolute;
        width:200px;
        height: 30px;
        line-height: 30px;
        left:40px;
        top:-10px;
        color:#f39f51;
        z-index: 5;
    }
    .com-tp-lt-tp , .com-tp-rt-tp{
        float:left;
        height:413px;
        overflow: hidden;
        position: relative;
        top: 4px;
        margin-top: 5px;
        margin-bottom: 27px;
    }
    .com-tp-lt-tp{
        width:922px;
    }
    .com-tp-rt-tp{
        width:900px;
    }
    .com-tp-lt-bt , .com-tp-rt-bt{
        float:left;
        width:900px;
        height:430px;
        position: relative;

    }
    .com-tp-lt-tp{/*金山简介*/
        background: url("../../image/company/introduction.png") no-repeat;
    }
    .com-tp-lt-bt{/*公司简介*/
        background: url("../../image/company/com_introduction.png") no-repeat;
    }
    .com-tp-rt-tp{/*新闻*/
        background: url("../../image/company/news.png") no-repeat;
    }
    .com-tp-rt-bt{/*通知*/
        background: url("../../image/company/notices.png") no-repeat;
    }
    .com-tp-rt-bt .list-ul{
        font-size: 14px;
        margin: 30px auto;
        width:93%;
        height: 430px;
        overflow: scroll;
    }
    .com-tp-rt-bt .list-li{
        float:left;
        width:100%;
        height:40px;
        line-height: 40px;
    }
    .com-tp-rt-bt .list-li .li-fr,
    .com-tp-rt-bt .list-li .li-sd,
    .com-tp-rt-bt .list-li .li-td{
        float:left;
        width:15%;
        display: block;
        color:#5e8dba;
    }
    .com-tp-rt-bt .list-li .li-sd{
        width:75%;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color:#f39f51;

    }
    .com-tp-rt-bt .list-li .li-td{
        width:25%;
        text-align: right;
    }
    .com-tp-lt-bt .img-list{/*公司简介公司名字*/
        float:left;
        width:840px;
        height:40px;
        margin:30px 20px 0px 30px;
        overflow: hidden;
        /*background: red;*/
    }
    .com-tp-lt-bt .img-li{
        float:left;
        width:140px;
        height: 40px;
        text-align: center;
        line-height: 40px !important;
        color:#5e8dba;
        cursor: pointer;
        font-size: 16px;
    }
    .com-tp-lt-bt .img-li a{
        color:#5e8dba;
        cursor: pointer;
        display: block;
    }
    .com-tp-lt-bt a{
        background-color:rgba(0,0,0,0);
    }
    .com-tp-lt-bt .img-li-active{
        color:#FFFFFF;
    }
    .com-tp-lt-bt .img-li-active a{
        color:#FFFFFF;
    }
    .com-p-content{
        float: left;
        width: 100%;
        padding-top: 15px;
        padding-right: 15px;
    }
    .com-tp-rt-bt p span,.com-tp-rt-bt p span span{
        color: #00b7ee;
    }

    .img-hidden{
        display: none;
    }
    .text-title-style{
        text-align: center;
        font-family: 微软雅黑;
        font-size: 20px;
    }
    .text-body-style{
        font-family: 仿宋_GB2312;
        font-size: 14px; 
        text-align: left;
        text-indent:43px;
        padding-left: 15px;
        padding-right: 15px;
    }
    /* 改变轮播图样式 */
    #news{
        margin-top: 13px;
    }
    #news div , #news div div{
        height: 400px;
    }
    .carousel-img{
        margin-top: 20px;
        height: 350px;
        width: 860px;
    }
    /* 改变弹框样式 */
    .el-message-box{
        width: 700px;
        max-height: 800px;
        overflow: auto; 
    }
</style>

<script>
export default {
    data () {
        return {
            data_img_list:[
                {
                    name: '枫亭',
                    class_active: 'img-li-active',
                    url_img: require('@/image/company/2.png'),
                    title: '上海枫亭水质净化有限公司',
                    content: '<!--HTML--><p style="text-align:center;line-height:28px"><strong><span style="font-size:20px;font-family:仿宋;color:black">上海枫亭水质净化有限公司简</span></strong><strong><span style="font-size:20px;font-family:仿宋;color:black">介</span></strong></p><p style="text-align:center;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><strong><span style="font-family:宋体;color:black">&nbsp;</span></strong></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><strong><span style="font-size:20px;font-family:仿宋;color:black">一、公司概况</span></strong></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">上海枫亭水质净化有限公司是主要收集处理朱泾镇区、新农社区、朱泾工业园区、松隐社区（紫石泾以西）范围内污水的城镇污水处理厂。服务面积约29平方公里，服务人口13万人左右。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><strong><span style="font-size:20px;font-family:仿宋;color:black">二、设计规模</span></strong></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">污水处理总设计能力为6万m3/日。</span></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">一期设计规模3万m3/日，总投资11979万元，于2005年2月开工，2007年5月投入运行，2009年6月通过竣工环境保护验收。</span></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">二期扩建规模3万m3/日，同时对原一期3万m3/日升级提标改造，总投资12413万元，于2013年12月开工，2015年5月投入运行，2016年2月通过竣工环境保护验收。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><strong><span style="font-size:20px;font-family:仿宋;color:black">三、工艺简介</span></strong></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">污水处理：采用改良型氧化沟+循环澄清池+滤布滤池工艺，消毒采用紫外线消毒工艺，尾水排入秀州塘。一期出水水质执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级B标准，二期扩建后全厂出水水质按一级A标准执行。</span></p><p style="text-indent:43px;line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">污泥处理：采用机械浓缩脱水+污泥固化工艺，出泥含水率≤60%，脱水污泥外运至上海金山环境再生能源有限公司。</span></p><p><br/></p>'
                },
                {
                    name: '金兴',
                    class_active: '',
                    url_img: require('@/image/company/3.png'),
                    title: '上海金兴水处理工程有限公司',
                    content: '<!--HTML--><p style="line-height:28px;background:white"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">上海金兴水处理工程有限公司前身兴塔水质净化厂，于2007年7月开始改建，2008年10月投入试运行，2009年7月注册登记使用现用名，是上海市第三轮三年环保行动计划项目。公司主要接纳金山区枫泾镇兴塔社区的生活污水和兴塔工业区工业污水，服务面积10.48平方公里 服务人口2.5万人，厂区占地3.5公顷，外设一座中途提升泵站，约2公里的污水收集主管网。<br/> </span><span style="font-size:21px;font-family:&#39;Arial&#39;,&#39;sans-serif&#39;;color:black">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">一期工程设计规模1万立方米/日，污水处理采用氧化沟工艺。污泥处理采用带式浓缩一体机。出水执行《城镇污水处理厂污染物排放标准》（GB18918-2002）中的一级（B）标准。<br/> </span><span style="font-size:21px;font-family:&#39;Arial&#39;,&#39;sans-serif&#39;;color:black">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">二期扩建提标工程增加1.0万立方米/日的设备安装规模及部分土建设施，使总污水处理能力提升至2万立方米/日，同时对一期设施同步提升至一级A水质标准。工程于2015年8月开工，2016年11月完成工程竣工验收。改造原有调节池为水解酸化池，新增污水深度处理工艺（高效沉淀池+D型滤池）。污泥处理工艺由原先带式浓缩一体机改造为板框压滤机工艺，处理后的污泥含水率在60%下，新增污泥浓缩池。工程总投资4370.76万元。目前，各处理设施运行情况良好。</span></p><p><br/></p>'
                },
                {
                    name: '排海',
                    class_active: '',
                    url_img: require('@/image/company/4.png'),
                    title: '上海金山排海工程有限公司',
                    content: '<!--HTML--><p style="text-align:center;line-height:40px"><span style="font-size:24px;font-family:&#39;方正小标宋简体&#39;,&#39;serif&#39;;color:black">上海金山排海工程有限公司一车间简介</span></p><p style="text-align:center;line-height:40px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:24px;font-family:&#39;Arial&#39;,&#39;sans-serif&#39;;color:black">&nbsp;</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">上海金山排海工程有限公司主要承担金山东部地区生活污水和工业废水的收集处理任务，服务范围包括金山东部亭林、张堰、山阳、漕泾四镇及金山工业区、金山新城区、金山卫钱圩地区，服务区域约154.66平方公里，服务人口约20.2万。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">公司目前共包括污水处理厂2座，分别位于山阳镇和漕泾镇；输送泵站24座，其中自有污水泵站11座，托管污水泵站11座，托管下立交雨水泵站2座；污水输送总管58.535公里。截至2018年10月底，公司纳管居民小区总数96家，纳管企业总数807家。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">排海公司一车间暨新江水质净化厂，位于金山区山阳镇亭卫南路208号，总占地面积6.43公顷，污水处理规模10万吨/日，分三期建设。一期工程于2005年8月开工建设，2006年12月通水运行，总投资14316.22万元；二期提标扩建工程于2009年5月开工建设，2011年8月通水运行，总投资16164.62万元；三期提标改造工程于2016年开工建设，2017年11月通水运行，总投资14188.68万元。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">进水水质执行DB31/199-2018《污水综合排放标准》（CODCr≤500mg/L、SS≤400mg/L、TP≤8mg/L、6.5≤pH≤9.5）；出水水质执行GB18918-2002《城镇污水处理厂污染物排放标准》一级A标准（CODCr≤500mg/L、SS≤10mg/L、TP≤0.5mg/L、6≤pH≤9），尾水深海排放至杭州湾。噪声控制标准执行《工业企业厂界环境噪声排放标准》中2类功能区限值标准。臭气控制按上海市《城镇污水处理厂大气污染物排放标准》（DB31/982-2016）标准执行。</span></p><p style="line-height:28px;font-variant-ligatures: normal;font-variant-caps: normal;orphans: 2;text-align:start;widows: 2;-webkit-text-stroke-width: 0px;word-spacing: 0px"><span style="font-size:21px;font-family:&#39;仿宋_GB2312&#39;,&#39;serif&#39;;color:black">污水处理工艺采用间歇式循环延时曝气活性污泥法+高效沉淀池+高效曝气生物滤池工艺；污泥处理采用板框压滤脱水工艺，产能40吨绝干污泥/日，处理后的污泥含水率控制在60%以下，脱水干污泥委托第三方进行最终处置。出水水质均稳定达到一级A排放标准，各项减排工作稳步推进。废气治理生物处理设施共计9套，其中5套采用化学洗涤+生物组合处理工艺、2套采用水洗涤+生物组合处理工艺、1套生物处理工艺、1套化学洗涤+生物组合处理+离子送风工艺。</span></p><p><br/></p>'
                },
                {
                    name: '廊下',
                    class_active: '',
                    url_img: require('@/image/company/1.png'),
                    title: '上海金山廊下污水处理有限公司',
                    content: '<!--HTML--><p style="white-space: normal; text-indent: 48px; line-height: normal;"><span style="line-height: 24px; font-family: arial, helvetica, sans-serif;"></span></p><p style="text-indent: 40px;line-height: 150%"><strong> </strong><strong> </strong></p><p style="text-align:center;line-height:150%"><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山廊下污水处理</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">有限公司简介：</span></span></p><p style="text-indent:48px;line-height:150%"><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山廊下污水处理</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">有限公司</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">位于上海金山区廊下镇</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">万勇路</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px">475号，</span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">是金山创建现代农业工业区的基础工程，一期工程由上海城投环境有限公司于</span>2007年负责建设，上海市政工程设计研究院设计</span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">；</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">二期工程</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">自</span>2014年12月开始建设，主要工程内容为一期提标与扩建，处理规模由一期的1万吨/日提高至2万吨/日，项目于2015年12月建成通水</span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">。</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">工程服务范围覆盖了金山现代农业园区廊下镇、吕巷镇及干巷社区，服务镇域面积约</span>20.3平方公里，服务人口约8.1万人，服务区域内为分流制排水系统，污水经输送管汇合进入污水处理厂，经处理后尾水</span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">达到</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">《城镇污水处理厂污染物排放标准》</span>(GB18918-2002)一级A标准</span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">，</span></span><span style=";font-family:仿宋_GB2312;line-height:150%;font-size:21px"><span style="font-family:仿宋_GB2312">排入薛家塘。</span></span></p><p style="white-space: normal; text-indent: 48px; line-height: normal;"><span style="font-family: 宋体; line-height: 24px;"></span><br/></p><p><br/></p>'
                },
                {
                    name: '金山卫',
                    class_active: '',
                    url_img: require('@/image/company/5.png'),
                    title: '上海金山卫污水处理有限公司',
                    content: '<!--HTML--><p style="line-height: normal; white-space: normal; text-indent: 43px;"><span style="font-family: arial, helvetica, sans-serif;"></span></p><p style="text-align:justify;text-justify:inter-ideograph;line-height:40px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山卫污水处理有限公司</span></span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">简介：</span></span></p><p style="text-indent:43px;line-height:40px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山卫污水处理有限公司</span></span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">位于金山区金山卫镇海金路</span></span><span style=";font-family:仿宋_GB2312;font-size:21px">958号，</span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">公司占地</span></span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">面积</span></span><span style=";font-family:仿宋_GB2312;font-size:21px">146亩(其中一期占地96亩)，一期工程设计处理规模2.5万吨/日，废水采用兼氧酸化池＋AC卡鲁塞尔氧化沟处理工艺；二期改扩建主体工程于2016年5月竣工，设计污水处理能力2.5万吨/日，采用MBR生化处理，改扩建后污水厂处理能力达到5万吨/日。服务范围包括金山第二工业区、金山卫镇部分镇区、金山新城区部分地区，废水经处理后</span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">达到</span></span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">《城镇污水处理厂污染物排放标准（</span>GB18918-2002）》一级A标准，尾水</span><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">排入上海石化排水渠道，再深海提升进入杭州湾。</span></span></p><p style="line-height: normal; white-space: normal; text-indent: 43px;"><br/></p>'
                },
                {
                    name: '枫泾',
                    class_active: '',
                    url_img: require('@/image/company/6.png'),
                    title: '上海金山枫泾水质净化有限公司',
                    content: '<!--HTML--><p style="white-space: normal; text-indent: 43px;"><span style="font-family: arial, helvetica, sans-serif;"></span></p><p><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山枫泾水质净化有限公司简介</span>:</span></p><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">上海金山枫泾水质净化有限公司位于金山区枫泾镇农兴村九组</span>4078号，成立于2002年11月，2004年9月建成投入运行，二期扩建工程于2015年6月竣工并投入使用，设计规模2.8万吨/日，尾水水质达到《城镇污水处理厂污染物排放标准（GB18918-2002）》一级A要求。公司服务面积12.63km</span><sup><span style=";font-family:仿宋_GB2312;font-size:21px;vertical-align:super">2</span></sup><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">，服务人口</span>6万人,纳管生产企业总数达204家, 一级管网19.06公里，二、三级管网21公里，总管网39 公里。公司组织架构,设二室六科，即：办公室、企管办、运行管理科、机电设备科、管线管理科、财务科、水质检测科、安全管理科。现有在册职工51人，其中：企业编制46人，事业编制5人。</span></p><p style="white-space: normal; text-indent: 43px;"><span style="font-family: arial, helvetica, sans-serif;"><br/></span><br/></p><p><br/></p>'
                }
            ],
            data_alert: {},
            data_carousel:[
                {
                    url_img: require('@/image/company/1.png'),
                    title: '区排水所开展污水厂汛前安全生产检查',
                    content:'<!--HTML--><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">为深入贯彻落实市、区水务局切实做好汛期安全生产工作要求，进一步加强</span>2019年汛期本区污水处理行业安全生产工作，严防自然灾害引发生产安全事故。近期，区排水所开展汛前污水厂安全生产检查。</span></p><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">此次检查由区排水所副所长曹维权带队，分别对各污水处理厂的日常运行与安全生产工作情况进行了检查。检查组听取了污水处理厂关于汛前运行及安全工作汇报，查看了各厂安全隐患排查、应急预案、安全培训等安全台账</span>,并现场检查了污水处理反应池、脱水机房及中控室等场所，全面了解各单位安全生产情况。对于检查中发现的问题，检查组要求各单位即知即改，抓紧实施，有效预防生产事故的发生。</span></p><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">对做好下阶段排水防汛工作，检查组要求各污水处理厂始终保持如履薄冰、如临深渊的精神状态，落实好</span>“三个加强”。</span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">一是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强设施运行安全管理，深入开展防范硫化氢中毒事故宣传教育，保障设施正常运行；</span></span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">二是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强安全监督自查自纠力度，突出重点部位，发现问题及时整改；</span></span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">三是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强安全生产应急管理，严格执行关键岗位值班制度和信息报告制度，确保群众安全度汛。</span></span></p><p><br/></p>'
                },
                {
                    url_img: require('@/image/company/2.png'),
                    title: '月浦水厂深度处理工程开工',
                    content:'<!--HTML--><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 日前，月浦水厂深度处理工程正式开工，预计2020年通水后将很大程度提升上海部分区域供应市民的水质。</p><p>　　月浦水厂于1992年建成通水，供水能力为40万立方米/日，供水范围覆盖宝山、静安（原闸北）、普陀等三个行政区，是上海第一家以长江水为水源的自来水厂。为进一步加强内部精细管理，更好地服务市民百姓生活，此次需要处理改造项目，在保证水厂原有供水基础上，新建40万立方米/日深度处理系统，在现有“沉淀-过滤-消毒”的常规水处理工艺上，嵌入“臭氧-生物活性炭”深度处理工艺，确保出水水质得到极大提升。此项工程为上海市公益性项目，总投资约为3.6亿元，城投水务负责建设，计划2020年建成通水，届时上海宝山区和静安区（原闸北）、普陀区部分区域供应水质将得到极大提升，有效降低自来饮用水安全问题的发生。</p><p><br/></p>'
                },
                {
                    url_img: require('@/image/company/3.png'),
                    title: '“生活垃圾分类回收模式与智慧环卫关键装备”项目启动',
                    content:'<!--HTML--><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3月25日，由环境研究院牵头负责的国家重点研发计划“固废资源化”重点专项——“生活垃圾分类回收模式与智慧环卫关键装备”项目正式启动。</p><p>　　该项目针对生活垃圾分类回收模式与智慧环卫系统的设计差异化、装备智能化、管理智慧化、体系标准化的需求，探索垃圾分类标准设定的多维影响因素和复杂环卫感知数据的协同处理理论，研究经济合理的城镇生活垃圾分类回收模式设计方法体系，开发“源头质量判别­­——过程多元分拣——智能分类运输”的智能化装备体系，建设“感、联、知、控”智慧环卫云平台快速管控体系，构建全程分类智慧环卫标准化体系。</p><p><br/></p>'
                }

            ],
            data_notice:[
                {
                    title: '区排水所开展污水厂汛前安全生产检查',
                    time: '2019-05-21 10:43:28',
                    content: '<!--HTML--><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">为深入贯彻落实市、区水务局切实做好汛期安全生产工作要求，进一步加强</span>2019年汛期本区污水处理行业安全生产工作，严防自然灾害引发生产安全事故。近期，区排水所开展汛前污水厂安全生产检查。</span></p><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">此次检查由区排水所副所长曹维权带队，分别对各污水处理厂的日常运行与安全生产工作情况进行了检查。检查组听取了污水处理厂关于汛前运行及安全工作汇报，查看了各厂安全隐患排查、应急预案、安全培训等安全台账</span>,并现场检查了污水处理反应池、脱水机房及中控室等场所，全面了解各单位安全生产情况。对于检查中发现的问题，检查组要求各单位即知即改，抓紧实施，有效预防生产事故的发生。</span></p><p style="text-indent:43px"><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">对做好下阶段排水防汛工作，检查组要求各污水处理厂始终保持如履薄冰、如临深渊的精神状态，落实好</span>“三个加强”。</span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">一是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强设施运行安全管理，深入开展防范硫化氢中毒事故宣传教育，保障设施正常运行；</span></span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">二是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强安全监督自查自纠力度，突出重点部位，发现问题及时整改；</span></span><strong><span style=";font-family:仿宋_GB2312;font-weight:bold;font-size:21px"><span style="font-family:仿宋_GB2312">三是要</span></span></strong><span style=";font-family:仿宋_GB2312;font-size:21px"><span style="font-family:仿宋_GB2312">进一步加强安全生产应急管理，严格执行关键岗位值班制度和信息报告制度，确保群众安全度汛。</span></span></p><p style="text-align: center;"></p><p style="text-align: center;"></p><p style="text-align: center;"><br/></p>'
                },
                {
                    title: '《环境和社会管理框架》第三次公示',
                    time: '2019-04-17 15:51:34',
                    content: '<!--HTML--><p>2018年2月，根据国家发改委和财政部发布的《关于印发我国利用世界银行和亚洲开发银行贷款2018-2022年备选项目准备工作的通知》（发改外资【2018】290号文），上海城投（集团）有限公司通过上海市发改委、上海市财政局共同申报的《新型城镇化融资创新示范项目》，列入世界银行贷款2018-2020年备选项目规划清单，将由世界银行和德国复兴信贷银行（以下简称“KfW”）以联合融资的方式共同提供总额为3.5亿美元的贷款，创新城镇化资金保障机制，为上海及长三角、长江经济带等地的生态环保及新型城镇化发展项目提供资金、技术和能力建设等综合服务，贷款期限最长将达到30年。</p>'
                }
            ],
        }
    },
    mounted () {
        this.data_alert = this.data_img_list[0];
    },
    methods: {
        ChangeImg: function (obj) {
            this.data_img_list.forEach( (item) => {
                item.class_active = '';
                if(item.name == obj.name){
                    item.class_active = 'img-li-active';
                }
            });
            this.data_alert = obj;
        },
        open: function (title,content) {
            this.$alert(content, title, {
                dangerouslyUseHTMLString: true
            });
      }
    }
}
</script>