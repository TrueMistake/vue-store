<template>
  <section class="blog">
    <div class="container">
      <div class="h2">БЛОГ</div>
      <template v-if="loading">
        Загрузка...
      </template>
      <template v-else>
        <div class="blog-list">
          <router-link :to="'/blog/' + post.id" tag="a" v-for="post of posts" :key="post.id" class="blog-item">
            <div class="blog-item__tile">{{post.title}}</div>
            <div class="blog-item__body">{{post.body}}</div>
          </router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import {useStore} from "vuex";
import {onBeforeMount, computed} from 'vue'

export default {
  name: "BlogMain",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch('getMainPosts', {limit: 3})
    })

    return {
      posts: computed(() => store.getters.getPosts)
    }
  }
}
</script>

<style scoped>
  .blog{
    margin: 70px 0;
  }
  .h2{
    font-size: 30px;
    line-height: 34px;
    color: #000;
    font-weight: bold;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #DADADA;
    position: relative;
  }
  .h2:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 3px;
    width: 60px;
    background-color: #F8694A;
  }
  .blog-list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  @media screen and (max-width: 767px){
    .blog-list{
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 20px;
    }
  }
  .blog-item{
    border: 1px solid #DADADA;
    border-radius: 8px;
    padding: 15px;
  }
  .blog-item__tile{
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #000;
  }
  .blog-item__body{
    font-size: 16px;
    line-height: 18px;
    color: #4A4E5A;
  }
</style>