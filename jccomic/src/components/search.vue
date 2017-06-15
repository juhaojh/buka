<template>
    <div id="serbox">
      <header>
        <router-link to="/" slot="left"><mt-button  icon="back">返回</mt-button>
        </router-link>
      <input type="text" placeholder="热门">
      <mt-button icon="" slot="right">搜索</mt-button>
      </header>
      <main>
        <h1>热门推荐</h1>
        <ul>
          <li v-for="item in arr">
          <router-link :to="{ name:'xtx', params:{id:item.title} }"><span>{{item.title}}</span></router-link>
          </li>
        </ul>
      </main>
      
    </div>
</template>

<script>
import Vue from "vue"
export default {
  name: 'search',
  data () {
    return {
      value:"",
      arr:"",
    }
  },
  created(){
    var _this = this;
    Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        _this.arr = data
       
      })
  }
 }
</script>

<style scoped>
  *{
      padding: 0;
      margin: 0;
  }
  #serbox{
    width: 100vw;
    overflow: auto;
    height:100%;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #b8bbbf;
    font-size: 16px;
  }
  input{
    height: 33px;
    border-radius: 5px
  }
  .mint-button::after{
    background-color: #ccc!important;
  }
 .mint-button--default{
  background-color: #b8bbbf;
 }
 main{
  min-height: 80vh;
 }
 h1{
  font-size: 20px;
  color: #add;
 }
 ul{
  list-style: none;
  height: 80vh;
 }
 li{
  float: left;
  font-size: 16px;
  margin: 10px 15px;
  
 }
 span{
  color: #999;
  display: block;
  height: 25px;
  border: 5px solid #ccc;
  border-radius: 10px;
 }
  a{
    text-decoration: none;
  }
</style>
