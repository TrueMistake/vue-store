<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="header-logo">
          <router-link to="/" class="header-logo__link">
            <img src="https://i.pinimg.com/originals/30/cb/31/30cb311ba48206cdb09f0a1fe7a3be79.jpg" alt="" class="header-logo__img">
          </router-link>
        </div>
        <app-search></app-search>
        <div class="header-contacts">
          <a href="#" class="header-contacts__phone">+7 800 123-65-47</a>
        </div>
        <app-basket :totalCount="totalCount"></app-basket>
      </div>
      <app-nav></app-nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>
import appSearch from './Search';
import appNav from './Nav'
import appBasket from '../components/BasketHeader'
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "Header",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.getters.localStor
    });

    return{
      totalCount: computed(() => store.getters.totalCount),
    }
  },
  components: {
    'app-search': appSearch,
    'app-nav': appNav,
    'app-basket': appBasket
  }
}
</script>

<style scoped>
  .header{
    padding: 20px 0;
  }
  .header-wrap{
    display: grid;
    grid-template-columns: 100px 1fr 200px 100px;
    grid-column-gap: 20px;
    align-items: center;
  }
  .header-logo__img{
    display: block;
    width: 70px;
    height: auto;
    object-fit: contain;
  }
  .header-contacts__phone{
    font-size: 16px;
    line-height: 20px;
    color: #000;
  }

  .header-contacts{
    text-align: right;
  }
</style>