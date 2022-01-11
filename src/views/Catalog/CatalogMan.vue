<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog-wrap">
        <app-filter filter="m"></app-filter>
        <div class="catalog-wrapper">
          <app-sort :options="options" defaultValue="Сортировка"></app-sort>
          <div class="catalog-list">
            <app-products :products="filterProducts"></app-products>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appFilter from "../../components/Filter";
import appSort from "../../components/Sort";
import appProducts from "../../components/Products";
import {onBeforeMount,computed} from 'vue'
import {useStore} from "vuex";

export default {
  name: "CatalogMan",
  components: {
    'app-filter': appFilter,
    'app-sort': appSort,
    'app-products': appProducts
  },
  setup() {
    const store = useStore();
    const options = [
      {value: 'priceUp', name: 'Цена по возростанию'},
      {value: 'priceDown', name: 'Цена по убыванию'}
    ]

    onBeforeMount(() =>{
      store.getters.localStore
      store.dispatch('property');
    })

    return{
      filterProducts: computed(() => store.getters.filterResultMan),
      options
    }
  }
}
</script>

<style scoped>
.catalog{
  margin-bottom: 100px;
}
.catalog-wrap{
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-column-gap: 30px;
}
.catalog-list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 20px;
}
@media screen and (max-width: 992px) {
  .catalog-wrap{
    grid-template-columns: 250px 1fr;
  }
  .catalog-list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 767px){
  .catalog-wrap{
    display: block;
  }
}
@media screen and (max-width: 440px){
  .catalog-list{
    display: block;
  }
}
</style>