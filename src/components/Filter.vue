<template>
  <aside class="aside">
    <div class="filter">
      <div class="filter-title">Фильтр</div>
      <div class="filter-item">
        <div class="filter-item__prices">
          <input type="text" class="filter-item__price" :min="min" :max="max" v-model="min">
          <input type="text" class="filter-item__price" :min="min" :max="max" v-model="max">
        </div>
      </div>
      <div class="filter-item">
        <div class="filter-item__title">Цвет</div>
        <div class="filter-item__wrap">
          <label class="filter-item__label" v-for="(item, key) of filterProps.color" :key="key">
            <input type="checkbox" class="filter-item__input" :value="item" v-model="colors">
            <span class="filter-item__span" :style="{backgroundColor: item}"></span>
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

    onBeforeMount(() => {
      store.dispatch('property');
      const property = store.getters.property;
      min.value = property.price[0];
      max.value = property.price[1];
    })

    const filterSuccess = () => {
      store.dispatch('filterSearch', colors.value);
      store.dispatch('filterSearchSize', sizes.value);
      store.dispatch('filterMin', min);
      store.dispatch('filterMax', max);
    }
    const filterClear = () => {
    }


    return{
      filterProps: computed(() => store.getters.property),
      colors,
      sizes,
      min,
      max,
      filterSuccess,
      filterClear
    }
  }
}
</script>

<style scoped>
  .aside{
    border: 1px solid #000;
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
  }
  .filter-item{
    margin-bottom: 15px;
  }
  .filter-item__title{
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 10px;
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
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(-45deg);
  }
  .filter-success{
    background: #242857;
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
    background: #B4BAFD;
    box-shadow: 0 0 10px #b4bafd;
  }
  .filter-clear{
    background: #242857;
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
    background: #B4BAFD;
    box-shadow: 0 0 10px #b4bafd;
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