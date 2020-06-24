<template>
  <section class="register">
    <form action="#" class="register__from" @submit.prevent="signUp">
      <vs-input v-model="login" placeholder="Login" class="register__item" />
      <vs-input v-model="email" placeholder="Email" class="register__item" />
      <vs-input type="password" v-model="password" placeholder="Password" class="register__item" />
      <vs-button type="submit" class="register__submit">Регистрация</vs-button>
    </form>
    <p class="register__caption">Уже зарегестрированы? Войдите <router-link to="/signin">здесь</router-link></p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { ERRORS_MESSAGES } from '@/constants.js';

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    login: ''
  }),
  methods: {
    ...mapActions('auth', ['userSignUp']),
    signUp () {
      if (this.email && this.password && this.login) {
        this.userSignUp({ email: this.email, password: this.password, login: this.login });
      } else {
        this.$store.commit('setError', ERRORS_MESSAGES.isFieldRequired);
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.register {
  background: $white;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: $shadow;
  margin: 0 auto;
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
