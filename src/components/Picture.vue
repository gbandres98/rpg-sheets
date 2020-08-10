<template>
  <div class="image">
    <img :src="image" class="uploading-image" />
    <input type="file" accept="image/*" @change="upload" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      image: this.value,
    };
  },
  methods: {
    upload(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.image = e.target.result;
        this.$emit("change", this.image);
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
