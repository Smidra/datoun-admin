<script setup>
defineProps({
  factory_number: {
    type: Number,
    required: true
  }
})

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
  <!-- Jaké kategorie výrobků se tam vyrábí -->
  <FormKit
    v-model="list"
    type="list"
    name="kategorie"
  >
  <FormKit
    type="text"
    label="Kategorie"
    name="kategorie"
    placeholder=""
    help="Co se ve výrobně vyrábí přesně za typy produktů." 
  />
  </FormKit>
</FormKit>

</template>
