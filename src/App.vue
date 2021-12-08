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
}
body{
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 18px;
  font-family: 'Arial';
}
.container{
  width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
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
