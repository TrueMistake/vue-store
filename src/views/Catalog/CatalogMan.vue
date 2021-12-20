<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog-wrap">
        <app-filter></app-filter>
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
  name: "CatalogMan",
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
      filterProducts: computed(() => store.getters.sliderMan)
    }
  }
}
</script>

<style scoped>

</style>