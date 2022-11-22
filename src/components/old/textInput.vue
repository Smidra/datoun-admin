<script setup>
import {ref} from "vue"
const { jsonToSend, jsonKey, label, id } = defineProps(['jsonToSend', 'jsonKey', 'label', 'id'])
const emit = defineEmits(["changeJson"])
const inputText = ref("")

function changeJson(){
    emit("changeJson",jsonKey, inputText.value, id )
}

</script>


<template>
<div>
    <h4>{{label}}</h4>
    <input v-model="inputText" @input="changeJson" type="text">
</div>
</template>