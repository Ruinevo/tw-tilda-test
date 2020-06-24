<template>
  <div class='title'>
    <input v-focus class="title__input" type="text" v-if="editMode" @blur="stopEdit" v-model="text">
    <h1 class="title__content" v-else-if="!editMode && text" @click="startEdit" :style="{color, fontSize}">{{ text }}</h1>
    <button class="title__add" v-else @click="editMode = true"><SvgIcon name="plus" /></button>
  </div>
</template>

<script>
import SvgIcon from '@/components/Common/SvgIcon';

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
    },
    color: {
      get () {
        return this.content.color;
      },
      set (v) {
        this.update('color', v);
      }
    }
  },
  methods: {
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
}
</style>>
