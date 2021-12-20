<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
        <div class="footer-left">
          <div class="footer-logo">
            <router-link tag="a" to="/" exact class="footer-logo__link">
              <img src="https://i.pinimg.com/originals/30/cb/31/30cb311ba48206cdb09f0a1fe7a3be79.jpg" alt="logo" title="logo" class="footer-logo__img">
            </router-link>
          </div>
        </div>
        <ul class="footer-list">
          <li class="footer-item">
            <router-link to="/" tag="a" exact class="nav-link">Главная</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Catalog'}" tag="a" exact class="nav-link">Женщинам</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Catalog'}" tag="a" exact class="nav-link">Мужчинам</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'About'}" tag="a" exact class="nav-link">О нас</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Contacts'}" tag="a" exact class="nav-link">Контакты</router-link>
          </li>
        </ul>
        <div class="footer-contacts">
          <div>
            <a href="#" class="footer-contacts__phone">+7 800 123-65-47</a>
          </div>
          <div>
            <a href="#" class="footer-contacts__email">shop@shop.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        Copyright ©2021
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer{
    padding-top: 30px;
    background: #F6F7F8;
  }
  .footer-wrap{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 15px;
  }
  @media screen and (max-width: 576px) {
    .footer-wrap{
      grid-template-columns: auto;
      justify-content: center;
      text-align: center;
    }
  }
  .footer-logo__img{
    display: block;
    width: 70px;
    height: 50px;
    object-fit: contain;
  }
  @media screen and (max-width: 576px) {
    .footer-left{
      margin-bottom: 15px;
    }
    .footer-logo__img{
      margin: 0 auto;
    }
  }
  .footer-list{

  }
  @media screen and (max-width: 576px){
    .footer-list{
      margin-bottom: 15px;
    }
  }
  .footer-item{
    margin-bottom: 10px;
  }
  .nav-link{
    padding: 10px 20px;
    font-size: 16px;
    line-height: 18px;
    color: #000;
  }
  
  .footer-contacts__phone{
    font-size: 16px;
    line-height: 18px;
    color: #000;
    font-weight: bold;
  }
  .footer-bottom{
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid #eee;
  }
</style>