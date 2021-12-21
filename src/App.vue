<template>
  <app-header></app-header>
  <app-footer></app-footer>
</template>

<script>
import appHeader from './components/Header'
import appFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-header': appHeader,
    'app-footer': appFooter
  }
}
</script>

<style>
  *,*:before,*:after{
    box-sizing: border-box;
    transition: all .3s linear;
  }
  body{
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Hind', sans-serif;
    color: #4A4E5A;
  }
  body._over{
    overflow-y: hidden;
  }
  .container{
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }
  @media screen and (max-width: 1440px) {
    .container{
      max-width: 1200px;
    }
  }
  @media screen and (max-width: 1200px) {
    .container{
      max-width: 992px;
    }
  }
  @media screen and (max-width: 992px) {
    .container{
      max-width: 100%;
    }
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
</style>
