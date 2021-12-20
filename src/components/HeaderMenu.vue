<template>
  <div class="header-top">
    <div class="container">
      <div class="header-top__wrapper">
        <div class="header-top__title">Добро пожаловать!</div>
        <ul class="header-top__list">
          <li class="footer-item">
            <router-link to="/" tag="a" exact class="header-top__link">Главная</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'About'}" tag="a" exact class="header-top__link">О нас</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Contacts'}" tag="a" exact class="header-top__link">Контакты</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu"
}
</script>

<style scoped>
  .header-top{
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #DADADA;
  }
  .header-top__wrapper{
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-column-gap: 30px;
    align-items: center;
  }
  .header-top__title{
    font-size: 14px;
    line-height: 16px;
    color: #000;
  }
  .header-top__list{
    display: grid;
    grid-template-columns: repeat(3, minmax(20px, max-content));
    grid-column-gap: 20px;
    justify-content: right;
    align-items: center;
    text-align: right;
  }
  .header-top__link{
    font-size: 14px;
    line-height: 16px;
    color: #000;
  }
  .header-top__link:hover{
    color: #F8694A;
  }
</style>