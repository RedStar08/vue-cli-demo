<template>
  <div class="modal-over flex flex-center flex-v-center flex-column">
    <div class="text-100">404</div>
    <div>太阳当头照，红星微微笑~</div>
    <div class="text-20 p-20 m-10">您来到了没有知识的荒漠~</div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String,
    default: '暂无数据',
  },
}
</script>

<style lang="scss" scoped></style>
