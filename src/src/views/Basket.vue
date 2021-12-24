<template>
  <div class="basket">
    <div class="container">
      <h1>Мои товары ({{totalCount}})</h1>
      <div class="basket-wrap" v-if="arrToBuy.length">
        <div class="basket-list">
          <div class="basket-item" v-for="(item, key) in arrToBuy" :key="key">
            <router-link tag="a" :to="'/catalog/' + item.id" exact class="basket-item__link">
              <img :src="item.img" alt="" class="basket-item__img">
            </router-link>
            <div class="basket-item__name">
              <div>{{item.name}}</div>
              Размер: <strong>{{item.size}}</strong>
            </div>
            <div class="basket-item__num">
              <div @click="remoteBasket(item, 1)" class="basket-item__num-minus">-</div>
              <input type="number" @change="changeCount(item.id)" :value="item.buy">
              <div @click="addBasket(item, 1)" class="basket-item__num-plus">+</div>
            </div>
            <div class="basket-item__block">
              <div class="basket-item__price">за шт. <span>{{discharge(item.price)}} ₽.</span></div>
              <div class="basket-item__total">общая: <span>{{discharge(item.price * item.buy)}} ₽.</span></div>
            </div>
            <div class="basket-item__remove" @click="removeProduct(key)"></div>
          </div>
          <span class="basket-clear" @click="clearBasket()">Очистить корзину</span>
        </div>
        <div class="basket-finish">
          <div class="basket-counts">Количество: <span>{{totalCount}} шт.</span></div>
          <div class="basket-total">Итого: <span>{{discharge(totalPrice)}} ₽.</span></div>
          <router-link tag="a" to="/order" class="basket-link">
            <div class="basket-link__order">Оформить</div>
          </router-link>
        </div>
      </div>
      <div class="empty" v-else>
        <h1>Корзина пуста</h1>
        <div class="basket-back">
          <router-link class="basket-back__link" to="/">Главная</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { computed, onBeforeMount } from 'vue'

export default {
  name: "Basket",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.getters.localStore
    })

    const addBasket = (item, count) => {
      store.dispatch('addBasket', {id: item.id, count: +count})
    }
    const remoteBasket = (item, count) => {
      store.dispatch('remoteBasket', {id: item.id, count: +count})
    }
    const changeCount = (id) => {
      store.dispatch('changeCount',{id:id, count:event.target.value})
    }
    const clearBasket = () => {
      store.dispatch('clearBasket')
    }
    const discharge = (price) =>  {
      return price.toLocaleString()
    }
    const removeProduct = (key) => {
      store.dispatch('removeProduct', key)
    }
    return {
      removeProduct,
      arrToBuy: computed(() => store.getters.arrToBuy),
      totalCount: computed(() => store.getters.totalCount),
      totalPrice: computed(() => store.getters.totalPrice),
      changeCount,
      remoteBasket,
      addBasket,
      clearBasket,
      discharge
    }
  }
}
</script>

