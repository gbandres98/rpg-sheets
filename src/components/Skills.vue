<template>
  <div class="skills-container">
    <h2>Habilidades:</h2>
    <div class="skills">
      <div v-for="skill in skillArray" class="skill" :key="skill.id">
        <input v-model="skill.name" placeholder="Nombre" />:
        <input v-model="skill.desc" class="input-fluid" placeholder="Efecto" />
        <button @click="remove(skill.id)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    <button @click="add" class="add">
      <i class="fas fa-plus-square fa-lg"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Array,
  },
  data() {
    return {
      skillArray: this.value,
    };
  },
  methods: {
    add() {
      this.skillArray.push({
        id: new Date(),
        name: "",
        desc: "",
      });
    },
    remove(id) {
      this.skillArray = this.skillArray.filter((s) => s.id != id);
    },
  },
  watch: {
    skillArray() {
      this.$emit("change", this.skillArray);
    },
  },
};
</script>

<style lang="scss" scoped>
.skills-container {
  max-height: 250px;
  overflow-y: scroll;
}
h2 {
  margin-bottom: 15px;
}

button {
  background: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  outline: none;
}

button::-moz-focus-inner {
  border: 0;
}

.skill {
  display: flex;
  input {
    padding: 10px;
    border: none;
    border-radius: 10px;
  }
  margin-bottom: 5px;
}
</style>
