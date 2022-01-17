<template>
  <div class="order">
    <div class="container">
      <template v-if="!success">
        <h1>Оформление заказа</h1>
        <form action="" class="order-form">
          <div class="order-block">
            <div class="order-block__title">Данные:</div>
            <Input
                :data="checkFormInput.name"
                @change="event => changeHandler(event.target.value, checkFormInput.name.title)"
            />
            <Input
                :data="checkFormInput.secondName"
                @change="event => changeHandler(event.target.value, checkFormInput.secondName.title)"
            />
            <Input
                :data="checkFormInput.phone"
                @change="event => changeHandler(event.target.value, checkFormInput.phone.title)"
            />
            <Input
                :data="checkFormInput.email"
                @change="event => changeHandler(event.target.value, checkFormInput.email.title)"
            />
          </div>
          <div class="order-block">
            <div class="order-block__title">Доставка:</div>
            <div class="order-block__country order-block__label">
              <label class="order-block__subtitle" for="order-country">Страна:</label>
              <input class="order-data__input order-country" list="order-country-select" id="order-country" name="COUNTRY" v-model="country" required/>
              <datalist id="order-country-select">
                <option v-for="country of countryOptions" :key="country" :value="country">{{ country }}</option>
              </datalist>
              <span class="order-error">Ошибка заполнения поля</span>
            </div>
            <template v-if="country">
              <div class="order-block__region order-block__label">
                <label class="order-block__subtitle" for="order-region">Регион:</label>
                <input class="order-data__input order-region" list="order-region-select" id="order-region" name="REGION" v-model="region" required/>
                <datalist id="order-region-select">
                  <template v-if="country === countryOptions[0]">
                    <option v-for="region of regionRU" :key="region" :value="region">{{region}}</option>
                  </template>
                  <template v-if="country === countryOptions[1]">
                    <option v-for="region of regionKZ" :key="region" :value="region">{{region}}</option>
                  </template>
                </datalist>
                <span class="order-error">Ошибка заполнения поля</span>
              </div>
            </template>
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
              <span class="order-error">Ошибка выберите способ доставки!</span>
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
                <Input
                    :data="checkFormInput.street"
                    @change="event => changeHandler(event.target.value, checkFormInput.street.title)"
                />
                <Input
                    :data="checkFormInput.house"
                    @change="event => changeHandler(event.target.value, checkFormInput.house.title)"
                />
                <Input
                    :data="checkFormInput.entrance"
                    @change="event => changeHandler(event.target.value, checkFormInput.entrance.title)"
                />
                <Input
                    :data="checkFormInput.apartment"
                    @change="event => changeHandler(event.target.value, checkFormInput.apartment.title)"
                />
                <Input
                    :data="checkFormInput.intercom"
                    @change="event => changeHandler(event.target.value, checkFormInput.intercom.title)"
                />
              </div>
              <textarea class="order-courier__textarea" id="COMMENTS" placeholder="Комментарии"></textarea>
            </div>
          </template>
          <template v-if="mail">
            <div class="order-mail">
              <Input
                  :data="checkFormInput.index"
                  @change="event => changeHandler(event.target.value, checkFormInput.index.title)"
              />
              <Input
                  :data="checkFormInput.street"
                  @change="event => changeHandler(event.target.value, checkFormInput.street.title)"
              />
              <Input
                  :data="checkFormInput.house"
                  @change="event => changeHandler(event.target.value, checkFormInput.house.title)"
              />
              <Input
                  :data="checkFormInput.entrance"
                  @change="event => changeHandler(event.target.value, checkFormInput.entrance.title)"
              />
              <Input
                  :data="checkFormInput.apartment"
                  @change="event => changeHandler(event.target.value, checkFormInput.apartment.title)"
              />
              <Input
                  :data="checkFormInput.intercom"
                  @change="event => changeHandler(event.target.value, checkFormInput.intercom.title)"
              />
            </div>
          </template>

          <div class="order-block">
            <div class="order-block__title">Оплата:</div>
            <div class="order-pay__wrap order-block__label">
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
              <span class="order-error">Ошибка выберите способ оплаты!</span>
            </div>
          </div>

          <div class="order-final">
            <div class="order-final__price">Стоимость товара: <span>{{discharge(totalPrice)}} ₽</span></div>
            <div class="order-final__delivery">Стоимость доставки: <span>{{deliveryPriceHtml()}}</span></div>
            <div class="order-final__total">Итого: <span>{{ deliveryPrice != 'бесплатно' ? discharge(totalPrice + +deliveryPrice) : discharge(totalPrice)}} ₽</span></div>
            <button type="submit" class="order-submit" @click="profiteNew">Подтвердить</button>
          </div>
        </form>
      </template>
      <template v-if="success">
        <h1>Заказ Оформлен!</h1>
        <div class="success-line">Имя: <span>{{checkFormInput["name"].value}}</span></div>
        <div class="success-line">Фамилия: <span>{{checkFormInput["secondName"].value}}</span></div>
        <div class="success-line">Телефон: <span>{{checkFormInput["phone"].value}}</span></div>
        <div class="success-line">Почта: <span>{{checkFormInput["email"].value}}</span></div>
        <div class="success-line">Страна: <span>{{country}}</span></div>
        <div class="success-line">Регион: <span>{{region}}</span></div>
        <div class="success-line">Доставка: <span>{{delivery}}</span></div>
        <div class="success-line">Оплата: <span>{{pay}}</span></div>
        <div class="success-line" v-if="checkFormInput['street'].value">Улица: <span>{{checkFormInput["street"].value}}</span></div>
        <div class="success-line" v-if="checkFormInput['house'].value">Дом: <span>{{checkFormInput["house"].value}}</span></div>
        <div class="success-line" v-if="checkFormInput['entrance'].value">Подъезд: <span>{{checkFormInput["entrance"].value}}</span></div>
        <div class="success-line" v-if="checkFormInput['apartment'].value">Квартира: <span>{{checkFormInput["apartment"].value}}</span></div>
        <div class="success-line" v-if="checkFormInput['intercom'].value">Домофон: <span>{{checkFormInput["intercom"].value}}</span></div>
        <div class="success-line" v-if="checkFormInput['index'].value">Индекс: <span>{{checkFormInput["index"].value}}</span></div>
        <div class="success-line">Итого: <span>{{deliveryPrice != 'бесплатно' ? discharge(totalPrice + +deliveryPrice) : discharge(totalPrice)}} ₽</span></div>
      </template>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, onBeforeMount, ref} from 'vue';
