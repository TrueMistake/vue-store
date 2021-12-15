<template>
  <div class="detail">
      <div class="container">
        <router-link class="detail-back" to="/catalog" tag="a" exact>Back</router-link>
        <div class="detail-wrap">
          <template v-if="changeProduct.length">
            <div class="detail-left">
              <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: changeThumbsSwiper }" class="mySwiper2">
                <swiper-slide v-for="(img, key) in changeProduct[0].imgOther" :key="key">
                  <img class="detail-img" :src="img"/>
                </swiper-slide>
              </swiper>
              <swiper @swiper="setChangeThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper">
                <swiper-slide v-for="(img, key) in changeProduct[0].imgOther" :key="key">
                  <img class="detail-left__thumb" :src="img"/>
                </swiper-slide>
              </swiper>
            </div>
            <div class="detail-right">
              <div class="detail-right__article">Артикул: {{changeProduct[0].article}}</div>
              <div class="detail-right__name">{{changeProduct[0].name}}</div>
              <div class="detail-right__price">{{discharge(changeProduct[0].price)}} ₽</div>
              <div class="detail-right__colors">
                <label class="detail-right__color" v-for="(el, colorKey) in changeProduct[0].colors" :key="colorKey" @click="changeColor(el.id)" :class="[changeProduct[0].id === +el.id ? 'active' : '']">
                  <input type="radio" name="colors" v-model="colors[colorKey]" :value="el.id">
                  <span :style="{backgroundColor: el.color}"></span>
                </label>
              </div>
              <div class="detail-right__sizes">
                <div class="detail-right__size" v-for="el of product.sizes" :key="el.id">{{el}}</div>
              </div>
              <div class="detail-right__buy" @click="addBasket(changeProduct[0], 1)">
                Купить
                <template v-for="(counter, key) in arrToBuy" :key="key">
                  <span v-if="counter.id === changeProduct[0].id">{{counter.buy}}</span>
                </template>
              </div>
              <router-link tag="a" to="/basket" class="detail-right__basket-link">
                <div class="detail-right__basket">Перейти в корзину</div>
              </router-link>
              <div class="detail-right__property">
                <div class="detail-right__property-title">Характеристики</div>
                <div class="detail-right__property-text"><span>Основной материал:</span> {{changeProduct[0].specifications}}</div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="detail-left">
              <swiper :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
                <swiper-slide v-for="(img, key) in product.imgOther" :key="key">
                  <img class="detail-img" :src="img" :alt="product.name" :title="product.name"/>
                </swiper-slide>
              </swiper>
              <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper">
                <swiper-slide v-for="(img, key) in product.imgOther" :key="key">
                  <img class="detail-left__thumb" :src="img" :alt="product.name" :title="product.name"/>
                </swiper-slide>
              </swiper>
            </div>
            <div class="detail-right">
              <div class="detail-right__article">Артикул: {{product.article}}</div>
              <div class="detail-right__name">{{product.name}}</div>
              <div class="detail-right__price">{{discharge(product.price)}} ₽</div>
              <div class="detail-right__colors">
                <label class="detail-right__color" v-for="(el, colorKey) in product.colors" :key="colorKey" @click="changeColor(el.id)" :class="[product.id === el.id ? 'active' : '']">
                  <input type="radio" name="colors" v-model="colors[colorKey]" :value="el.id">
                  <span :style="{backgroundColor: `#${el.color}`}"></span>
                </label>
              </div>
              <div class="detail-right__sizes">
                <div class="detail-right__size" v-for="el of product.sizes" :key="el.id">{{el}}</div>
              </div>
              <div class="detail-right__buy" @click="addBasket(product, 1)">
                Купить
                <template v-for="(counter, key) in arrToBuy" :key="key">
                  <span v-if="counter.id === product.id">{{counter.buy}}</span>
                </template>
              </div>
              <router-link tag="a" to="/basket" class="detail-right__basket-link">
                <div class="detail-right__basket">Перейти в корзину</div>
              </router-link>
              <div class="detail-right__property">
                <div class="detail-right__property-title">Характеристики</div>
                <div class="detail-right__property-text"><span>Основной материал:</span> {{product.specifications}}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.min.css';