<style scoped>
  .basket-wrap{
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-column-gap: 20px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 767px){
    .basket-wrap{
      grid-template-columns: 1fr;
      grid-row-gap: 50px;
    }
  }
  h1{
    margin-bottom: 20px;
  }
  .basket-list{
    width: 100%;
  }
  @media screen and (max-width: 767px){
    .basket-list{
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
  .basket-item{
    margin-bottom: 15px;
    border: 1px solid #dedede;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 52px minmax(100px, 300px) 90px  1fr 20px;
    grid-column-gap: 20px;
    align-items: center;
    padding: 0 20px 0 0;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  @media screen and (max-width: 1200px) {
    .basket-item{
      grid-template-columns: 52px minmax(100px, 150px) 90px  1fr 20px;
      grid-column-gap: 10px;
    }
  }
  @media screen and (max-width: 992px) {
    .basket-item{
      grid-template-columns: 52px 1fr 90px  140px 20px;
      grid-column-gap: 10px;
    }
  }
  @media screen and (max-width: 850px) {
    .basket-item{
      align-items: baseline;
      grid-template-columns: 52px 1fr 150px 20px;
      grid-template-areas:
      "img name price remove"
      "img num price remove";
    }
  }
  @media screen and (max-width: 440px) {
    .basket-item{
      align-items: baseline;
      grid-template-columns: 100px 1fr 20px;
      grid-column-gap: 20px;
      grid-template-areas:
      "img name remove"
      "img num remove"
      "img price remove";
    }
  }
  @media screen and (max-width: 850px){
    .basket-item__link{
      grid-area: img;
    }
  }
  .basket-item__img{
    width: 52px;
    height: auto;
    object-fit: contain;
    display: block;
  }
  @media screen and (max-width: 440px){
    .basket-item__img{
      width: 100px;
    }
  }

  @media screen and (max-width: 850px){
    .basket-item__name{
      grid-area: name;
      align-self: center;
    }
  }
  @media screen and (max-width: 440px){
    .basket-item__name{
      margin-bottom: 10px;
    }
  }
  .basket-item__num{
    display: grid;
    grid-template-columns: 20px 30px 20px;
    grid-column-gap: 10px;
    align-items: center;
  }
  @media screen and (max-width: 850px){
    .basket-item__num{
      grid-area: num;
    }
  }
  @media screen and (max-width: 440px){
    .basket-item__num{
      margin-bottom: 10px;
    }
  }
  .basket-item__num input{
    width: 30px;
    padding: 5px 0px;
    text-align: center;
    border: none;
  }
  .basket-item__num input{
    -moz-appearance:textfield;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  .basket-item__num input:focus{
    -moz-appearance:textfield;
    box-shadow: 0px 0px 0px 1px #f8694a inset, 0px 0px 0px 0px #f8694a;
    outline: none;
  }
  .basket-item__num input::-webkit-outer-spin-button{
    -webkit-appearance: none;
  }
  .basket-item__num input::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
  .basket-item__num-plus{
    cursor: pointer;
    width: 20px;
    text-align: center;
    font-weight: bold;
  }
  .basket-item__num-minus{
    cursor: pointer;
    width: 20px;
    text-align: center;
    font-weight: bold;
  }
  .basket-item__block{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 50px;
  }
  @media screen and (max-width: 850px){
    .basket-item__block{
      grid-area: price;
      align-self: center;
    }
  }
  @media screen and (max-width: 1200px){
    .basket-item__block{
      grid-column-gap: 10px;
    }
  }
  @media screen and (max-width: 992px){
    .basket-item__block{
      grid-template-columns: 1fr;
      grid-column-gap: 0;
    }
  }
  .basket-item__price span{
    font-weight: bold;
  }
  .basket-item__remove{
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 6px transparent;
  }
  @media screen and (max-width: 850px){
    .basket-item__remove{
      grid-area: remove;
      align-self: center;
    }
  }
  .basket-item__remove:hover{
    box-shadow: 0px 0px 0px 1px #f8694a inset, 0px 0px 0px 0px #f8694a;
  }
  .basket-item__remove::before{
    position: absolute;
    content: '';
    top: 9px;
    left: 0;
    background: #F8694A;
    width: 20px;
    height: 2px;
    transform: rotate(45deg);
  }
  .basket-item__remove:after{
    position: absolute;
    content: '';
    top: 9px;
    left: 0;
    background: #F8694A;
    width: 20px;
    height: 2px;
    transform: rotate(-45deg);
  }
  .basket-item__total span{
    font-weight: bold;
    color: #F8694A;
  }
  .basket-finish{
    padding: 20px;
    border: 1px solid #dedede;
    border-radius: 5px;
    align-self: baseline;
  }
  @media screen and (max-width: 767px){
    .basket-finish{
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
  .basket-counts{
    font-size: 22px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  .basket-counts span{
  }
  .basket-total{
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .basket-total span{
    color: #F8694A;
  }
  .basket-clear{
    border: 1px solid #30323A;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    margin: 20px 0;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  @media screen and (max-width: 440px){
    .basket-clear{
      display: block;
      text-align: center;
    }
  }
  .basket-clear:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #F8694A;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all .3s ease;
  }
  .basket-clear:hover{
    color: #fff;
    border: 1px solid #F8694A;
  }
  .basket-clear:hover:before{
    width: 100%;
    left: 0;
  }
  .basket-link{
    display: block;
    width: 100%;
    margin-top: 20px;
    text-decoration: none;
  }
  .basket-link__order{
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    color: #30323A;
    font-weight: bold;
    border: 1px solid #30323A;
    position: relative;
    text-align: center;
    transition: background .3s linear;
  }
  .basket-link__order:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #F8694A;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all .3s ease;
  }
  .basket-link__order:hover{
    color: #fff;
    border: 1px solid #F8694A;
  }
  .basket-link__order:hover:before{
    width: 100%;
    left: 0;
  }
  .empty{
    margin-bottom: 50px;
  }
  .empty h1{
    color: red;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .basket-back{

  }
  .basket-back__link{
    border: 1px solid #30323A;
    border-radius: 4px;
    padding: 10px 20px;
    text-decoration: none;
    color: #30323A;
    display: inline-block;
    position: relative;
    transition: background .3s linear;
  }
  .basket-back__link:before{
    position: absolute;
    content: '';
    left: 50%;
    top: 0;
    background: #F8694A;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: all .3s ease;
  }
  .basket-back__link:hover{
    color: #fff;
    border: 1px solid #F8694A;
  }
  .basket-back__link:hover:before{
    width: 100%;
    left: 0;
  }
</style>