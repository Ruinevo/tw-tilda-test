<template>
  <div id="app">
    <TheHeader />
    <TheContent />
    <Loader v-if="loading" />
    <transition name="fade">
      <ErrorNotification @hook:mounted="hideError" :error="error" v-if="error" />
    </transition>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader';
import TheContent from '@/components/Content/TheContent';
import Loader from '@/components/Common/Loader';
import ErrorNotification from '@/components/Common/ErrorNotification';
import { mapState } from 'vuex';
import { HIDE_ERROR_DELAY } from '@/constants.js'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheContent,
    Loader,
    ErrorNotification
  },
  computed: {
    ...mapState(['loading', 'error'])
  },
  methods: {
    hideError () {
      setTimeout(() => {
        this.$store.commit('setError', null);
      }, HIDE_ERROR_DELAY);
    }
  }
}
</script>

<style lang="scss">
@import './assets/common.scss';
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: $grey;
}
</style>
