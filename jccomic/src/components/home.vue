<template>
 
    <main>
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="https://manhua.qpic.cn/operation/0/09_10_28_60ff57216aa44808fe8f04256bc86704_1496975313490.jpg/0" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://manhua.qpic.cn/operation/0/12_11_36_10555c36b3cc2337b9170a6cb5a6b683_1497238594225.jpg/0" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://manhua.qpic.cn/operation/0/12_11_04_5d9085437b1e5981613a69dc720bb2f7_1497236682870.jpg/0" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://manhua.qpic.cn/operation/0/12_11_05_2fe671238ef1665a2e000bd769844639_1497236718355.jpg/0" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="https://manhua.qpic.cn/operation/0/12_11_42_43f25d79796dbea2602e05725cb19c36_1497238974315.jpg/0" alt=""></mt-swipe-item>
      </mt-swipe>
      <section>
      <h2>每周推荐</h2>
          <ul>
            <li v-for="item in arr">
              <img :src="item.cover_url"  alt=""> 
              <p> {{ item.title }}</p>
              <p class="tit">{{ item.short_desc }}</p>
            </li>          
          </ul>
      </section>
      <section>
      <h2>VIP特权</h2>
          <ul>
            <li v-for="item in list">
              <img :src="item.cover_url"  alt=""> 
              <p> {{ item.title }}</p>
              <p class="tit">{{ item.short_desc }}</p>
            </li>          
          </ul>
      </section>
    </main>
  
</template>

<script>
import Vue from "vue"
export default {
  name: 'home',
  data () {
    return {
      msg: '',
      arr:"",
      list:""
    }
  },
  created(){
      // 每周推荐 http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=910&t=1497313867284&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr = data
        console.log(this.arr)
      }),
      //vip http://m.ac.qq.com/Recommend/get/?num=6&adpos=1242&pool_id=204&t=1497313867286&
      Vue.axios.get("http://m.ac.qq.com/Recommend/get/?num=6&adpos=1242&pool_id=204&t=1497313867286&").then((res)=> {
        return res.data.list
      }).then((data)=> {
        this.arr = data
        console.log(this.arr)
      })
    },
}
</script>

<style scoped>

  
</style>
