<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link :to="{name: 'Woman'}" tag="a" exact exact-active-class="_active" class="nav-link">Женщинам</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Man'}" tag="a" exact exact-active-class="_active" class="nav-link">Мужчинам</router-link>
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
    margin-top: 20px;
    height: 50px;
    background: #4A4E5A;
  }
  .nav-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
    align-items: center;
    grid-column-gap: 20px;
    height: 50px;
  }
  .nav-item{
    padding: 10px 20px;
  }
  .nav-link{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    color: #fff;
    display: block;
  }
  .nav-link:hover{
    color: #F8694A
  }
</style>