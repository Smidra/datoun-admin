<script setup>
defineProps({
  number: {
    type: Number,
    required: true
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

</template>
