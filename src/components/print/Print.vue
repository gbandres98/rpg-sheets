<template>
  <div class="sheet">
    <button @click="edit" class="no-print">Editar</button>
    <Meter title="HP" :max="this.hp" />
    <Meter title="MP" :max="this.mp" />
    <div class="top-info">
      <div class="picture"><img :src="sheet.picture" /></div>
      <div class="char-info">
        <div>{{ sheet.name }}, {{ sheet.title }}</div>
        <div class="attributes-container-print">
          <div class="attribute-print">
            <label>Fuerza:</label>
            <div class="value">{{ this.sheet.attributes.str }}</div>
            <div>
              (bonus:
              <div class="spacer" />
              )
            </div>
          </div>
          <div class="attribute-print">
            <label>Agilidad:</label>
            <div class="value">{{ this.sheet.attributes.agi }}</div>
            <div>
              (bonus:
              <div class="spacer" />
              )
            </div>
          </div>
          <div class="attribute-print">
            <label>Inteligencia:</label>
            <div class="value">{{ this.sheet.attributes.int }}</div>
            <div>
              (bonus:
              <div class="spacer" />
              )
            </div>
          </div>
          <div class="attribute-print">
            <label>Ingenio:</label>
            <div class="value">{{ this.sheet.attributes.ing }}</div>
            <div>
              (bonus:
              <div class="spacer" />
              )
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-group">
            <label>Evasión:</label>
            <div>
              {{ this.evasion }} (bonus:
              <div class="spacer" />
              )
            </div>
          </div>
          <div class="form-group">
            <label>Armadura:</label>
            <div class="spacer" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-info">
      <h2>Habilidades:</h2>
      <div v-for="skill in sheet.skills" :key="skill.id" class="skill-print">
        <label>{{ skill.name }}:</label>{{ skill.desc }}
      </div>
      <h2>Armas:</h2>
      <div
        v-for="weapon in sheet.weapons"
        :key="weapon.id"
        class="weapon-print"
      >
        <div class="weapon-print-first">
          <label>{{ weapon.name }}:</label>
          <div class="dmg">{{ weapon.dmg }}</div>
          <div class="type">({{ weapon.type }})</div>
        </div>
        <div class="desc">{{ weapon.desc }}</div>
      </div>
      <h2>Objetos:</h2>
      <div class="items">
        <div
          v-for="n in Array(40).keys()"
          :key="n"
          class="items-placeholder-pair"
        >
          <div class="items-placeholder" />
          <div class="items-placeholder" />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./print.js"></script>
<style src="./print.scss" lang="scss"></style>
