<template>
  <div class="meter-container">
    <div class="meter-title">{{ title }}</div>
    <div class="meter-row">
      <div v-for="n in number" :key="n" class="meter-cell">
        {{ n + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    max: Number,
  },
  computed: {
    number: function() {
      return Array.from(Array(this.max).keys());
    },
  },
};
</script>

<style lang="scss" scoped>
.meter-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.meter-row {
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: 25px;
  flex-wrap: wrap;
  margin-top: -10px;
}

.meter-cell {
  border: 1px black solid;
  width: 1.15rem;
  height: 1.2rem;
  border-radius: 5px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-top: 10px;
}
</style>
