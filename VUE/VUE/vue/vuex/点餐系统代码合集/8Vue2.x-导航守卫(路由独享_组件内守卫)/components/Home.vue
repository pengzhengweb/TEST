<template>
  <div>
    <h1>Home</h1>
    <button @click="goToMenu" class="btn btn-success">Let's order!</button>
  </div>
</template>
<script>
  export default{
    methods:{
      goToMenu(){
        // 跳转到上一次浏览的页面
        // this.$router.go(-1)

        // 指定跳转的地址
        // this.$router.replace('/menu')

        // 指定跳转路由的名字下
        // this.$router.replace({name:'menuLink'})

        // 通过push进行跳转
        // this.$router.push('/menu')
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>
