<template>
  <div>
    <ul>
      <li v-for="(item,index) in data_title" @click="ChangePage(item.name)" :key="index">{{item.name}}</li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      data_title:[{
        name:'时间组件'
      },
      {
        name:'页面'
      }]
    }
  },
  methods:{
    ChangePage: function (name) {
      if (name === '时间组件') {
        this.$router.push({path: '/TimeChoose'})
      }
      if (name === '页面') {
        this.$router.push({path: '/TopNav'})
      }
      
    }
  }
}
</script>
