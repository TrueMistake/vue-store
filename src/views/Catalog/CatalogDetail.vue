<template>
  <div class="detail">
      <div class="container">
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
              <div class="detail-right__name">
                {{changeProduct[0].name}}
                <div class="detail-right__favorite">
                  <svg v-if="changeProduct[0].favorite === false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1016 5.53504C17.0625 3.81238 13.9336 4.05848 12 6.06238C10.0313 4.05848 6.90237 3.81238 4.86331 5.53504C2.22659 7.74988 2.61331 11.371 4.51174 13.3046L10.6641 19.5975C11.0157 19.9491 11.4727 20.16 12 20.16C12.4922 20.16 12.9492 19.9491 13.3008 19.5975L19.4883 13.3046C21.3516 11.371 21.7383 7.74988 19.1016 5.53504ZM18.2578 12.1093L12.1055 18.4022C12.0352 18.4725 11.9649 18.4725 11.8594 18.4022L5.70706 12.1093C4.40628 10.8085 4.16018 8.34754 5.95315 6.83582C7.32424 5.67566 9.43362 5.85145 10.7696 7.18738L12 8.45301L13.2305 7.18738C14.5313 5.85145 16.6407 5.67566 18.0117 6.80066C19.8047 8.34754 19.5586 10.8085 18.2578 12.1093Z" fill="#353642"/>
                  </svg>
                  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2422 5.46479C17.3086 3.81244 14.461 4.12885 12.668 5.95698L12 6.6601L11.2969 5.95698C9.53911 4.12885 6.65629 3.81244 4.7227 5.46479C2.50786 7.36323 2.40239 10.7382 4.37114 12.7773L11.1914 19.8085C11.6133 20.2656 12.3516 20.2656 12.7735 19.8085L19.5938 12.7773C21.5625 10.7382 21.4571 7.36323 19.2422 5.46479Z" fill="#353642"/>
                  </svg>
                </div>
              </div>
              <div class="detail-right__price">{{discharge(changeProduct[0].price)}} ₽</div>
              <div class="detail-right__colors">
                Цвета:
                <label class="detail-right__color" v-for="(el, colorKey) in changeProduct[0].colors" :key="colorKey" @click="changeColor(el.id)" :class="[changeProduct[0].id === +el.id ? 'active' : '']">
                  <input type="radio" name="colors" v-model="colors[colorKey]" :value="el.id">
                  <span :style="{backgroundColor: `#${el.color}`}"></span>
                </label>
              </div>
              <div class="detail-right__sizes">
                Размеры:
                <label class="detail-right__size" v-for="el of product.sizes" :key="el.id">
                  <input type="radio" name="sizes" v-model="sizes" :value="el">
                  <span>{{el}}</span>
                </label>
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
              <div class="detail-right__name">
                {{product.name}}
                <div class="detail-right__favorite" @click.stop.prevent="addFavorite(product.id)">
                  <svg v-if="favorite.filter(elem => product.id === elem).length === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1016 5.53504C17.0625 3.81238 13.9336 4.05848 12 6.06238C10.0313 4.05848 6.90237 3.81238 4.86331 5.53504C2.22659 7.74988 2.61331 11.371 4.51174 13.3046L10.6641 19.5975C11.0157 19.9491 11.4727 20.16 12 20.16C12.4922 20.16 12.9492 19.9491 13.3008 19.5975L19.4883 13.3046C21.3516 11.371 21.7383 7.74988 19.1016 5.53504ZM18.2578 12.1093L12.1055 18.4022C12.0352 18.4725 11.9649 18.4725 11.8594 18.4022L5.70706 12.1093C4.40628 10.8085 4.16018 8.34754 5.95315 6.83582C7.32424 5.67566 9.43362 5.85145 10.7696 7.18738L12 8.45301L13.2305 7.18738C14.5313 5.85145 16.6407 5.67566 18.0117 6.80066C19.8047 8.34754 19.5586 10.8085 18.2578 12.1093Z" fill="#353642"/>
                  </svg>
                  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2422 5.46479C17.3086 3.81244 14.461 4.12885 12.668 5.95698L12 6.6601L11.2969 5.95698C9.53911 4.12885 6.65629 3.81244 4.7227 5.46479C2.50786 7.36323 2.40239 10.7382 4.37114 12.7773L11.1914 19.8085C11.6133 20.2656 12.3516 20.2656 12.7735 19.8085L19.5938 12.7773C21.5625 10.7382 21.4571 7.36323 19.2422 5.46479Z" fill="#353642"/>
                  </svg>
                </div>
              </div>
              <div class="detail-right__price">{{discharge(product.price)}} ₽</div>
              <div class="detail-right__colors">
                Цвета:
                <label class="detail-right__color" v-for="(el, colorKey) in product.colors" :key="colorKey" @click="changeColor(el.id)" :class="[product.id === el.id ? 'active' : '']">
                  <input type="radio" name="colors" v-model="colors[colorKey]" :value="el.id">
                  <span :style="{backgroundColor: `#${el.color}`}"></span>
                </label>
              </div>
              <div class="detail-right__sizes">
                Размеры:
                <label class="detail-right__size" v-for="el of product.sizes" :key="el.id">
                  <input type="radio" name="sizes" v-model="sizes" :value="el">
                  <span>{{el}}</span>
                </label>
              </div>
              <div class="detail-right__buy" :class="{'_disabled': !sizes.length}" @click="addBasket(product, 1)">
                Купить
                <template v-for="(counter, key) in arrToBuy" :key="key">
                  <span v-if="counter.id === product.id && counter.size === sizes">{{counter.buy}}</span>
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
    const sizes = ref('');

    onBeforeMount(() => {
      store.getters.localStore;
    })

    const addBasket = (item, count) => {
      sizes.value.length ? store.dispatch('addBasket',{id: item.id, count: count, sizes: sizes.value}) : false;
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

    const addFavorite = id => {
      store.dispatch('addFavorite', id)
    }

    return{
      addFavorite,
      addBasket,
      discharge,
      sizes,
      colors,
      changeProduct,
      thumbsSwiper,
      setThumbsSwiper,
      setChangeThumbsSwiper,
      changeThumbsSwiper,
      changeColor,
      product: computed(() => store.getters.productDetailID(props.id)),
      arrToBuy: computed(() => store.getters.arrToBuy),
      favorite: computed(() => store.getters.addFavorite)
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
    grid-template-columns: minmax(300px, 555px) 1fr;
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
    display: block;
  }
  .detail-left__thumb{
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
  }
  .swiper-thumbs{
    margin-top: 20px;
  }
  .swiper-slide.swiper-slide-thumb-active{
    border: 1px solid #f8694a;
  }
  .mySwiper{
    margin-top: 20px;
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
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-column-gap: 15px;
    align-self: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .detail-right__favorite{
    cursor: pointer;
  }
  .detail-right__price{
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .detail-right__colors{
    display: grid;
    grid-template-columns: repeat(6, minmax(24px, max-content));
    grid-column-gap: 10px;
    margin-bottom: 20px;
  }
  .detail-right__color{
    position: relative;
    display: block;
  }
  .detail-right__color.active span:before{
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 3px #f8694a;
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
    border: 1px solid #30323A;
  }
  .detail-right__color input:checked + span:before{
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 3px #f8694a;
    border: 1px solid transparent;
  }
  .detail-right__color.active span{

  }
  .detail-right__sizes{
    display: grid;
    grid-template-columns: repeat(6, minmax(24px, max-content));
    grid-column-gap: 10px;
    margin: 10px 0 30px 0;
    position: relative;
  }
  .detail-right__size{

  }
  .detail-right__size input{
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
  .detail-right__size span{
    position: relative;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid #DADADA;
    cursor: pointer;
  }
  .detail-right__size span:before{
    position: absolute;
    content: '';
    top: -2px;
    left: -2px;
    width: 22px;
    height: 22px;
  }
  .detail-right__sizes input:checked + span{
    color: #F8694A;
    border-color: #F8694A;
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
    background: #F8694A;
    cursor: pointer;
    position: relative;
  }
  .detail-right__buy:hover{
    background: #30323A;
  }
  .detail-right__buy span{
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
  .detail-right__buy._disabled{
    color: #30323A;
    background: #eeeeef;
    cursor: default;
  }
  .detail-right__buy._disabled:hover{
    color: #30323A;
    background: #eeeeef;
  }
  .detail-right__buy._disabled span{
    color: #30323A;
  }
  .detail-right__basket-link {
    display: inline-block;
    margin-top: 20px;
  }
  .detail-right__basket{
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    color: #30323A;
    border: 1px solid #30323A;
    display: inline-block;
    position: relative;
  }
  .detail-right__basket:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #F8694A;
    width: 0%;
    height: 100%;
    z-index: -1;
  }
  .detail-right__basket:hover{
    color: #fff;
    border: 1px solid #F8694A;
  }
  .detail-right__basket:hover:before{
    width: 100%;
    left: 0;
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
  .detail-right__property-text{
    font-size: 16px;
  }
  .detail-right__property-text span{
    font-weight: bold;
    font-size: 16px;
  }
</style>