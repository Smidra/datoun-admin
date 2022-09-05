<script setup>
  import { list } from '@formkit/i18n';
  import { remove_from_list_by_id } from './ListControl.js'

  defineProps({
    number: {
      type: Number,
      required: true
    },
    arrayOfTextfields: {
      type: Array,
    }
  })
</script>

<template>
<!-- <h2>--- Kategorie #{{ cat_number }} ---</h2> -->

<!-- Jaké kategorie výrobků se ve výrobně vyrábí -->
<FormKit
    type="text"
    label=""
    help=""
    validation="required|length:2,1000"
/>
 <!-- ➖ -->
<FormKit
  type="button"
  label="➖"
  class="column"
  style="background-color:pink;"
  @click="remove_from_list_by_id(arrayOfTextfields, number)"
/>

</template>
