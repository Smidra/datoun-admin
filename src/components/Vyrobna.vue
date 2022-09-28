<script setup>
import BoxAdder from './BoxAdder.vue';

defineProps({
  factory_number: {
    type: Number,
    required: true
  }
})

</script>

<template>
<label class="formkit-label" style="font-size: large;">➔ Výrobna #{{ factory_number }} </label>
<FormKit
  type="group">

  <!-- Lokalita -->
  <FormKit
    type="text"
    label="Obec"
    name="lokalita"
    placeholder=""
    help=""
    validation="required|length:2,1000"
    :validation-messages="{
        required: 'Obec je povinné pole.',
        length: 'Jméno obce musí být dlouhé 2 až 1000 znaků.',
    }"
  />
  <!-- Popisek -->
  <FormKit
      type="textarea"
      label="Specifikace výrobny"
      name="popisek_vyroby"
      rows="4"
      placeholder="V této výrobně se vyrábí celý sortiment dané firmy."
      help="Co nejpřesnějši popište, co se v této výrobně/továrně vyrábí."
      validation="required|length:10,10000"
      :validation-messages="{
        required: 'Specifikace výrobny je povinné pole.',
        length: 'Specifikace výrobny musí být dlouhá 10 až 10000 znaků.',
      }"
  />
  <!-- Kategorie -->
  <BoxAdder
    name="kategorie"
    title="Kategorie"
    description="Co se ve výrobně vyrábí přesně za typy produktů."
    :minimumBoxes="1"
  />

</FormKit>
</template>

<style>
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>
