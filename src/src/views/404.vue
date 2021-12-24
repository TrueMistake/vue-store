<template>
  <div class="pageNotFound">
    <div class="container">
      <h1>Ошибка 404!</h1>
      <p>Страница не найдена!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>
  .pageNotFound{
    padding-top: 100px;
  }
  .pageNotFound h1{
    font-size: 40px;
    line-height: 48px;
    color: #30323A;
    text-align: center;
  }
  .pageNotFound p{
    font-size: 18px;
    line-height: 22px;
    color: #30323A;
    text-align: center;
  }
</style>