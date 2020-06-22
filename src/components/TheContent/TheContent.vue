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
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
}
</style>
