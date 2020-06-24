<template>
  <section class="page">
    <header class="page__header" v-if="!elements.length">
      <SvgIcon name="add" />
      <h3 class="page__description">Выберите необходимый элемент для добавления его на страницу.</h3>
    </header>
    <transition-group tag="ul" name="fade" class="page__elements" v-else>
      <li v-for="element in elements" :key="element.id" class="page__element page-element">
        <component
          @delete="deleteElement(element.id)"
          @update="updateElement($event, element.id)"
          :is="element.component"
          :content="element.content"
        />
        <button class="page-element__delete" @click="deleteElement(element.id)">
          <SvgIcon name="trash" />
        </button>
      </li>
    </transition-group>
    <div class="page__types page-types">
      <h3 class="page-types__title">
        <SvgIcon name="choice" />
        Выберите элемент
      </h3>
      <ul class="page-types__list">
        <li class="page-types__item" v-for="type in types" :key="`type${type.id}`" @click="addElement(type)">
          <button class="page-types__btn">{{ type.name }}</button>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { ELEMENTS_TYPES } from '@/constants.js';
import { uuid } from 'vue-uuid';
import SvgIcon from '@/components/Common/SvgIcon';

/** объект с набором аиснхронных компонентов для элементов */
const objectWithAsyncComponents = {};

const AsyncComponent = componentName => ({
  component: import(`@/components/Content/BlockTypes/${componentName}.vue`)
});

ELEMENTS_TYPES.forEach(item => {
  objectWithAsyncComponents[item.component] = () =>
    AsyncComponent(item.component);
});

export default {
  name: 'Page',
  components: {
    ...objectWithAsyncComponents,
    SvgIcon
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
    addElement ({ component, content }) {
      const newElement = {
        id: uuid.v1(),
        component,
        content: { ...content }
      };
      this.$store.commit('common/addElement', {
        pageId: this.$route.params.page,
        element: newElement
      });
    },
    deleteElement (elementId) {
      this.$store.commit('common/deleteElement', {
        pageId: this.$route.params.page,
        elementId
      });
    },
    updateElement (data, elementId) {
      this.$store.commit('common/updateElement', {
        pageId: this.$route.params.page,
        elementId,
        data
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    svg {
      width: 100px;
      height: 100px;
      margin-right: 40px;
    }
  }
  &__description {
    font-size: 12px;
    font-weight: 300;
  }
  &__element {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}

.page-element {
  border: 1px dashed $black;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &__delete {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 10;
  }
  &:hover {
    .page-element__delete {
      opacity: 1;
    }
  }
}

.page-types {
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  &__title {
    font-size: 10px;
    background: $black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $white;
    border-radius: 4px;
    padding: 5px 10px;
    svg {
      width: 20px;
      height: 20px;
      fill: $white;
      margin-right: 10px;
    }
  }
  &__list {
    display: flex;
    margin-left: 10px;
    align-items: center;
  }
  &__item {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  &__btn {
    font-size: 10px;
    color: $black;
    border: 1px solid $black;
    padding: 6px 10px;
    transition: all 0.4s ease;
    border-radius: 2px;
    &:hover {
      color: $white;
      background: $black;
    }
  }
}
</style>
