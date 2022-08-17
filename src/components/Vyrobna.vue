<script setup>
import Kategorie from './Kategorie.vue';
import { ref } from 'vue'

defineProps({
  factory_number: {
    type: Number,
    required: true
  }
})

let pocet_kategorii = ref(2)
let pole_kategorii = ref([ 1 ])

</script>

<template>
<h1>--- Výrobna #{{ factory_number }} ---</h1>

<FormKit
  type="group">

  <!-- Lokalita -->
  <FormKit
    type="text"
    label="Obec"
    name="lokalita"
    placeholder=""
    help="" 
  />
  <!-- Popisek -->
  <FormKit
      type="textarea"
      label="Specifikace výrobny"
      name="popisek_vyroby"
      rows="5"
      placeholder=""
      help="Co nejpřesnějši popište, co se v této výrobně/továrně vyrábí."
    />
  <!-- Jaké kategorie výrobků se ve výrobně vyrábí -->
  <FormKit
    v-model="list"
    type="list"
    name="kategorie"
  >
    <Kategorie v-for="item in pole_kategorii" :key=item :cat_number="item" />
  </FormKit>

  <FormKit
    type="button"
    label="Přidat kategorii"
    style="background-color:darkgoldenrod;"
    @click="pole_kategorii.push(pocet_kategorii); pocet_kategorii++"
  />
  <FormKit
    type="button"
    label="Odebrat kategorii"
    style="background-color:darkgoldenrod;"
    @click="pole_kategorii.pop(); pocet_kategorii--"
  />

</FormKit>

</template>
