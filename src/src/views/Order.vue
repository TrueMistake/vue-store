<template>
  <div class="order">
    <div class="container">
      <template v-if="!success">
        <h1>Оформление заказа</h1>
        <form action="" class="order-form">
          <div class="order-block">
            <div class="order-block__title">Данные:</div>
            <label class="order-block__label">
              <input class="order-data__input" type="text" name="NAME" placeholder="Ваше имя" v-model="name">
              <span class="order-error">Ошибка заполнения поля</span>
            </label>
            <label class="order-block__label">
              <input class="order-data__input" type="text" name="SECONDNAME" placeholder="Ваше фамилия" v-model="secondName">
              <span class="order-error">Ошибка заполнения поля</span>
            </label>
            <label class="order-block__label">
              <input class="order-data__input" type="tel" name="PHONE" placeholder="Телефон" v-model="phone">
              <span class="order-error">Ошибка заполнения поля</span>
            </label>
            <label class="order-block__label">
              <input class="order-data__input" type="email" name="EMAIL" placeholder="email" v-model="email">
              <span class="order-error">Ошибка заполнения поля</span>
            </label>
          </div>
          <div class="order-block">
            <div class="order-block__title">Доставка:</div>
            <div class="order-block__delivery order-block__label">
              <label class="order-block__subtitle" for="order-country">Страна:</label>
              <input class="order-data__input order-country" list="order-country-select" id="order-country" name="COUNTRY" v-model="country"/>
              <datalist id="order-country-select">
                <option value="Россия"></option>
                <option value="Казахстан"></option>
              </datalist>
              <span class="order-error">Ошибка заполнения поля</span>
            </div>
            <div class="order-block__delivery order-block__label">
              <label class="order-block__subtitle" for="order-region">Регион:</label>
              <input class="order-data__input order-region" list="order-region-select" id="order-region" name="REGION" v-model="region"/>
              <datalist id="order-region-select">
                <option value="Москва и МО"></option>
                <option value="Владивосток"></option>
                <option value="Краснодар"></option>
                <option value="Владимир"></option>
                <option value="Санкт-Петербург"></option>
              </datalist>
              <span class="order-error">Ошибка заполнения поля</span>
            </div>
          </div>
          <div class="order-block">
            <div class="order-block__title">Способ доставки:</div>
            <div class="order-delivery__wrap order-block__label">
              <label class="order-delivery__label">
                <input type="radio" class="order-delivery__input order-delivery" value="Самовывоз" v-model="delivery">
                <span class="order-delivery__span">Самовывоз</span>
              </label>
              <label class="order-delivery__label">
                <input type="radio" class="order-delivery__input order-delivery" value="Курьером" v-model="delivery">
                <span class="order-delivery__span">Курьером</span>
              </label>
              <label class="order-delivery__label">
                <input type="radio" class="order-delivery__input order-delivery" value="Почтой" v-model="delivery">
                <span class="order-delivery__span">Почтой</span>
              </label>
              <span class="order-error">Ошибка заполнения поля</span>
            </div>
          </div>

          <template v-if="pickup">
            <div class="order-pickup">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A540897e1a374cf22bfea74b945708d984b868560de6f12ba06f232435ff537d9&amp;source=constructor" width="743" height="569" frameborder="0"></iframe>
            </div>
          </template>
          <template v-if="courier">
            <div class="order-courier__wrapper">
              <div class="order-courier">
                <label class="order-block__label">
                  <input type="text" class="order-courier__input" name="STREET" placeholder="Улица">
                  <span class="order-error">Ошибка заполнения поля</span>
                </label>
                <label class="order-block__label">
                  <input type="text" class="order-courier__input" name="HOUSE" placeholder="Дом">
                  <span class="order-error">Ошибка заполнения поля</span>
                </label>
                <label class="order-block__label">
                  <input type="text" class="order-courier__input" name="ENTRANCE" placeholder="Подъезд">
                  <span class="order-error">Ошибка заполнения поля</span>
                </label>
                <label class="order-block__label">
                  <input type="text" class="order-courier__input" name="APARTMENT" placeholder="Квартира">
                  <span class="order-error">Ошибка заполнения поля</span>
                </label>
                <label class="order-block__label">
                  <input type="text" class="order-courier__input" name="INTERCOM" placeholder="Домофон">
                  <span class="order-error">Ошибка заполнения поля</span>
                </label>
              </div>
              <textarea class="order-courier__textarea" id="COMMENTS" placeholder="Комментарии"></textarea>
            </div>
          </template>
          <template v-if="mail">
            <div class="order-mail">
              <label class="order-block__label">
                <input type="number" class="order-courier__input" name="INDEX" placeholder="Индекс">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
              <label class="order-block__label">
                <input type="text" class="order-courier__input" name="STREET" placeholder="Улица">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
              <label class="order-block__label">
                <input type="text" class="order-courier__input" name="HOUSE" placeholder="Дом">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
              <label class="order-block__label">
                <input type="text" class="order-courier__input" name="ENTRANCE" placeholder="Подъезд">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
              <label class="order-block__label">
                <input type="text" class="order-courier__input" name="APARTMENT" placeholder="Квартира">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
              <label class="order-block__label">
                <input type="text" class="order-courier__input" name="INTERCOM" placeholder="Домофон">
                <span class="order-error">Ошибка заполнения поля</span>
              </label>
            </div>
          </template>

          <div class="order-block">
            <div class="order-block__title">Оплата:</div>
            <div class="order-block__label">
              <label class="order-pay__label order-block__label">
                <input type="radio" class="order-pay__input order-pay" value="Оплата через сайт" v-model="pay">
                <span class="order-pay__span">Оплата через сайт</span>
              </label>
              <label class="order-pay__label order-block__label">
                <input type="radio" class="order-pay__input order-pay" value="По карте при получении" v-model="pay">
                <span class="order-pay__span">По карте при получении</span>
              </label>
              <label class="order-pay__label order-block__label">
                <input type="radio" class="order-pay__input order-pay" value="Наличными" v-model="pay">
                <span class="order-pay__span">Наличными</span>
              </label>
              <span class="order-error">Ошибка заполнения поля</span>
            </div>
          </div>

          <div class="order-final">
            <div class="order-final__price">Стоимость товара: <span>{{discharge(totalPrice)}} ₽</span></div>
            <div class="order-final__delivery">Стоимость доставки: <span>{{deliveryPriceHtml()}}</span></div>
            <div class="order-final__total">Итого: <span>{{ deliveryPrice != 'бесплатно' ? discharge(totalPrice + +deliveryPrice) : discharge(totalPrice)}} ₽</span></div>
            <button type="submit" class="order-submit" @click="profite">Подтвердить</button>
          </div>
        </form>
      </template>
      <template v-if="success">
        <h1>Заказ Оформлен!</h1>
        <div class="success-line">Имя: <span>{{dataUser["name"]}}</span></div>
        <div class="success-line">Фамилия: <span>{{dataUser["secondName"]}}</span></div>
        <div class="success-line">Телефон: <span>{{dataUser["phone"]}}</span></div>
        <div class="success-line">Почта: <span>{{dataUser["email"]}}</span></div>
        <div class="success-line">Страна: <span>{{dataUser["country"]}}</span></div>
        <div class="success-line">Регион: <span>{{dataUser["region"]}}</span></div>
        <div class="success-line" v-if="dataUser['street']">Улица: <span>{{dataUser["street"]}}</span></div>
        <div class="success-line" v-if="dataUser['house']">Дом: <span>{{dataUser["house"]}}</span></div>
        <div class="success-line" v-if="dataUser['entrance']">Подъезд: <span>{{dataUser["entrance"]}}</span></div>
        <div class="success-line" v-if="dataUser['apartment']">Квартира: <span>{{dataUser["apartment"]}}</span></div>
        <div class="success-line" v-if="dataUser['intercom']">Домофон: <span>{{dataUser["intercom"]}}</span></div>
        <div class="success-line" v-if="dataUser['comments']">Комментарии: <span>{{dataUser["comments"]}}</span></div>
        <div class="success-line" v-if="dataUser['index']">Индекс: <span>{{dataUser["index"]}}</span></div>
        <div class="success-line">Оплата: <span>{{dataUser["pay"]}}</span></div>
      </template>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, onBeforeMount, ref} from 'vue';
