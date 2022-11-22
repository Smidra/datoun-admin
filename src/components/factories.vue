<script setup>
import { ref, watch } from "vue"
import textInput from "./textInput.vue"

const { jsonKey, title, label } = defineProps( ['jsonKey', 'title', 'label'] )
const emit = defineEmits(["changeJson"])
const newArray = ref([])

watch(newArray.value, sendArray)

function sendArray(){
    emit("changeJson", jsonKey, newArray.value )
}
function addArray(){
    newArray.value.push({ 
        "id": newArray.value.length,
        "lokalita": "",
        "kategorie.0" : [],
        "kategorie.1" : [],
        "kategorie.2" : [], 
     })
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