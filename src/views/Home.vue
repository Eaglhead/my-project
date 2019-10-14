<template>
  <div class="home-pages">
    <ul>
      <li v-for="(item,index) in data_title" @click="ChangePage(item.name)" :key="index">{{item.name}}</li>
    </ul>
    <TimeChoose
      class="time-choose"
      v-if="show_time"
      :data_name="data_name"
      :station_name="station_name"
      @close="ChangePage('时间组件')"
     />
  </div>
</template>
<style scoped>
  .home-pages{
    height: 1080px;
  }
  li{
    cursor: pointer;
    list-style:none;
  }
  li:hover{
    color: blue;
    font-weight: 900;
  }
  .time-choose{
    position:fixed;
    top: 10%;
    left: 30%;
  }
</style>
<script>
// @ is an alias to /src
import TimeChoose from '@/views/components/TimeChoose.vue'

export default {
  name: 'home',
  data(){
    return {
      show_time:false,
      data_title:[{
        name:'时间组件'
      },
      {
        name:'页面'
      }],
      data_name:'压力(kpa)',//用于存储表格的列名，比如压力(kpa)，展示在历史曲线页面标题
      station_name:'站点名',
    }
  },
  components:{
    TimeChoose
  },
  methods:{
    ChangePage: function (name) {
      if (name === '时间组件') {
        this.show_time = !this.show_time;
      }
      if (name === '页面') {
        this.$router.push({path: '/TopNav'})
      }
      
    }
  }
}
</script>
