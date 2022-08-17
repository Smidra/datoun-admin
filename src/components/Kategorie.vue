<script setup>
defineProps({
  cat_number: {
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
    label="Kategorie"
    help="Co se ve výrobně vyrábí přesně za typy produktů." 
/>

</template>
