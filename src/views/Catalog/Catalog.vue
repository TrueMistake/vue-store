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
import appFilter from '../../components/Filter'
import appSort from '../../components/Sort'
import appProducts from '../../components/Products'
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: "Catalog",
  components: {
    'app-filter': appFilter,
    'app-sort': appSort,
    'app-products': appProducts
  },
  setup() {
    const store = useStore();

    return{
      filterProducts: computed(() => store.getters.filterResult)
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
</style>