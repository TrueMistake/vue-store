<template>
  <div class="sort">
    <select class="sort-select" v-model="selected" @change="sort()">
      <option disabled value="">{{defaultValue}}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{option.name}}</option>
    </select>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import {useStore} from 'vuex'

export default {
  name: "Sort",
  props:['options', 'defaultValue'],
  setup() {
    const store = useStore();
    const selected = ref('');

    onBeforeMount(() => {
      store.getters.localStore;
      if (store.getters.sorting) {
        selected.value = store.getters.sorting;
      }
    })

    const sort = () => {
      selected.value.length > 0 ? store.dispatch('sorting', selected.value) : null;
    }

    return {
      sort,
      selected
    }
  }
}
</script>

<style scoped>
  .sort{
    margin-bottom: 20px;
  }
  .sort-select{
    padding: 10px;
    border: none;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  @media screen and (max-width: 767px){
    .sort{
      margin-top: 20px;
      text-align: center;
    }
    .sort-select{
      width: 100%;
      margin-left: 0;
    }
  }
</style>