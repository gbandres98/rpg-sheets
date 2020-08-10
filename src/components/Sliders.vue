<template>
  <div class="sliders-container">
    <div class="sliders">
      <input
        class="slider-str"
        type="range"
        min="0"
        max="20"
        ref="strSlider"
        :value="str"
        @input="update()"
      />
      <input
        class="slider-agi"
        type="range"
        min="0"
        max="20"
        ref="agiSlider"
        :value="agi"
        @input="update()"
      />
      <input
        class="slider-int"
        type="range"
        min="0"
        max="20"
        ref="intSlider"
        :value="int"
        @input="update()"
      />
      <input
        class="slider-ing"
        type="range"
        min="0"
        max="20"
        ref="ingSlider"
        :value="ing"
        @input="update"
      />
    </div>
    <div class="count">Puntos: {{ count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    attributes: Object,
  },
  computed: {
    count: function() {
      return (
        20 -
        this.attributes.str -
        this.attributes.agi -
        this.attributes.int -
        this.attributes.ing
      );
    },
    str: function() {
      return this.attributes.str;
    },
    agi: function() {
      return this.attributes.agi;
    },
    int: function() {
      return this.attributes.int;
    },
    ing: function() {
      return this.attributes.ing;
    },
  },
  methods: {
    update() {
      this.$emit("change", {
        str: +this.$refs.strSlider.value,
        agi: +this.$refs.agiSlider.value,
        int: +this.$refs.intSlider.value,
        ing: +this.$refs.ingSlider.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sliders-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sliders {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  height: 80%;
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 250px; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* Special styling for WebKit/Blink */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 35px;
  width: 12px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 35px;
  width: 12px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

/* All the same stuff for IE */
input[type="range"]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 35px;
  width: 12px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type="range"]::-ms-fill-upper {
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

.slider-str::-moz-range-track {
  background: #a93030;
}

.slider-str::-webkit-slider-runnable-track {
  background: #a93030;
}

.slider-str:focus::-webkit-slider-runnable-track {
  background: #a93030;
}

.slider-str::-ms-fill-lower {
  background: #a93030;
}

.slider-str:focus::-ms-fill-lower {
  background: #a93030;
}

.slider-str::-ms-fill-upper {
  background: #a93030;
}

.slider-str:focus::-ms-fill-upper {
  background: #a93030;
}

.slider-agi::-moz-range-track {
  background: #30a94e;
}

.slider-agi::-webkit-slider-runnable-track {
  background: #30a94e;
}

.slider-agi:focus::-webkit-slider-runnable-track {
  background: #30a94e;
}

.slider-agi::-ms-fill-lower {
  background: #30a94e;
}

.slider-agi:focus::-ms-fill-lower {
  background: #30a94e;
}

.slider-agi::-ms-fill-upper {
  background: #30a94e;
}

.slider-agi:focus::-ms-fill-upper {
  background: #30a94e;
}

.slider-int::-moz-range-track {
  background: #3071a9;
}

.slider-int::-webkit-slider-runnable-track {
  background: #3071a9;
}

.slider-int:focus::-webkit-slider-runnable-track {
  background: #3071a9;
}

.slider-int::-ms-fill-lower {
  background: #3071a9;
}

.slider-int:focus::-ms-fill-lower {
  background: #3071a9;
}

.slider-int::-ms-fill-upper {
  background: #3071a9;
}

.slider-int:focus::-ms-fill-upper {
  background: #3071a9;
}

.slider-ing::-moz-range-track {
  background: #7d30a9;
}

.slider-ing::-webkit-slider-runnable-track {
  background: #7d30a9;
}

.slider-ing:focus::-webkit-slider-runnable-track {
  background: #7d30a9;
}

.slider-ing::-ms-fill-lower {
  background: #7d30a9;
}

.slider-ing:focus::-ms-fill-lower {
  background: #7d30a9;
}

.slider-ing::-ms-fill-upper {
  background: #7d30a9;
}

.slider-ing:focus::-ms-fill-upper {
  background: #7d30a9;
}
</style>
