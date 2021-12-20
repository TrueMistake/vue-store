<template>
  <aside class="aside">
    <div class="filter">
      <div class="filter-title" :class="{'active': isOpened}" @click="accordion">Фильтр</div>
      <div class="filter-mobile">
        <div class="filter-item">
          <div class="filter-item__title">Цена</div>
          <div class="filter-item__prices">
            <input type="number" class="filter-item__price"
                   :min="min"
                   :max="max"
                   v-model="inputMin"
                   @input="changeMin">
            <input type="number" class="filter-item__price"
                   :min="min"
                   :max="max"
                   v-model="inputMax"
                   @input="changeMax">
          </div>
        </div>
        <div class="filter-item">
          <div class="filter-item__title">Цвет</div>
          <div class="filter-item__wrap">
            <label class="filter-item__label filter-item__color" v-for="(item, key) of filterProps.color" :key="key">
              <input type="checkbox" class="filter-item__input" :value="item" v-model="colors">
              <span class="filter-item__span" :style="{backgroundColor: `#${item}`}"></span>
            </label>
          </div>
        </div>
        <div class="filter-item filter-item__size">
          <div class="filter-item__title">Размер</div>
          <div class="filter-item__wrap">
            <label class="filter-item__label" v-for="(item, key) of filterProps.size" :key="key">
              <input type="checkbox" class="filter-item__input" :value="item" v-model="sizes">
              <span class="filter-item__span">{{item}}</span>
            </label>
          </div>
        </div>
        <button class="filter-success" type="submit" @click="filterSuccess">Применить</button>
        <button class="filter-clear" type="submit" @click="filterClear">Очистить</button>
      </div>
    </div>
  </aside>
</template>

<script>
import {useStore} from 'vuex'
import {ref, computed, onBeforeMount} from 'vue'

export default {
  name: "Filter",
  setup() {
    const store = useStore();
    const colors = ref([]);
    const sizes = ref([]);
    const min = ref(null);
    const max = ref(null);
    const inputMin = ref(null);
    const inputMax = ref(null);
    const width = ref(null);
    const isOpened = ref(false);

    onBeforeMount(() => {
      store.getters.localStore;
      store.dispatch('property');
      store.dispatch('filterResult');

      const props = store.getters.property;
      min.value = props.price[0];
      max.value = props.price[1];
      inputMin.value = store.getters.filterMin || props.price[0];
      inputMax.value = store.getters.filterMax || props.price[1];
      colors.value = store.getters.filterColor || [];
      sizes.value = store.getters.filterSize || [];
    })

    const changeMin = () => {
      if (min.value > inputMin.value) {
        store.dispatch('filterMin', +min.value);
        inputMin.value = +min.value
      }
      if (inputMin.value > inputMax.value || inputMin.value > +max.value) {
        inputMin.value = inputMax.value - 1
      }
      if (inputMin.value == null) {
        store.dispatch('filterMin', +min.value);
      }
      store.dispatch('filterMin', +inputMin.value);
    }

    const changeMax = () => {
      if (max.value < inputMax.value) {
        store.dispatch('filterMax', +max.value);
        inputMax.value = +max.value
      }
      if (inputMax.value < inputMin.value || inputMax.value < +min.value) {
        inputMax.value = inputMin.value + 1
      }
      if (inputMax.value == null) {
        store.dispatch('filterMax', +max.value);
      }
      store.dispatch('filterMax', +inputMax.value);
    }

    const filterSuccess = () => {
      store.dispatch('filterSearch', colors.value);
      store.dispatch('filterSearchSize', sizes.value);
      store.dispatch('filterResult');

      let baseUrl = window.location.href;
      const url = new URL(`?min=${inputMin.value}&max=${inputMax.value}&colors=${colors.value}&sizes=${sizes.value}`, baseUrl)
      window.history.pushState(null, null, url)
    }

    const filterClear = () => {
      store.dispatch('filterClear', []);
      colors.value = [];
      sizes.value = [];
    }

    const updateWidth = () => {
      width.value = window.innerWidth;
    }

    window.addEventListener('resize', updateWidth);

    const accordion = (e) => {
      isOpened.value = !isOpened.value;

      let panel = e.target.nextElementSibling;
      if (isOpened.value) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }
    }

    return{
      filterProps: computed(() => store.getters.property),
      colors,
      sizes,
      min,
      max,
      inputMin,
      inputMax,
      changeMin,
      changeMax,
      filterSuccess,
      filterClear,
      accordion,
      isOpened
    }
  }
}
</script>

<style scoped>
  .aside{
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
    align-self: baseline;
  }
  .filter{
    display: block;
    width: 100%;
    padding: 20px 10px;
  }
  .filter-title{
    font-size: 20px;
    line-height: 24px;
    color: #000;
    margin-bottom: 20px;
    display: none;
  }
  @media screen and (max-width: 767px){
    .filter-title{
      margin-bottom: 0;
      cursor: pointer;
      text-align: center;
      display: block;
    }
    .filter-title.active{
      margin-bottom: 20px;
    }
    .filter-mobile{
      padding: 0 18px;
      background-color: white;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
    }
  }
  .filter-item__prices{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
  .filter-item__price{
    display: block;
    width: 100%;
    padding: 5px 10px;
    border: none;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  input[type='number'] {
    -moz-appearance:textfield;
  }
  .filter-item__price::-webkit-outer-spin-button,
  .filter-item__price::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
  .filter-item{
    margin-bottom: 15px;
  }
  .filter-item__title{
    line-height: 24px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #DADADA;
    position: relative;
  }
  .filter-item__title:first-child{
    margin-top: 0;
  }
  .filter-item__title:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    width: 60px;
    background-color: #F8694A;
  }
  .filter-item__wrap{
    display: grid;
    grid-template-columns: repeat(4, 20px);
    grid-column-gap: 10px;
    align-items: center;
  }
  .filter-item__label{
    display: block;
    width: 100%;
    position: relative;
    margin-bottom: 10px;
  }
  .filter-item__color{

  }
  .filter-item__color .filter-item__input:checked + .filter-item__span{
    box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 3px #f8694a;
  }
  .filter-item__color .filter-item__input:checked + .filter-item__span:before{
    display: none;
  }
  .filter-item__input{
    position: absolute;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .filter-item__span{
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
  }
  .filter-item__span:before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    transition: all .3s linear;
  }
  .filter-item__input:checked + .filter-item__span:before{
    border: none;
    top: 3px;
    left: 4px;
    height: 10px;
    width: 15px;
    border-left: 1px solid #F8694A;
    border-bottom: 1px solid #F8694A;
    transform: rotate(-45deg);
  }
  .filter-success{
    background: #F8694A;
    border: none;
    padding: 10px 0;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    transition: all .3s linear;
  }
  .filter-success:hover{
    background: #30323A;
  }
  .filter-clear{
    background: #F8694A;
    border: none;
    padding: 10px 0;
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    transition: all .3s linear;
  }
  .filter-clear:hover{
    background: #30323A;
  }

  .filter-item__size .filter-item__wrap{
    display: block;
  }
  .filter-item__size .filter-item__span{
    padding-left: 30px;
  }
  .filter-item__size .filter-item__span{
    padding-left: 30px;
  }

</style>