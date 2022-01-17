<template>
  <div class="blog">
    <div class="container">
      <h1>Блог</h1>
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
        <div class="paginations">
          <div
              v-for="el of paginations/limit"
              :key="el"
              class="paginations-item"
              :class="{'paginations-current': page === el}"
              @click="changePage(el)"
          >{{el}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, ref, computed} from "@vue/runtime-core";
import {useStore} from "vuex";

export default {
  name: "Blog",
  setup() {
    const store = useStore();
    const limit = 10;
    const page = ref(1);

    onBeforeMount(async () => {
      await store.dispatch('getPosts', {limit, page: page.value})
    })

    const changePage = (pagePagination) => {
      page.value = pagePagination;
      store.dispatch('changePagePagination', {limit, page: pagePagination})
    }

    return {
      loading: computed(() => store.getters.loading),
      posts: computed(() => store.getters.getPosts),
      paginations: computed(() => store.getters.allCount),
      limit,
      page,
      changePage
    }
  }
}
</script>

<style scoped>
  .blog{
    margin-bottom: 100px;
  }
  .blog-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media screen and (max-width: 576px){
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

  .paginations{
    display: grid;
    grid-template-columns: repeat(10, auto);
    justify-content: center;
    align-items: center;
    grid-column-gap: 10px;
    margin-top: 50px;
  }
  .paginations-item{
    padding: 2px 10px;
    border: 1px solid #DADADA;
    border-radius: 4px;
    cursor: pointer;
  }
  .paginations-current{
    background: #4A4E5A;
    color: #fff;
  }
</style>