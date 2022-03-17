<script>
export default {
  props: {
    src: {
      type: String
    }
  }
}
</script>

<template>
<img class="card-img-top" :src="src">
</template>

<style lang="scss" scoped>
</style>