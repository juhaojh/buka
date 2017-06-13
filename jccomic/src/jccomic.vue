<template>
  <div id="comic">
    <mt-header fixed title="">
        <span></span>    
      <mt-button  slot="right">
        <span class="right-btn"></span>
      </mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="主页">
        
        主页
      </mt-tab-item>
      <mt-tab-item id="分类">
        
        分类
      </mt-tab-item>
      <mt-tab-item id="我的">
       
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'jccomic',
  data(){
   return{
     selected:""
    } 
  }
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 15.625vw;
  }
  #comic{
    display: flex;
  }
  .mint-header{
    background: #fff;
    color: #bcbcbc;
  }
  .mint-header .headerbg{
    width: .1rem;
    border-radius: 100%;
  }
  .mint-header .headerbg img{
    width: 100%;
  }
  main{
    width: 100vw;
    overflow: auto;
  }

  main section h2{
    font-size: .1rem;
    border-left: 3px solid #ff9966;
    padding-left: .1rem;
    margin-left:5px;
  }
  main section ul{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap:wrap;
  }
   main section ul li{
    width: 45%;
    margin: 5px;
    list-style: none;
    background: #fff;
   }
   main section ul li p{
    font-size: .1rem;
   }
    main section ul li .tit{
      font-size: .06rem;
      color: #dcdcdc;
    }
    main section ul li img{
      width: 100%;
      height: 30vh;
    }
  .mint-swipe{
    width: 100%;
    height: 35vh;
    padding-top: .2rem;
  }
  .mint-swipe img{
    width: 100%;
  }
  .mint-header-button.is-left {
      background: url('http://m.buka.cn/static/img/logo_2x.png') no-repeat;
      background-size: 100%;
      width: 32px;
      height: 32px;
  }
  .mint-header-button.is-right .right-btn{
      background: url('http://m.buka.cn/static/img/research_2x.png') no-repeat;
      background-size: 100%;
      width: 26px;
      height: 26px;
      display: block;
  }
  .mint-tabbar.is-fixed{
    height: .6rem;
    flex-grow: 0;
  }
</style>
