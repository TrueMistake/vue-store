<template>
  <main class="main">
    <app-swiper></app-swiper>
    <app-slider-product></app-slider-product>
    <h1>Магазин True</h1>
    <div class="main-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eligendi eum fugiat harum nam obcaecati odit omnis
      perspiciatis quam reprehenderit repudiandae rerum, sapiente sequi. Aspernatur ea laboriosam quis repellendus?
      Accusantium animi aperiam aut beatae culpa cupiditate dolor dolore dolores eaque eum laudantium modi necessitatibus,
      porro quam, rerum sequi suscipit voluptate voluptatum? Debitis deserunt dignissimos esse ex harum incidunt minus
      nostrum numquam perspiciatis quasi quo recusandae, repellendus sed sequi tenetur vel voluptas voluptatum.
      Assumenda beatae distinctio dolores dolorum, ea est, hic inventore iste iusto magni neque nobis nostrum odit
      pariatur recusandae repellat repudiandae ullam vel! Atque illum necessitatibus praesentium repellat repellendus.
    </div>
  </main>
</template>

<script>
import appSwiper from '../components/MainSlider'
import appSliderProduct from '../components/SliderProducts'

export default {
  name: 'Main',
  components: {
    'app-swiper': appSwiper,
    'app-slider-product': appSliderProduct
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .main-text{
    width: 800px;
    margin: 50px auto 50px;
    text-align: justify;
    font-size: 18px;
    line-height: 22px;
  }
</style>