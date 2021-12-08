<template>
  <aside class="aside">
    <div class="filter">
      <div class="filter-block">
        <div class="filter-wrap">
          <label class="filter-block__item">
            <input type="checkbox" class="filter-block__input">
            <span class="filter-block__text"></span>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Filter"
}
</script>

<style scoped>
  .aside{
    border: 1px solid #000;
  }
  .filter{

  }
  .filter-block{
    height: 150px;
    overflow: hidden;
  }
  .filter-wrap{
    overflow-y: auto;
  }
  .filter-block__item{
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .filter-block__item:last-child{
    margin-bottom: 0;
  }
  .filter-block__text{

  }
</style>