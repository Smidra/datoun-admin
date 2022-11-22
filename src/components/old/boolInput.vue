<script setup>
const { label, modelValue } = defineProps(['label', 'modelValue'])
const emit = defineEmits(["update:modelValue"])
</script>


<template>
<div>
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox -->
<input :value="modelValue" @click="emit('update:modelValue', $event.target.value)" type="checkbox" :id=label :name=label>
<label :for=label >{{ label }}</label>
</div>
</template>