export default {
  name: "Order",
  props: ['fortamPrice'],
  setup() {
    const store = useStore();
    const name = ref('');
    const secondName = ref('');
    const phone = ref('');
    const email = ref('');
    const country = ref('');
    const region = ref('');
    const address = ref('');
    const delivery = ref('');
    const deliveryPrice = ref(null);
    const pay = ref('');
    const pickup = ref(false);
    const courier = ref(false);
    const mail = ref(false);
    const success = ref(false);
    const dataUser = ref({
      name: '',
      secondName: '',
      phone: '',
      email: '',
      country: '',
      region: '',
      street: '',
      house: '',
      entrance: '',
      apartment: '',
      intercom: '',
      comments: '',
      index: '',
    });
    onBeforeMount(() => {
      store.getters.localStor
    })
    const profite = (e) => {
      e.preventDefault();
      if (name.value) {
        dataUser.value.name = name.value.trim();
        document.querySelector('.order input[name="NAME"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="NAME"]').closest('.order-block__label').classList.add('isError');
      }
      if (secondName.value) {
        dataUser.value.secondName = secondName.value.trim();
        document.querySelector('.order input[name="SECONDNAME"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="SECONDNAME"]').closest('.order-block__label').classList.add('isError');
      }
      if (phone.value && validPhone()) {
        dataUser.value.phone = phone.value;
        document.querySelector('.order input[name="PHONE"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="PHONE"]').closest('.order-block__label').classList.add('isError');
      }
      if (email.value && validEmail()) {
        dataUser.value.email = email.value;
        document.querySelector('.order input[name="EMAIL"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="EMAIL"]').closest('.order-block__label').classList.add('isError');
      }
      if (country.value) {
        dataUser.value.country = country.value;
        document.querySelector('.order input[name="COUNTRY"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="COUNTRY"]').closest('.order-block__label').classList.add('isError');
      }
      if (region.value) {
        dataUser.value.region = region.value;
        document.querySelector('.order input[name="REGION"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order input[name="REGION"]').closest('.order-block__label').classList.add('isError');
      }
      if (delivery.value.length) {
        switch (delivery.value) {
          case 'Курьером':
            profiteCheckInput();
            dataUser.value.comments = document.querySelector('.order #COMMENTS').value.trim();
            break;
          case 'Почтой':
            profiteCheckInput();
            if (document.querySelector('.order .order-mail input[name="INDEX"]').value.trim()) {
              dataUser.value.index = document.querySelector('.order .order-mail input[name="INDEX"]').value.trim();
              document.querySelector('.order .order-mail input[name="INDEX"]').closest('.order-block__label').classList.remove('isError');
            } else {
              document.querySelector('.order .order-mail input[name="INDEX"]').closest('.order-block__label').classList.add('isError');
            }
            break;
        }
      }
      dataUser.value.pay = pay.value;
      checkInput();
    }
    const profiteCheckInput = () => {
      if (document.querySelector('.order .order-mail input[name="STREET"]').value) {
        dataUser.value.street = document.querySelector('.order .order-mail input[name="STREET"]').value;
        document.querySelector('.order .order-mail input[name="STREET"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order .order-mail input[name="STREET"]').closest('.order-block__label').classList.add('isError');
      }
      if (document.querySelector('.order .order-mail input[name="HOUSE"]').value) {
        dataUser.value.house = document.querySelector('.order .order-mail input[name="HOUSE"]').value;
        document.querySelector('.order .order-mail input[name="HOUSE"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order .order-mail input[name="HOUSE"]').closest('.order-block__label').classList.add('isError');
      }
      if (document.querySelector('.order .order-mail input[name="ENTRANCE"]').value) {
        dataUser.value.entrance = document.querySelector('.order .order-mail input[name="ENTRANCE"]').value;
        document.querySelector('.order .order-mail input[name="ENTRANCE"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order .order-mail input[name="ENTRANCE"]').closest('.order-block__label').classList.add('isError');
      }
      if (document.querySelector('.order .order-mail input[name="APARTMENT"]').value) {
        dataUser.value.apartment = document.querySelector('.order .order-mail input[name="APARTMENT"]').value;
        document.querySelector('.order .order-mail input[name="APARTMENT"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order .order-mail input[name="APARTMENT"]').closest('.order-block__label').classList.add('isError');
      }
      if (document.querySelector('.order .order-mail input[name="INTERCOM"]').value) {
        dataUser.value.intercom = document.querySelector('.order .order-mail input[name="INTERCOM"]').value;
        document.querySelector('.order .order-mail input[name="INTERCOM"]').closest('.order-block__label').classList.remove('isError');
      } else {
        document.querySelector('.order .order-mail input[name="INTERCOM"]').closest('.order-block__label').classList.add('isError');
      }
    }
    const checkInput = () => {
      const obj = Object.entries(dataUser.value);
      let idx = 0;
      obj.forEach(el => {
        if (el[1] == '') {
          if (el[0] != 'comments') {
            el.check = false;
            idx--;
          }
        } else{
          el.check = true;
          idx++;
        }
      })
      if (idx >= 11) {
        success.value = true;
      } else if (delivery.value == 'Самовывоз' && idx == 1) {
        success.value = true;
      }
    }
    const deliveryPriceHtml = () => {
      if (delivery.value.length) {
        switch (delivery.value) {
          case 'Самовывоз':
            pickup.value = true;
            courier.value = false;
            mail.value = false;
            return deliveryPrice.value = 'бесплатно';
          case 'Курьером':
            courier.value = true;
            pickup.value = false;
            mail.value = false;
            return deliveryPrice.value = 500;
          case 'Почтой':
            mail.value = true;
            pickup.value = false;
            courier.value = false;
            return deliveryPrice.value = 300;
        }
      }
    }
    const discharge = (price) =>  {
      return price.toLocaleString()
    };
    const validPhone = () => {
      return /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.test(phone.value);
    };
    const validEmail = ()=> {
      return /^[\w]{1}[\w-\]*@[\w-]+\.[a-z]{2,4}$/i.test(email.value);
    };
    return {
      name,
      secondName,
      phone,
      email,
      country,
      region,
      address,
      delivery,
      deliveryPrice,
      pay,
      pickup,
      courier,
      mail,
      discharge,
      deliveryPriceHtml,
      totalPrice: computed(() => store.getters.totalPrice),
      profite,
      success,
      dataUser
    }
  }
}
</script>

