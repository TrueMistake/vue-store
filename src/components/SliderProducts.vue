<template>
  <div class="index-slider">
    <div class="index-slider__h2">БЕСТСЕЛЛЕРЫ</div>
    <swiper :slidesPerView="4" :spaceBetween="30" :pagination='{"clickable": true}' class="mySwiper slider-product">
      <swiper-slide v-for="item of products" :key="item.id">
        <router-link :to="'/catalog/' + item.id" tag="a" class="product-item">
          <img :src="item.img" alt="" class="product-item__img">
          <div class="product-item__body">
            <div class="product-item__title">{{item.name}}</div>
            <div class="product-item__colors">
              <div class="product-item__color" v-for="el of item.colors" :key="el.id" :style="{background: el.color}"></div>
            </div>
            <div class="product-item__sizes">
              <div class="product-item__size"></div>
            </div>
            <div class="product-item__bottom">
              <div class="product-item__price">{{item.price}} ₽</div>
              <div class="product-item__oldprice"></div>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation.min.css"
import "swiper/modules/pagination/pagination.min.css"

import SwiperCore, {Navigation} from 'swiper';
SwiperCore.use([Navigation]);

import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  name: "SliderProducts",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();

    return{
      products: computed(() => store.getters.products)
    }
  }
}
</script>

<style scoped>
  .index-slider{
    margin: 70px 0;
  }
  .index-slider__h2{
    font-size: 30px;
    line-height: 34px;
    color: #000;
    margin-bottom: 30px;
  }
  .product-item{
    display: block;
    width: 100%;
  }
  .product-item__img{
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  .product-item__body{
    padding: 10px;
  }
  .product-item__title{
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
    color: #000;
  }
  .product-item__colors{
    display: grid;
    grid-template-columns: repeat(6, 20px);
    grid-column-gap: 10px;
    margin: 10px 0;
  }
  .product-item__color{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    position: relative;
    border: 1px solid #000;
  }
  .product-item__color:before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .product-item__bottom{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
  .product-item__price{
    font-size: 20px;
    line-height: 24px;
    color: #000;
    font-weight: bold;
  }
</style>