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
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 100px 0;
  max-width: 980px;
  margin: 0 auto;
}
</style>
