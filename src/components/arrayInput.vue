<script setup>
import { ref, watch } from "vue"
import textInput from "./textInput.vue"

const { jsonKey, title, label } = defineProps( ['jsonKey', 'title', 'label'] )
const emit = defineEmits(["changeJson"])
const newArray = ref([])

watch(newArray.value, sendArray)

function sendArray(){
    let arrayForSending = []
    newArray.value.forEach(item => {
        arrayForSending.push(item.value)
    });
    emit("changeJson", jsonKey, arrayForSending )
}
function addArray(){
    newArray.value.push({ "id": newArray.value.length , "value": "" })
}
function removeArray(){
    newArray.value.pop()
}
function modifyArray(jsonKey, inputText, id){
    newArray.value[id].value = inputText
}
</script>

<template>
<div>
    <div>{{ title }} <!-- {{newArray}} --></div>
    <textInput v-for="input in newArray" :key="input.id" @changeJson="modifyArray" :label=label :id=input.id />
    <button @click="addArray">+</button>
    <button @click="removeArray">-</button>
</div>
</template>