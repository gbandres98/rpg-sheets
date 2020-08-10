<template>
  <div class="weapons-container">
    <h2>Armas:</h2>
    <div class="weapons">
      <div v-for="weapon in weaponArray" class="weapon" :key="weapon.id">
        <input v-model="weapon.name" placeholder="Nombre" />:
        <span class="tooltip"
          ><input v-model="weapon.dmg" placeholder="Daño" size="6" /><span
            class="tooltiptext"
            >Por ejemplo, 1d6 <i class="fas fa-plus fa-xs"></i> 2</span
          ></span
        >
        <span class="tooltip">
          <select v-model="weapon.type">
            <option>FUE</option>
            <option>AGI</option> </select
          ><span class="tooltiptext"
            >Qué atributo se utiliza para las tiradas de acierto con este
            arma</span
          ></span
        >
        <input v-model="weapon.desc" class="input-fluid" placeholder="Efecto" />
        <button @click="remove(weapon.id)"><i class="fas fa-trash"></i></button>
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
      weaponArray: this.value,
    };
  },
  methods: {
    add() {
      this.weaponArray.push({
        id: new Date(),
        name: "",
        type: "FUE",
        dmg: "",
        desc: "",
      });
    },
    remove(id) {
      this.weaponArray = this.weaponArray.filter((s) => s.id != id);
    },
  },
  watch: {
    weaponArray() {
      this.$emit("change", this.weaponArray);
    },
  },
};
</script>

<style lang="scss" scoped>
.weapons-container {
  margin-top: 20px;
  max-height: 250px;
  overflow-y: scroll;
}

h2 {
  margin-top: 0;
  margin-bottom: 15px;
}

button {
  background: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
}

select {
  border: 1px black solid;
  border-radius: 8px;
  outline: none;
}

select::-moz-focus-inner {
  border: 0;
}

.weapon {
  display: flex;
  input {
    padding: 10px;
    border: none;
    border-radius: 10px;
  }
  margin-bottom: 5px;
}
</style>
