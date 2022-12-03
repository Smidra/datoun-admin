<script setup>
import { ref, watch } from "vue"
import Factory from "./Factory.vue"

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
const newArray = ref([])
addArray() // Default is one factory

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

function updateFactory(id, factory) {
    newArray.value[id] = factory
}
</script>

<template>
    <div>
        <n-h2>{{ title }}</n-h2>

        <div class="pb-3">
        <Factory v-for="input in newArray" :key="input.id" @changeJson="updateFactory(input.id, $event)" :id="input.id" />
        <n-button class="mr-1" @click="addArray">+</n-button>
        <n-button @click="removeArray">-</n-button>
        </div>
    </div>
</template>