<template>
  <div class="felx flex-center flex-v-center">
    <span class="text-20 color-gray">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
   msg: {
      type: String,
      default: '暂无数据',
    },
  },
}
</script>

<style lang="scss" scoped></style>
