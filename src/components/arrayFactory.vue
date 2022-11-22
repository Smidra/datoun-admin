<script setup>
import { ref, watch } from "vue"
import factory from "./factory.vue"

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
function modifyArray(jsonKey, input, id){
    console.log("Hello from modify array");
    console.log(id)
    console.log(input)
    newArray.value[id] = input
}
</script>

<template>
<div>
    <div>====== {{ title }} ======</div>

    <factory v-for="input in newArray" :key="input.id" @changeJson="modifyArray" :label=label :id=input.id />

    <button @click="addArray">+</button>
    <button @click="removeArray">-</button>
</div>
</template>