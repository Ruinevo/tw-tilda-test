<template>
  <div class='image'>
    <img v-if="url" :src="url" class="image__photo">
    <SvgIcon class="image__add" name="plus" v-else />
    <label class="image__label">
      <input class="image__input" type="file" @change="getImage" accept="image/*">
    </label>
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
    value: '',
    imageData: ''
  }),
  computed: {
    url: {
      get () {
        return this.content.url;
      },
      set (v) {
        this.update('url', v);
      }
    }
  },
  methods: {
    getImage ({ target }) {
      if (target.files && target.files[0]) {
        var reader = new FileReader();
        reader.onload = ({ target }) => {
          this.url = target.result;
        }
        reader.readAsDataURL(target.files[0]);
      }
    },
    update (key, value) {
      this.$emit('update', { key, value });
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  &__input {
    display: none;
  }
  &__label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
  }
  &__add {
    width: 100px;
    height: 100px;
    align-self: center;
  }

}
</style>>
