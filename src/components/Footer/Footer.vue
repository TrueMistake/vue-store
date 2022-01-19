<template>
  <app-subscribe></app-subscribe>
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
            <router-link :to="{name: 'Woman'}" tag="a" exact class="nav-link">Женщинам</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Man'}" tag="a" exact class="nav-link">Мужчинам</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'About'}" tag="a" exact class="nav-link">О нас</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Blog'}" tag="a" exact class="nav-link">Блог</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{name: 'Contacts'}" tag="a" exact class="nav-link">Контакты</router-link>
          </li>
          <li class="footer-item">
            <router-link to="/privacy" tag="a" exact class="nav-link">Политика кофиденциальности</router-link>
          </li>
        </ul>
        <div class="footer-contacts">
          <div>
            <a href="tel:+78001236547" class="footer-contacts__phone">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7343 4.05855L16.4296 3.32027C15.6562 3.14448 14.8828 3.5312 14.6015 4.23433L13.0546 7.82027C12.7734 8.45308 12.9492 9.22652 13.5117 9.68355L14.9179 10.8437C13.9335 12.6718 12.3867 14.1835 10.5585 15.2031L9.39839 13.7968C8.94136 13.2343 8.16792 13.0585 7.53511 13.3398L3.94917 14.8515C3.24605 15.1679 2.85933 15.9414 3.03511 16.7148L3.77339 20.0195C3.94917 20.7578 4.61714 21.25 5.35542 21.25C13.9687 21.25 21 14.289 21 5.64058C21 4.9023 20.4726 4.23433 19.7343 4.05855ZM5.42573 19.5625L4.68745 16.3984L8.13277 14.9218L10.1015 17.3125C13.582 15.6601 15.375 13.8671 17.0273 10.3867L14.6367 8.41792L16.1132 4.97261L19.3125 5.71089C19.2773 13.3398 13.0546 19.5273 5.42573 19.5625Z" fill="#353642"/>
              </svg>
              +7 800 123-65-47</a>
          </div>
          <div>
            <a href="mailTo:shop@shop.com" class="footer-contacts__email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3125 5.5H4.6875C3.73828 5.5 3 6.27344 3 7.1875V17.3125C3 18.2617 3.73828 19 4.6875 19H19.3125C20.2266 19 21 18.2617 21 17.3125V7.1875C21 6.27344 20.2266 5.5 19.3125 5.5ZM19.3125 7.1875V7.5C18.5039 8.16797 17.2383 9.15234 14.5664 11.2617C13.9688 11.7188 12.8086 12.8438 12 12.8086C11.1562 12.8438 9.99609 11.7188 9.39844 11.2617C6.72656 9.15234 5.46094 8.16797 4.6875 7.5V7.1875H19.3125ZM4.6875 17.3125V9.67969C5.46094 10.3125 6.62109 11.2266 8.34375 12.5977C9.11719 13.1953 10.4883 14.5312 12 14.4961C13.4766 14.5312 14.8125 13.1953 15.6211 12.5977C17.3438 11.2266 18.5039 10.3125 19.3125 9.67969V17.3125H4.6875Z" fill="#353642"/>
              </svg>
              shop@shop.com</a>
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
import appSubscribe from "@/components/Subscribe/Subscribe";

export default {
  name: "Footer",
  components:{
    'app-subscribe': appSubscribe
  }
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
  .footer-contacts{

  }
  .footer-contacts div{
    margin-bottom: 10px;
  }
  .footer-contacts__phone{
    font-size: 16px;
    line-height: 18px;
    color: #000;
    font-weight: bold;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 10px;
    align-items: center;
  }
  .footer-contacts__email{
    font-size: 16px;
    line-height: 18px;
    color: #000;
    font-weight: bold;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 10px;
    align-items: center;
  }
  .footer-bottom{
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid #eee;
  }
</style>