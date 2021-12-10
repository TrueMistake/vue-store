<template>
  <div class="sort">
    <select name="" class="sort-select" v-model="selected" @change="sort(this)">
      <option value=""></option>
      <option value="sortPopular">По популярности</option>
      <option value="priceUp">Цена по возростанию</option>
      <option value="priceDown">Цена по убыванию</option>
    </select>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  name: "Sort",
  setup() {
    const store = useStore();
    const selected = ref('');

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
  }
</style>