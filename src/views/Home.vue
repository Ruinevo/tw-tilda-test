<template>
  <section class="home">
    <h2 class="home__title">
      Добро пожаловать, {{ email }}!
    </h2>
    <div class="home__content">
      <p class="home__description">Выберите созданную ранее страницу или создайте новую:</p>
      <transition-group name="list" class="home__pages" v-if="pages.length">
        <li v-for="page in pages" class="home__page home-page" :key="page.id" @click="goToPage(page.id)">
          <p class="home-page__date">Дата создания: <br>{{ $moment(page.date).format('DD.MM.YYYY HH:mm') }}</p>
          <button class="home-page__delete" @click.stop="deletePage(page.id)">
            <SvgIcon name="trash" />
          </button>
        </li>
      </transition-group>
      <p class="home__description" v-else>Список Ваших страниц пока пуст...</p>
      <vs-button color="rgb(59,222,200)" gradient size="xl" type="submit" class="home__create" @click="createNewPage">Создать страницу</vs-button>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { uuid } from 'vue-uuid';
import SvgIcon from '@/components/Common/SvgIcon';

export default {
  name: 'Home',
  components: {
    SvgIcon
  },
  computed: {
    ...mapState('common', ['pages']),
    ...mapGetters('auth', ['email'])
  },
  methods: {
    createNewPage () {
      const id = uuid.v1();
      const date = new Date();
      this.$store.commit('common/setPage', { id, date, elements: [] });
      this.$router.push({ name: 'Page', params: { page: id } });
    },
    deletePage (id) {
      this.$store.commit('common/deletePage', id);
    },
    goToPage (id) {
      this.$router.push({ name: 'Page', params: { page: id } });
    }
  }
}
</script>

<style lang="scss" scoped>
$margin: 10px;

.home {
  text-align: center;
  padding: 50px;
  &__title {
    font-size: 16px;
    color: #000;
    margin-bottom: 20px;
  }
  &__create {
    margin: 40px auto;
    width: 90%;
    max-width: 400px;
  }
  &__description {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 300;
    color: $light-grey;
  }
  &__pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }
  &__page {
    width: calc(50% - #{$margin});
    background: $green;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-weight: 300;
    margin-bottom: 10px;
    min-height: 100px;
    position: relative;
    cursor: pointer;
    &:nth-child(odd) {
      margin-right: $margin;
    }
    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      opacity: 0;
      top: 5px;
      right: 5px;
      transition: opacity 0.4s ease;
    }
    &:hover svg {
      opacity: 1;
    }
  }
}

</style>
