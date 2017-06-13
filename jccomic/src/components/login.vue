<template>
   <div class="login">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <router-link><mt-button icon="" slot="right">快速注册</mt-button></router-link>
    </mt-header>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="danger">登录</mt-button>
  </div>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      arr:"",
      list:"",
      phone:"",
      password:""

    }
  },
  methods:{
    handleClose(){}
  }
 }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .login{
    width: 100%;
    overflow: auto;
    height:100vh;
  }


  
</style>
