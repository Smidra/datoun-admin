<script setup>
import { ref, watch } from "vue"
import TextInput from "./TextInput.vue";

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
        <n-p class="pb-3">{{ title }}
        <TextInput v-for="input in newArray" :key="input.id" v-model="input.value" />

        <n-button class="mr-1" @click="addArray">+</n-button>
        <n-button @click="removeArray">-</n-button>
        </n-p>
    </div>
</template>