import Input from "@/components/Input";
export default {
  name: "Order",
  components: {Input},
  props: ['fortamPrice'],
  setup() {
    const store = useStore();
    const address = ref('');
    const delivery = ref('');
    const deliveryPrice = ref(null);
    const pay = ref('');
    const pickup = ref(false);
    const courier = ref(false);
    const mail = ref(false);
    const success = ref(false);
    const country = ref('');
    const countryOptions = [
        'Россия',
        'Казахстан'
    ]
    const region = ref('');
    const regionRU = [
      'Москва',
      'Владивосток',
      'Уфа',
      'Самара',
      'Санкт-Петербург',
      'Коломна',
      'Зеленоград',
      'Магадан'
    ];
    const regionKZ = [
      'Актобе',
      'Алматы',
      'Атырау',
      'Нур-Султан',
      'Павлодар'
    ];

    const checkFormInput = ref({
      name: {
        title: 'name',
        value: '',
        label: 'Введите имя',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите имя',
        validation: {
          required: true,
        }
      },
      secondName: {
        title: 'secondName',
        value: '',
        label: 'Введите фамилию',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите фамилию',
        validation: {
          required: true,
        },
      },
      phone: {
        title: 'phone',
        value: '',
        label: 'Введите телефон',
        type: 'tel',
        valid: false,
        touched: false,
        errorMessage: 'Введите корректный телефон',
        validation: {
          required: true,
          minLength: 11,
          phone: true
        },
      },
      email: {
        title: 'email',
        value: '',
        label: 'Введите email',
        type: 'email',
        valid: false,
        touched: false,
        errorMessage: 'Введите корректный email',
        validation: {
          required: true,
          email: true
        },
      },
      country: {
        title: 'country',
        value: '',
        label: 'Выберите страну',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите страну',
        validation: {
          required: true,

        },
      },
      region: {
        title: 'region',
        value: '',
        label: 'Введите регион',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите регион',
        validation: {
          required: true,

        },
      },
      street: {
        title: 'street',
        value: '',
        label: 'Введите улицу',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите улицу',
        validation: {
          required: true,

        },
      },
      house: {
        title: 'house',
        value: '',
        label: 'Дом',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите номер дома',
        validation: {
          required: true,

        },
      },
      entrance: {
        title: 'entrance',
        value: '',
        label: 'Подъезд',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите номер подъезд',
        validation: {
          required: true,

        },
      },
      apartment: {
        title: 'apartment',
        value: '',
        label: 'Квартира',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите номер квартиру',
        validation: {
          required: true,

        },
      },
      intercom: {
        title: 'intercom',
        value: '',
        label: 'Домофон',
        type: 'text',
        valid: false,
        touched: false,
        errorMessage: 'Введите номер домофон',
        validation: {
          required: true,

        },
      },
      index: {
        title: 'index',
        value: '',
        label: 'Индекс',
        type: 'number',
        valid: false,
        touched: false,
        errorMessage: 'Введите индекс',
        validation: {
          required: true,

        },
      }
    });

    const validateControl = (value, validation) => {
      if (!validation) {
        return true
      }

      let isValid = true;

      if (validation.required) {
        isValid = value.trim() !== '' && isValid;
      }
      if (validation.phone) {
        isValid = validPhone(value) && isValid;
      }
      if (validation.email) {
        isValid = validEmail(value) && isValid;
      }
      if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid;
      }

      return isValid;
    }

    const changeHandler = (event, controlName) => {
      const formControls = { ...checkFormInput.value };
      const control = {...formControls[controlName]}

      control.value = event;
      control.touched = true;
      control.valid = validateControl(control.value, control.validation)

      formControls[controlName] = control;

      let isFormValid = true;
      Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid;
      });

      return checkFormInput.value = formControls
    }

    const profiteNew = (e) => {
      e.preventDefault();
      let countCheck = [];

      Object.values(checkFormInput.value).forEach(item => {
        if (!item.valid || !item.touched || !item.value) {
          item.touched = true;

          if (delivery.value === 'Самовывоз' && (item.title === 'street' || item.title === 'house' || item.title === 'entrance' || item.title ===  'apartment' || item.title === 'intercom' || item.title === 'index')) {
            item.touched = false
          }

          if (delivery.value === 'Курьером' && item.title === 'index') {
            item.touched = false
          }
        } else {
          countCheck[item.title] = item;
        }

      })

      const countryCheck = document.querySelector('.order-block__country .order-error');
      const regionCheck = document.querySelector('.order-block__region .order-error');
      const deliverCheck = document.querySelector('.order-delivery__wrap .order-error');
      const payCheck = document.querySelector('.order-pay__wrap .order-error');

      if (!country.value) {
        countryCheck.classList.add('_isError')
      } else {
        countryCheck.classList.remove('_isError')
        countCheck.country = country.value;
      }

      if (!region.value) {
        regionCheck.classList.add('_isError')
      } else {
        regionCheck.classList.remove('_isError')
        countCheck.region = region.value;
      }


      if (!delivery.value) {
        deliverCheck.classList.add('_isError')
      } else {
        deliverCheck.classList.remove('_isError')
        countCheck.delivery = delivery.value;
      }
      if (!pay.value) {
        payCheck.classList.add('_isError')
      } else {
        payCheck.classList.remove('_isError')
        countCheck.pay = pay.value;
      }

      if (countCheck.delivery === 'Самовывоз' && Object.keys(countCheck).length === 8) {
        return success.value = true
      }
      if (countCheck.delivery === 'Курьером' && Object.keys(countCheck).length === 13) {
        return success.value = true
      }
      if (countCheck.delivery === 'Почтой' && Object.keys(countCheck).length === 14) {
        return success.value = true
      }
    }


    onBeforeMount(() => {
      store.getters.localStore
    })

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
    const validPhone = value => {
      return /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.test(value);
    };
    const validEmail = value => {
      return /^[\w]{1}[\w-\]*@[\w-]+\.[a-z]{2,4}$/i.test(value);
    };
    return {
      country,
      countryOptions,
      regionRU,
      regionKZ,
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
      success,


      checkFormInput,
      changeHandler,
      profiteNew
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
  .order-error._isError{
    display: block
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
    grid-template-columns: repeat(auto-fill, 195px);
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
    grid-template-columns: repeat(auto-fill, 195px);
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