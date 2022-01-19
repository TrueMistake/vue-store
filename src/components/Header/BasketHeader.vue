<template>
  <div class="header-basket">
    <router-link :to="{name: 'Basket'}" class="header-basket__link">
      <svg class="header-basket__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 7.75C16.5 5.28906 14.4609 3.25 12 3.25C9.50391 3.25 7.5 5.28906 7.5 7.75H4.125V18.4375C4.125 20.0195 5.35547 21.25 6.9375 21.25H17.0625C18.6094 21.25 19.875 20.0195 19.875 18.4375V7.75H16.5ZM12 4.9375C13.5469 4.9375 14.8125 6.20312 14.8125 7.75H9.1875C9.1875 6.20312 10.418 4.9375 12 4.9375ZM18.1875 18.4375C18.1875 19.0703 17.6602 19.5625 17.0625 19.5625H6.9375C6.30469 19.5625 5.8125 19.0703 5.8125 18.4375V9.4375H7.5V10.8438C7.5 11.3359 7.85156 11.6875 8.34375 11.6875C8.80078 11.6875 9.1875 11.3359 9.1875 10.8438V9.4375H14.8125V10.8438C14.8125 11.3359 15.1641 11.6875 15.6562 11.6875C16.1133 11.6875 16.5 11.3359 16.5 10.8438V9.4375H18.1875V18.4375Z" fill="#353642"/>
      </svg>
      <span v-if="totalCount > 0" class="header-basket__count">{{ totalCount }}</span>
    </router-link>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import {useStore} from "vuex";

export default {
  name: "BasketHeader",
  props: ['totalCount'],
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.getters.localStore
    })
  }
}
</script>

<style scoped>
  .header-basket{
    text-align: center;
    position: relative;
    border: 1px solid #DADADA;
    height: 40px;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .header-basket:hover{
    box-shadow: 0px 0px 0px 1px #f8694a inset, 0px 0px 0px 0px #f8694a;
  }
  .header-basket__link{

  }
  .header-basket__svg{

  }
  .header-basket__count{
    position: absolute;
    top: 20px;
    right: -5px;
    background: #F8694A;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>