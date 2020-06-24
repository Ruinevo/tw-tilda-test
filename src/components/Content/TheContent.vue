<template>
  <div class='content'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TheContent'
}
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
</style>
