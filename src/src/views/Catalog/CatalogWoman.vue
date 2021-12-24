<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog-wrap">
        <app-filter filter="w"></app-filter>
        <div class="catalog-wrapper">
          <app-sort></app-sort>
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
  name: "CatalogWoman",
  components: {
    'app-filter': appFilter,
    'app-sort': appSort,
    'app-products': appProducts
  },
  setup() {
    const store = useStore();

    onBeforeMount(() =>{
      store.getters.localStore
    })

    return{
      filterProducts: computed(() => store.getters.filterResultWoman)
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