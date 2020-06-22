<template>
  <section class="login">
    <form action="#" class="login__from" @submit.prevent="signIn">
      <vs-input v-model="email" placeholder="Email" class="login__item" />
      <vs-input type="password" v-model="password" placeholder="Password" class="login__item" />
      <vs-button type="submit" class="login__submit">Войти</vs-button>
    </form>
    <p class="login__caption">Впервые? Зарегистрируйтесь <router-link to="/signup">здесь</router-link></p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { ERRORS_MESSAGES } from '@/constants.js';

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions('auth', ['userSignIn']),
    signIn () {
      if (this.email && this.password) {
        this.userSignIn({ email: this.email, password: this.password });
      } else {
        this.$store.commit('setError', ERRORS_MESSAGES.isFieldRequired);
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
  background: $white;
  max-width: 500px;
  border-radius: 4px;
  box-shadow: $shadow;
  text-align: center;
  padding: 50px;
  &__item {
    margin-bottom: 20px;
  }
  &__submit {
    width: 100px;
    margin: 0px auto;
    margin-top: 40px;
  }
  &__caption {
    font-size: 10px;
    font-weight: 300;
    margin-top: 10px;
  }
}
</style>
