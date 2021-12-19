<template>
  <div class="favorites">
    <div class="container">
      <h1>Избранное</h1>
      <template v-if="favorites.length">
        <div class="favorites-wrap">
          <app-products title="ИЗБРАННОЕ" :products="favorites"></app-products>
        </div>
      </template>
      <template v-else>
        <p class="favorites-empty">Ваше избранное пустое</p>
      </template>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import appProducts from '../components/Products';

export default {
  name: "Favorites",
  setup(){
    const store = useStore();

    return{
      favorites: computed(() => store.getters.products.filter((item) => {
        for (let i = 0; i < store.getters.addFavorite.length; i++) {
          if (item.id === store.getters.addFavorite[i]) {
            return item
          }
        }
      }))
    }
  },
  components: {
    'app-products': appProducts
  },
}
</script>

<style scoped>
  .favorites{
    margin-bottom: 100px;
  }
  .favorites h1{
    margin-bottom: 40px;
  }
  .favorites-wrap{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .favorites-empty{
    font-size: 20px;
    line-height: 24px;
    color: #000;
  }
</style>