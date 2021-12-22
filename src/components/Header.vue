<template>
  <header class="header">
    <app-header-top></app-header-top>
    <div class="container">
      <div class="header-wrap">
        <div class="header-logo">
          <router-link to="/" class="header-logo__link">
            <img src="https://i.pinimg.com/originals/30/cb/31/30cb311ba48206cdb09f0a1fe7a3be79.jpg" alt="logo" title="logo" class="header-logo__img">
          </router-link>
        </div>
        <app-search></app-search>
        <div class="header-contacts">
          <a href="#" class="header-contacts__phone">+7 800 123-65-47</a>
        </div>
        <app-favorite></app-favorite>
        <app-basket :totalCount="totalCount"></app-basket>
      </div>
    </div>
    <app-nav></app-nav>
  </header>
</template>

<script>
import appSearch from './Search';
import appNav from './Nav'
import appBasket from '../components/BasketHeader'
import appFavorite from '../components/Favorite'
import appHeaderTop from '../components/HeaderMenu'
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
    'app-basket': appBasket,
    'app-favorite': appFavorite,
    'app-header-top': appHeaderTop
  }
}
</script>

<style scoped>
  .header{

  }
  .header-wrap{
    display: grid;
    grid-template-columns: 300px minmax(120px, 1fr) 200px 40px 40px;
    grid-column-gap: 20px;
    align-items: center;
    padding-top: 15px;
  }
  @media screen and (max-width: 992px) {
    .header-wrap{
      grid-template-columns: 70px minmax(120px, 1fr) 130px 40px 40px;
    }
  }
  @media screen and (max-width: 576px) {
    .header-wrap{
      grid-template-columns: 70px minmax(120px, 1fr) 40px 40px;
    }
  }
  @media screen and (max-width: 480px) {
    .header-wrap{
      grid-template-columns: 1fr 40px 40px 40px;
    }
  }
  .header-logo__img{
    display: block;
    width: 70px;
    height: 50px;
    object-fit: contain;
  }
  .header-contacts__phone{
    font-size: 16px;
    line-height: 20px;
    color: #000;
    font-weight: bold;
  }
  @media screen and (max-width: 576px){
    .header-contacts{
      display: none;
    }
  }
  .header-contacts{
    text-align: right;
  }
</style>