import Meter from "../Meter.vue";
import Sliders from "../Sliders.vue";
import Skills from "../Skills.vue";
import Weapons from "../Weapons.vue";
import Picture from "../Picture.vue";

export default {
  data() {
    return {
      sheet: {
        name: "",
        title: "",
        picture: null,
        attributes: {
          str: 0,
          agi: 0,
          int: 0,
          ing: 0,
        },
        mage: false,
        skills: [],
        weapons: [],
      },
    };
  },
  components: {
    Meter,
    Sliders,
    Skills,
    Weapons,
    Picture,
  },
  computed: {
    hp() {
      return (this.sheet.mage ? 10 : 20) + this.sheet.attributes.str * 2;
    },
    evasion() {
      return Math.floor(this.sheet.attributes.agi / 2);
    },
    mp() {
      return this.sheet.mage ? this.sheet.attributes.int : 0;
    },
  },
  methods: {
    handleAttributeChange(attributes) {
      this.sheet.attributes = attributes;
    },
    handleSkillChange(skills) {
      this.sheet.skills = skills;
    },
    handleWeaponChange(weapons) {
      this.sheet.weapons = weapons;
    },
    handlePictureChange(picture) {
      this.sheet.picture = picture;
    },
    print() {
      this.$emit("change");
    },
  },
  watch: {
    sheet: {
      handler() {
        localStorage.setItem("sheet", JSON.stringify(this.sheet));
      },
      deep: true,
    },
  },
  created() {
    if (localStorage.getItem("sheet"))
      this.sheet = JSON.parse(localStorage.getItem("sheet"));
    else localStorage.setItem("sheet", JSON.stringify(this.sheet));
  },
};
