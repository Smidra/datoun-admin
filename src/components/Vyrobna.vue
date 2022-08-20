<script setup>
import TextBox from './TextBox.vue';
import { add_to_list , remove_from_list } from './ListControl.js'
import { ref } from 'vue'

defineProps({
  factory_number: {
    type: Number,
    required: true
  }
})

let pole_kategorii = ref([{id: 1}])

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
  <label class="formkit-label">Kategorie</label>
  <label class="formkit-help" style="padding-bottom:10pt;">Co se ve výrobně vyrábí přesně za typy produktů.</label>
  <label class="formkit-label"></label>

  <FormKit
    v-model="list"
    type="list"
    name="kategorie"
  >
    <TextBox v-for="item in pole_kategorii" :key=item :number="item" />
  </FormKit>
  <div class="row">
  <FormKit
    type="button"
    label="➕"
    class="column"
    style="background-color:lightpink;"
    @click="add_to_list(pole_kategorii)"
  />
  <FormKit
    type="button"
    label="➖"
    class="column"
    style="background-color:lightpink;"
    @click="remove_from_list(pole_kategorii)"
  />
  </div>

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