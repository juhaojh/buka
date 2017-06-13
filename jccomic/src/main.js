// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Header ,Button ,Swipe, SwipeItem ,Tabbar, TabItem,TabContainer, TabContainerItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import Jccomic from './jccomic'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Jccomic/>',
  components: { Jccomic , Header ,Button ,Swipe, SwipeItem ,Tabbar, TabItem,TabContainer, TabContainerItem}
})