<style scoped>
  .order{
    margin-bottom: 100px;
  }
  .order h1{
    margin-bottom: 50px;
  }
  .order-form{
    max-width: 400px;
    width: 100%;
  }
  .order-block{
    margin-bottom: 40px;
    max-width: 400px;
    width: 100%;
  }
  .order-block__title{
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 10px;
    border-bottom: 1px solid #DADADA;
    position: relative;
  }
  .order-block__title:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    width: 60px;
    background-color: #F8694A;
  }
  .order-block__label{
    display: block;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }
  .order-data__input{
    font-size: 16px;
    line-height: 18px;
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
  }
  .order-data__input:focus{
    outline: none;
  }
  .order-block__delivery{
    margin-bottom: 20px;
  }
  .order-block__subtitle{
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .order-delivery__label{
    display: block;
    margin-bottom: 10px;
  }
  .order-delivery__span{
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    margin-left: 5px;
  }
  .order-pay__label{
    display: block;
    margin-bottom: 10px;
  }
  .order-pay__span{
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    margin-left: 5px;
  }
  .order-submit{
    cursor: pointer;
    background: #F8694A;
    height: 40px;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
  }
  .order-submit:hover{
    background: #30323A;
  }
  .order-final{
    margin-top: 50px;
  }
  .order-error{
    display: none;
    color: red;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    position: absolute;
    left: 0;
  }
  .isError .order-error{
    display: block;
  }
  .isError .order-data__input{
    border: 1px solid red;
  }
  .order-final__price,
  .order-final__delivery,
  .order-final__total{
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
  }
  .order-final__price span{
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
  .order-final__total{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
  .order-final__total span{
    font-size: 28px;
    line-height: 32px;
  }
  .order-pickup{
    margin-bottom: 20px;
  }
  .order-courier__wrapper{
    margin-bottom: 20px;
  }
  .order-courier{
    display: grid;
    grid-template-columns: repeat(auto-fill, 126px);
    grid-gap: 10px;
  }
  .order-courier__input{
    padding: 5px 10px;
    display: block;
    width: 100%;
  }
  .order-courier__textarea{
    display: block;
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    margin-top: 10px;
  }
  .order-mail{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 20px;
  }
  .success-line{
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 20px;
  }
  .success-line span{
    font-weight: bold;
  }
</style>