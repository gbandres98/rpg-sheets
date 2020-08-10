<template>
  <div>
    <Sheet v-if="mode === 'edit'" @change="mode = 'print'" />
    <Print v-if="mode === 'print'" @change="mode = 'edit'" />
  </div>
</template>

<script>
import Sheet from "./components/sheet/Sheet.vue";
import Print from "./components/print/Print.vue";

export default {
  name: "App",
  components: {
    Sheet,
    Print,
  },
  data() {
    return {
      mode: "edit",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
