<template>
  <label class="order-block__label">
    <input class="order-data__input"
           :type="data.type"
           :name="data.title"
           :placeholder="data.label"
           :required="data.validation.required"
           @change="isInvalid(data.valid,data.touched,data.validation)"
           autocomplete="off"
    >
      <span class="order-error" :class="{isError: isInvalid(data.valid, data.touched, data.validation)}">{{data.errorMessage}}</span>
  </label>
</template>

<script>
export default {
  name: "Input",
  props: ['data'],
  setup() {
    const isInvalid = (valid, touched, validation) => {
      if (valid !== undefined && touched !== undefined && validation !== undefined) {
        return !valid && validation && touched
      }
    }

    return {
      isInvalid,
    }
  }
}
</script>

<style scoped>
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
.order-error{
  display: none;
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  left: 0;
}
.order-error.isError{
  display: block;
}
</style>