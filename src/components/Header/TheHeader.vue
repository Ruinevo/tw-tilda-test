<template>
  <header class='header'>
    <router-link class="header__logo" to="/">
      <SvgIcon name="constructor" />
      Adlit.
    </router-link>
    <div class="header__auth">
      <template v-if="!email">
        <vs-button transparent class="login__btn" to="/signin">Войти</vs-button>
        <vs-button border class="login__btn" to="/signup">Зарегистрироваться</vs-button>
      </template>
      <h2 class="header__email">
        {{ email }}
      </h2>
      <vs-button v-if="myPagesBtnShowCondition" warn gradient to="/">Мои страницы</vs-button>
      <vs-button v-if="email" danger gradient class="login__btn" @click="userSignOut">Выйти</vs-button>
    </div>
  </header>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import SvgIcon from '@/components/Common/SvgIcon';

export default {
  name: 'TheHeader',
  components: {
    SvgIcon
  },
  computed: {
    ...mapGetters('auth', ['email']),
    /** Условие для отображения кнопки "Мои страницы" */
    myPagesBtnShowCondition () {
      return this.email && this.$route.name !== 'Home';
    }
  },
  methods: {
    ...mapActions('auth', ['userSignOut'])
  }
}

</script>

<style lang="scss" scoped>
.header {
  min-height: 80px;
  background: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: $shadow;
  &__auth {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__email {
    font-size: 12px;
    font-weight: 300;
    color: $black;
    margin-right: 20px;
  }
  &__logo {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: #000;
    font-weight: 500;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    svg {
      flex-shrink: 0;
      margin-right: 10px;
    }
  }
}
</style>
