<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" tag="a" exact exact-active-class="_active" class="nav-link">Главная</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Catalog'}" tag="a" exact exact-active-class="_active" class="nav-link">Каталог</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'About'}" tag="a" exact exact-active-class="_active" class="nav-link">О нас</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
  .nav{
    margin: 20px 0;
  }
  .nav-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
    grid-column-gap: 20px;
  }
  .nav-item{
    padding: 10px 20px;
  }
  .nav-link{
    font-size: 18px;
    line-height: 22px;
    color: #000;
    display: block;
  }
</style>