<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog-wrapper">
        <template v-if="isSearch">
        <div class="catalog-list">
            <app-products :products="isSearch"></app-products>
        </div>
        </template>
        <template v-else>
          <h1>Нечего не найдено!</h1>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import appProducts from "../components/Products/Products";
import {onBeforeMount,ref} from 'vue'
import {useStore} from "vuex";

export default {
  name: "Search",
  components: {
    'app-products': appProducts
  },
  setup() {
    const store = useStore();
    const isSearch = ref(null)

    onBeforeMount(() =>{
      store.getters.localStore
      store.dispatch('property');

      const parsedUrl = new URL(window.location.href)

      if (parsedUrl.searchParams.get('search')) {
        isSearch.value = store.getters.products.filter(text => text.name.toLowerCase().includes(parsedUrl.searchParams.get('search').toLowerCase()))
      }
    })

    return{
      isSearch
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 100px;
}
.catalog{
  margin-bottom: 100px;
}
.catalog-list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 20px;
}
@media screen and (max-width: 992px) {
  .catalog-list{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .catalog-list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 440px){
  .catalog-list{
    display: block;
  }
}
</style>