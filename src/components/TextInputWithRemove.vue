<script setup>
const { label, modelValue, type } = defineProps(['label', 'modelValue', 'type'])
const emit = defineEmits(["update:modelValue", "removeThis"])

</script>


<template>
    <!-- <n-p class="pb-3"> -->
    {{ label }}
    <div class="flex flex-row flex-nowrap py-1">
        <div class="w-full">
            <!-- <input placeholder="" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" :type="type" /> -->
            <n-input placeholder="" :value="modelValue" @input="emit('update:modelValue', $event)" :type="type" />
        </div>
        <div class="ml-1">
            <n-button @click="emit('removeThis')">-</n-button>
        </div>
        <!-- </n-p> -->
    </div>
</template>