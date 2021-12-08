<template>
  <div class="about">
    <div class="container">
      <div class="about-wrap">
        <h1>О компании</h1>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores dignissimos doloribus est fuga id ipsam laborum, magnam molestias nulla rem,
          saepe similique vero vitae voluptas voluptatibus. Ad dolor molestias quos!</p>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quia!</p>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nesciunt nostrum omnis rerum
          temporibus? Culpa iusto nisi odit pariatur perspiciatis, voluptate? Accusamus alias asperiores aut beatae
          consequatur dignissimos illo incidunt ipsum nemo, nihil optio, sequi sit suscipit! Adipisci dolores, eaque
          eos facere neque, pariatur perspiciatis quae ratione tempore velit, vitae?</p>
        <div class="about-map">
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
  </div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>
  .about-wrap{
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
  .about-text{
    text-align: justify;
  }
  .about-map{
    margin: 30px 0;
  }
</style>