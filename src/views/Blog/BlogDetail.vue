<template>
    <div class="blog-detail">
      <div class="container">
        <div class="blog-detail__wrap">
          <h1 class="blog-detail__title">{{detailPost.title}}</h1>
          <div class="blog-detail__body">{{detailPost.body}}</div>
        </div>
      </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import {onBeforeMount, computed} from 'vue'

export default {
  name: "BlogDetail",
  props: ['id'],
  setup(props) {
    const store = useStore();

    onBeforeMount(async () => {
      await store.dispatch('getDetailPost', props.id)
    })

    return {
      detailPost: computed(() => store.getters.detailPost)
    }
  }
}
</script>

<style scoped>
  .blog-detail{
    margin-bottom: 100px;
  }
  .blog-detail__wrap{
    max-width: 800px;
    margin: 0 auto;
  }
  .blog-detail__title{
    text-transform: uppercase;
    text-align: center;
  }
  .blog-detail__body{
    font-size: 20px;
    line-height: 24px;
  }
</style>