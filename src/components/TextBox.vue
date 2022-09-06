<script setup>
  import { remove_from_list_by_id } from './ListControl.js'

  defineProps({
    number: {
      type: Number,
      required: true
    },
    arrayOfTextfields: {
      type: Array,
      required:true
    },
    minimum:{
      type: Number,
      required:true
    }
  })
</script>

<template>
<!-- Jaké kategorie výrobků se ve výrobně vyrábí -->
<FormKit
    type="text"
    label=""
    help=""
    :placeholder=number
    validation="required|length:2,1000"
    :validation-messages="{
        required: 'Povinné pole.',
        length: 'Délka musí být mezi 2 a 1000 znaků.',
    }"
/>
 <!-- ➖ -->
<FormKit
  type="button"
  label="➖"
  class="column"
  style="background-color:pink;"
  @click="remove_from_list_by_id(arrayOfTextfields, number, minimum)"
/>

</template>
