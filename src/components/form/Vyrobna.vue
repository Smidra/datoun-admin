<script setup>
import BoxAdder from '../reusable/BoxAdder.vue';
import RemoveCross from "../reusable/RemoveCross.vue";

defineProps({
  factory_number: {
    type: Number,
    required: true
  },
  removable: {
    type: Boolean,
    required: true
  },
})

</script>

<template>
  <section class="simple-section">
<!--    Remove btn-->

    <RemoveCross v-if="removable" @click="$emit('remove', factory_number)" />

    <label class="formkit-label text-primary" style="font-size: large;">➔ Výrobna #{{ factory_number }} </label>
    <FormKit
        type="group">

      <!-- Lokalita -->
      <FormKit
          type="text"
          label="Lokalita / Obec"
          name="lokalita"
          label-class="text-secondary"
          placeholder=""
          help="Kde se výrobna nachází?"
          validation="required|length:2,1000"
          :validation-messages="{
        required: 'Obec je povinné pole.',
        length: 'Jméno obce musí být dlouhé 2 až 1000 znaků.',
    }"
      />
      <!-- Kategorie lvl 0 -->
      <BoxAdder
          name="kategorie.0"
          title="Kategorie úrovně 0"
          description="Co se ve výrobně vyrábí obecně za typy produktů."
          :minimumBoxes="1"
      />
      <!-- Kategorie lvl 1 -->
      <BoxAdder
          name="kategorie.1"
          title="Kategorie úrovně 1"
          description="Co se ve výrobně vyrábí přesně za typy produktů. Uveďtě stylem 'Drogerie > Holení'"
          :minimumBoxes="0"
      />
  </FormKit>
  </section>
</template>
