<template>
  <router-link :to="'/catalog/' + item.id" tag="a" class="product-item" v-for="item of products" :key="item.id">
    <img :src="item.img" alt="" class="product-item__img">
    <div class="product-item__body">
      <div class="product-item__title">{{item.name}}</div>
      <div class="product-item__colors">
        <div class="product-item__color" v-for="el of item.colors" :key="el.id" :style="{background: el.color}"></div>
      </div>
      <div class="product-item__sizes">
        <div class="product-item__size" v-for="el of item.sizes" :key="el.id">{{el}}</div>
      </div>
      <div class="product-item__bottom">
        <div class="product-item__price">{{item.price}} ₽</div>
        <div class="product-item__oldprice"></div>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "Products",
  props: ['products'],
  setup() {

    return{

    }
  }
}
</script>

<style scoped>
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
  .product-item__sizes{
    display: grid;
    grid-template-columns: repeat(6, minmax(10px, max-content));
    grid-column-gap: 5px;
    margin: 10px 0;
  }
  .product-item__size{
    font-size: 14px;
    line-height: 16px;
    color: #000;
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