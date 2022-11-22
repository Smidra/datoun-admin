<script setup>
import { ref, watch } from "vue"
import AutocompleteCaregory from "./AutocompleteCategory.vue";

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
const newArray = ref([])

watch(newArray.value, sendArray)

function sendArray() {
    let arrayForSending = []
    newArray.value.forEach(item => {
        arrayForSending.push(item.value)
    });
    emit("changeJson", arrayForSending)
}
function addArray() {
    newArray.value.push({ "id": newArray.value.length, "value": "" })
}
function removeArray() {
    newArray.value.pop()
}
</script>

<template>
    <div>
        <div>{{ title }} {{ newArray }}</div>
        <AutocompleteCaregory v-for="input in newArray" :key="input.id"
            @changeJson="newArray[input.id].value = $event" />

        <button @click="addArray">+</button>
        <button @click="removeArray">-</button>
    </div>
</template>