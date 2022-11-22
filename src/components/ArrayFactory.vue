<script setup>
import { ref, watch } from "vue"
import Factory from "./Factory.vue"

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
const newArray = ref([])

watch(newArray.value, sendArray)

function sendArray() {
    emit("changeJson", newArray.value)
}
function addArray() {
    newArray.value.push({ "id": newArray.value.length })
}
function removeArray() {
    newArray.value.pop()
}
</script>

<template>
    <div>
        <div>====== {{ title }} ======</div>

        <Factory v-for="input in newArray" :key="input.id" @changeJson="newArray[input.id] = $event" :id="input.id" />

        <button @click="addArray">+</button>
        <button @click="removeArray">-</button>
    </div>
</template>