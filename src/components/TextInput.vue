<script setup>
const { label, modelValue, type } = defineProps(['label', 'modelValue', 'type'])
const emit = defineEmits(["update:modelValue"])

</script>


<template>
    <div>
        <n-p class="pb-3">{{ label }}
        <n-input placeholder="" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" :type="type" />
        </n-p>
    </div>
</template>