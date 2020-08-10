<template>
  <div class="sheet">
    <button @click="print">Imprimir</button>
    <Meter title="HP" :max="this.hp" />
    <Meter title="MP" :max="this.mp" />
    <div class="top-info">
      <Picture :value="sheet.picture" @change="handlePictureChange" />
      <div class="char-info">
        <div class="form-group">
          <label>Nombre:</label>
          <input
            class="input-fluid"
            placeholder="Nombre"
            v-model="sheet.name"
          />
        </div>
        <div class="form-group">
          <label class="tooltip m-l-1"
            >Título:<span class="tooltiptext"
              >En este sistema no hay clases, así que debes elegir un título que
              represente las capacidades de tu personaje como "Mago de fuego" o
              "el Gigante".</span
            ></label
          >
          <input
            class="input-fluid"
            placeholder="Título"
            v-model="sheet.title"
          />
        </div>
        <div class="form-group">
          <label class="tooltip"
            >Mago:<span class="tooltiptext"
              >Elige si tu personaje es capaz de utilizar hechizos mágicos</span
            ></label
          >
          <p-check class="p-curve p-jelly" color="info" v-model="sheet.mage" />
        </div>
        <div class="form-group">
          <div class="form-group">
            <label>Evasión:</label>
            {{ this.evasion }} (bonus:
            <div class="box-1 m-1" />
            )
          </div>
          <div class="form-group">
            <label>Armadura:</label>
            <div class="box-1" />
          </div>
        </div>
      </div>
    </div>
    <div class="mid-info">
      <div class="attributes-container">
        <div class="attribute">
          <label class="tooltip"
            >FUE:<span class="tooltiptext"
              >Fuerza: Cada punto aumenta en 2 la salud. Se utiliza para atacar
              con armas de fuerza y en tiradas relacionadas con la potencia
              física.</span
            ></label
          >
          {{ this.sheet.attributes.str }} (bonus:
          <div class="box-1 m-1" />
          )
        </div>
        <div class="attribute">
          <label class="tooltip"
            >AGI:<span class="tooltiptext"
              >Agilidad: Cada dos puntos aumentan en 1 el bonus de evasión. Se
              utiliza para atacar con armas de agilidad y en tiradas
              relacionadas con la destreza o la habilidad física.</span
            ></label
          >
          {{ this.sheet.attributes.agi }} (bonus:
          <div class="box-1 m-1" />
          )
        </div>
        <div class="attribute">
          <label class="tooltip"
            >INT:<span class="tooltiptext"
              >Inteligencia: Cada punto aumenta en 1 el maná máximo. Se utiliza
              para lanzar hechizos y en tiradas relacionadas con el conocimiento
              o la capacidad de razonamiento de un personaje.</span
            ></label
          >
          {{ this.sheet.attributes.int }} (bonus:
          <div class="box-1 m-1" />
          )
        </div>
        <div class="attribute">
          <label class="tooltip"
            >ING:<span class="tooltiptext"
              >Ingenio: Representa la percepción, el carisma, la capacidad de
              improvisación e incluso la suerte de un personaje. Aunque no
              aporta beneficios para el combate, un personaje con suficiente
              ingenio puede encontrar soluciones para cualquier situación.</span
            ></label
          >
          {{ this.sheet.attributes.ing }} (bonus:
          <div class="box-1 m-1" />
          )
        </div>
      </div>
      <Sliders :attributes="sheet.attributes" @change="handleAttributeChange" />
    </div>
    <div class="bottom-info">
      <Skills :value="sheet.skills" @change="handleSkillChange" />
      <Weapons :value="sheet.weapons" @change="handleWeaponChange" />
    </div>
  </div>
</template>
<script src="./sheet.js"></script>
<style src="./sheet.scss" lang="scss"></style>
