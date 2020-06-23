<template>
  <section class="page">
    <header class="page__header">
      <!-- <SvgIcon name="manual" /> -->
      <div class="page__description">Выберите необходимый элемент для добавления его на страницу</div>
    </header>
    <ul>
      <li v-for="element in elements" :key="`element${element.id}`">
        <component :is="element.component" />
      </li>
    </ul>
    <ul class="page__types">
      <li v-for="type in types" :key="`type${type.id}`" @click="addElement(type)">{{ type.name }}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { ELEMENTS_TYPES } from '@/constants.js';

/** объект с набором аиснхронных компонентов для элементов */
const objectWithAsyncComponents = {};

const AsyncComponent = (componentName) => ({
  component: import(`@/components/Content/Types/${componentName}.vue`)
});

ELEMENTS_TYPES.forEach(item => {
  objectWithAsyncComponents[item.component] = () => (AsyncComponent(item.component))
})

export default {
  name: 'Page',
  components: {
    ...objectWithAsyncComponents
  },
  computed: {
    ...mapGetters('common', ['pageById']),
    elements () {
      const page = this.pageById(this.$route.params.page);
      return page.elements || [];
    }
  },
  data: () => ({
    types: ELEMENTS_TYPES
  }),
  methods: {
    addElement (type) {
      this.$store.commit('common/addElement', {
        pageId: this.$route.params.page,
        component: type.component
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  border: 1px solid red;
  width: 100%;
}
</style>
