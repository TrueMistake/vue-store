<template>
  <div class="subscribe">
    <div class="container">
      <div class="subscribe-title">Подпишитесь на нашу рассылку</div>
      <p class="subscribe-subtext">Получите специальное предложение и новости от нас первыми</p>
      <form class="subscribe-form" :class="{_error: !flag}">
        <input type="text" class="subscribe-input" placeholder="Введите email" v-model="email">
        <button class="subscribe-btn" @click.prevent.stop="checkEmail">Подписаться</button>
      </form>
      <div class="subscribe-form__error" :class="{_error: !flag}">{{errorMessage}}</div>
      <div class="subscribe-info">Нажимая на кнопку вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</div>
    </div>
  </div>
</template>

<script>
import {ref, computed, onBeforeMount} from 'vue'
import {useStore} from 'vuex'
export default {
  name: "Subscribe",
  setup() {
    const store = useStore();
    const email = ref('');
    const sub = ref('');
    const flag = ref(true)
    const errorMessage = ref('')

    const validEmail = ()=> {
      return /^[\w]{1}[\w-\]*@[\w-]+\.[a-z]{2,4}$/i.test(email.value);
    };

    onBeforeMount(() => {
      store.getters.localStore
      sub.value = store.getters.subscribe
    })

    const checkEmail = () => {
      if (email.value && validEmail()) {
        flag.value = true
        if (sub.value === email.value) {
          flag.value = false;
          email.value = '';
          errorMessage.value = 'Такой email уже есть';
        } else {
          store.dispatch('subscribe', email.value);
          flag.value = true;
          email.value = '';
          errorMessage.value = ''
        }
      } else {
        flag.value = false
        errorMessage.value = 'Неккоректно введён email'
      }
    }

    return {
      email,
      flag,
      errorMessage,
      sub,
      validEmail,
      checkEmail,
      subscribe: computed(() => store.getters.subscribe)
    }
  }
}
</script>

<style scoped>
  .subscribe{
    background: #4A4E5A;
    padding: 15px 0;
  }
  .subscribe-title{
    font-size: 20px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }
  .subscribe-subtext{
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
  .subscribe-form{
    display: grid;
    grid-template-columns: minmax(200px, 400px) 120px;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    height: 30px;
  }
  .subscribe-input{
    padding: 5px 10px;
    display: block;
    border: 1px solid transparent;
    border-right: none;
    position: relative;
    height: 30px;
    z-index: 1;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  .subscribe-input:focus{
    outline: none;
    box-shadow: 0px 0px 0px 1px #f8694a inset, 0px 0px 0px 0px #f8694a;
  }
  .subscribe-form._error .subscribe-input{
    border: 1px solid red;
  }
  .subscribe-form__error{
    display: none;
    font-size: 16px;
    line-height: 20px;
    color: red;
    text-align: center;
    margin: 10px 0;
  }
  .subscribe-form__error._error{
    display: block;
  }
  .subscribe-btn{
    background: #F8694A;
    border: none;
    padding: 5px 10px;
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
  }
  .subscribe-info{
    max-width: 400px;
    margin: 20px auto;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #dedede;
  }
</style>