import "swiper/modules/navigation/navigation.min.css"
import "swiper/modules/pagination/pagination.min.css"

import SwiperCore, {FreeMode,Navigation,Thumbs} from 'swiper';
SwiperCore.use([FreeMode,Navigation,Thumbs]);

import { computed, ref, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "CatalogDetail",
  props: ['id'],
  setup(props) {
    const store = useStore();
    const thumbsSwiper = ref(null);
    const changeThumbsSwiper = ref(null);
    const changeProduct = ref([]);
    const colors = ref({}).value;

    onBeforeMount(() => {
      store.getters.localStore;
    })

    const addBasket = (item, count) => {
      store.dispatch('addBasket',{id: item.id, count: count})
    }

    const discharge = (price) =>  {
      return price.toLocaleString()
    }

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }
    const setChangeThumbsSwiper = (swiper) => {
      changeThumbsSwiper.value = swiper;
    }
    const changeColor = (id) => {
      changeProduct.value = [];
      changeProduct.value.push(store.getters.productDetailID(id));
    }

    return{
      addBasket,
      discharge,
      colors,
      changeProduct,
      setThumbsSwiper,
      setChangeThumbsSwiper,
      changeThumbsSwiper,
      changeColor,
      product: computed(() => store.getters.productDetailID(props.id)),
      arrToBuy: computed(() => store.getters.arrToBuy),
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style scoped>
  .detail{
    margin: 20px 0 100px 0;
  }
  .detail-wrap{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    margin-top: 50px;
  }
  @media screen and (max-width: 767px){
    .detail-wrap{
      grid-template-columns:  1fr;
      grid-gap: 20px;
    }
  }
  .detail-left{
    overflow: hidden;
  }
  @media screen and (max-width: 767px){
    .detail-left{
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
  }
  .detail-img{
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  .detail-left__thumb{
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
  }

  .detail-right{
  }
  @media screen and (max-width: 767px){
    .detail-right{
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
  }
  .detail-right__article{
    font-size: 14px;
    margin-bottom: 15px;
  }
  .detail-right__name{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail-right__price{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .detail-right__colors{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .detail-right__color{
    position: relative;
  }
  .detail-right__color.active span:before{
    border: 1px solid #000;
  }
  .detail-right__color input{
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
  .detail-right__color span{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    margin-right: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    display: block;
  }
  .detail-right__color span:before{
    position: absolute;
    content: '';
    top: -2px;
    left: -2px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid transparent;
  }
  .detail-right__color input:checked + span:before{
    border: 1px solid #000;
  }
  .detail-right__sizes{
    display: grid;
    grid-template-columns: repeat(6, minmax(10px, max-content));
    grid-column-gap: 5px;
    margin: 10px 0;
  }
  .detail-right__buy{
    max-width: 200px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #242857;
    cursor: pointer;
    position: relative;
    transition: all .3s linear;
  }
  .detail-right__buy:hover{
    background: #B4BAFD;
    box-shadow: 0 0 10px #B4BAFD;
  }
  .detail-right__basket-link {
    display: inline-block;
    margin-top: 20px;
  }
  .detail-right__basket{
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    color: #242857;
    border: 1px solid #242857;
    display: inline-block;
    position: relative;
    transition: background .3s linear;
  }
  .detail-right__basket:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #242857;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all .3s ease;
  }
  .detail-right__basket:hover{
    color: #fff;
  }
  .detail-right__basket:hover:before{
    width: 100%;
    left: 0;
  }
  .detail-back{
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    color: #242857;
    border: 1px solid #242857;
    display: inline-block;
    position: relative;
    transition: background .3s linear;
  }
  .detail-back:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #242857;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all .3s ease;
  }
  .detail-back:hover{
    color: #fff;
  }
  .detail-back:hover:before{
    width: 100%;
    left: 0;
  }
  .detail-right__buy span{
    color: #000;
    font-size: 16px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #fff;
  }
  .detail-right__property{
    margin-top: 40px;
    border-top: 1px solid #dedede;
    padding-top: 20px;
  }
  .detail-right__property-title{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail-right__property-text span{
    font-weight: bold;
  }
</style>