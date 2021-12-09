<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts-map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A540897e1a374cf22bfea74b945708d984b868560de6f12ba06f232435ff537d9&amp;source=constructor" width="743" height="569" frameborder="0"></iframe>
      </div>
      <table class="about-table">
        <tbody>
        <tr>
          <td>Юр. адрес</td>
          <td>ул. Ленина дом 1</td>
        </tr>
        <tr>
          <td>Физ. адрес</td>
          <td>ул. Петрова д. 44</td>
        </tr>
        <tr>
          <td>Контакты</td>
          <td>
            <a href="#">+7 800 123-65-47</a><br>
            <a href="#">mial@mail.ru</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
name: "Contacts"
}
</script>

<style scoped>
  .contacts-map{
    margin: 30px 0;
  }
</style>