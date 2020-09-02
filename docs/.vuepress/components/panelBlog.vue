<template>
  <div class="customer-component">
    <div class="left">{{title}}</div>
    <div class="center">{{descrb}}</div>
    <div class="right">{{times}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    descrb: String,
    times: String
  }
}
</script>
<style lang="stylus">
</style>