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
      <!-- Popisek -->
      <FormKit
          type="textarea"
          label="Poznámka k výrobně"
          label-class="text-secondary"
          name="popisek_vyroby"
          rows="2"
          placeholder="V této výrobně se vyrábí celý sortiment dané firmy..."
          validation="length:10,10000"
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
  </section>
</template>
