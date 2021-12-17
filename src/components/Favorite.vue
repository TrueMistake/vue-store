<template>
  <router-link to="/favorites" class="header-favorites">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1016 5.53504C17.0625 3.81238 13.9336 4.05848 12 6.06238C10.0313 4.05848 6.90237 3.81238 4.86331 5.53504C2.22659 7.74988 2.61331 11.371 4.51174 13.3046L10.6641 19.5975C11.0157 19.9491 11.4727 20.16 12 20.16C12.4922 20.16 12.9492 19.9491 13.3008 19.5975L19.4883 13.3046C21.3516 11.371 21.7383 7.74988 19.1016 5.53504ZM18.2578 12.1093L12.1055 18.4022C12.0352 18.4725 11.9649 18.4725 11.8594 18.4022L5.70706 12.1093C4.40628 10.8085 4.16018 8.34754 5.95315 6.83582C7.32424 5.67566 9.43362 5.85145 10.7696 7.18738L12 8.45301L13.2305 7.18738C14.5313 5.85145 16.6407 5.67566 18.0117 6.80066C19.8047 8.34754 19.5586 10.8085 18.2578 12.1093Z" fill="#353642"/>
    </svg>
    <span v-if="favorites.length" class="header-favorites__count">{{favorites.length}}</span>
  </router-link>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: "Favorite",
  setup () {
    const store = useStore();
    return{
      favorites: computed(() => store.getters.products.filter(item => item.favorite))
    }
  }
}
</script>

<style scoped>
  .header-favorites{
    position: relative;
    text-align: center;
  }
  .header-favorites__count{
    position: absolute;
    top: 10px;
    right: -5px;
    background: #000;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>