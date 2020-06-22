<template>
  <div class="error">
    <SvgIcon name="attention" class="error__attention" />
    {{ error }}
  </div>
</template>

<script>
import SvgIcon from '@/components/Common/SvgIcon';
export default {
  name: 'ErrorNotification',
  components: {
    SvgIcon
  },
  props: {
    error: String
  }
}
</script>

<style lang="scss" scoped>
.error {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 40px 10px 25px;
  font-size: 10px;
  font-weight: 300;
  color: $white;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: $red;
  &__attention {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>
