<template>
  <div class="comments">
    <div v-for="comment of comments" :key="comment.id" class="comment-item">
      <div class="comment-name"><span>Заголовок:</span> {{comment.name}}</div>
      <div class="comment-body"><span>Комментарий:</span> {{comment.body}}</div>
      <div class="comment-email"><span>email:</span> {{comment.email}}</div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {onBeforeMount, computed} from 'vue'
export default {
  name: "Comments",
  props: ['id'],
  setup(props) {
    const store = useStore();

    onBeforeMount(async () => {
      console.log('props',props)
      await store.dispatch('getAllCommentsPost', props.id)
    })

    return {
      comments: computed(() => store.getters.allCommentsPost)
    }
  }
}
</script>

<style scoped>
  .comments{
    border-top: 1px solid #DADADA;
    padding-top: 30px;
    margin-top: 50px;
  }
  .comments span{
    font-weight: bold;
  }
  .comment-item{
    border: 1px solid #DADADA;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
  }
  .comment-name,
  .comment-body{
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .comment-email{
    font-size: 14px;
    line-height: 16px;
  }
</style>