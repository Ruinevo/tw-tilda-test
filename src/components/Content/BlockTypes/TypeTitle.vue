<template>
  <div class='title'>
    <input v-focus class="title__input" type="text" v-if="editMode" @blur="stopEdit" v-model="text">
    <h1 class="title__content" v-else-if="!editMode && text" @click="startEdit" :style="{ fontSize: fontSize + 'px' }">{{ text }}</h1>
    <button class="title__add" v-else @click="editMode = true"><SvgIcon name="plus" /></button>
    <div class="title__size title-size">
      <p class="title-size__title">Размер шрифта</p>
      <div class="title-size__controls">
        <button class="title-size__btn" @click="changeFontSize(fontSize - 1)">-</button>
        <span>{{ fontSize }}</span>
        <button class="title-size__btn" @click="changeFontSize(fontSize + 1)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/Common/SvgIcon';

const MAX_FONT_SIZE = 48;

export default {
  name: 'TypeTitle',
  components: {
    SvgIcon
  },
  props: {
    content: Object
  },
  data: () => ({
    editMode: false,
    value: ''
  }),
  computed: {
    text: {
      get () {
        return this.content.text;
      },
      set (v) {
        this.update('text', v);
      }
    },
    fontSize: {
      get () {
        return this.content.fontSize;
      },
      set (v) {
        this.update('fontSize', v);
      }
    }
  },
  methods: {
    changeFontSize (newSize) {
      if (newSize > 0 && newSize <= MAX_FONT_SIZE) {
        this.fontSize = newSize;
      }
    },
    startEdit () {
      this.editMode = true;
      this.value = '';
    },
    stopEdit () {
      this.editMode = false;
    },
    update (key, value) {
      this.$emit('update', { key, value });
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__content {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  &__add {
    width: 30px;
    height: 30px;
  }
  &__input {
    border: none;
    background: none;
    width: 100%;
    border: 1px solid $light-grey;
    border-radius: 2px;
    padding: 10px;
  }
  &__size {
    position: absolute;
    left: 20px;
    top: 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  &:hover {
    .title__size {
      opacity: 1;
    }
  }
}

.title-size {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  span {
    margin-left: 10px;
    margin-right: 10px;
  }
  &__btn {
    padding: 5px;
  }
}
</style>>
