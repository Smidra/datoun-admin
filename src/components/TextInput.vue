<script setup>
const { label, modelValue } = defineProps(['label', 'modelValue'])
const emit = defineEmits(["update:modelValue"])

</script>


<template>
    <div>
        <h4>{{ label }}</h4>
        <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="text">
    </div>
</template>