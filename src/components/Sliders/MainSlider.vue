<template>
  <swiper class="mySwiper">
    <swiper-slide v-for="(item, key) of slider" :key="key">
      <router-link :to="item.link" tag="a" exact>
        <img class="main-slider" :src="item.url" alt="">
      </router-link>
    </swiper-slide>

  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation.min.css"
import "swiper/modules/pagination/pagination.min.css"

import SwiperCore, {Navigation} from 'swiper';
SwiperCore.use([Navigation]);

import {computed} from 'vue'
import {useStore} from 'vuex';

export default {
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    return{
      slider: computed(() => store.getters.mainSlider)
    }
  }
}
</script>

<style scoped>
  .mySwiper{
    display: block;
  }
  .main-slider{
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
</style>