<script setup>
import {ref} from "vue"
const { jsonToSend, jsonKey, label, id } = defineProps(['jsonToSend', 'jsonKey', 'label', 'id'])
const emit = defineEmits(["changeJson"])
const inputBool = ref(false)

function changeJson(){
    emit("changeJson",jsonKey, inputBool.value, id )
}

</script>


<template>
<div>
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox -->
    <input v-model="inputBool" @input="changeJson" type="checkbox" :id=label :name=label>
    <label :for=label >{{ label }}</label>
</div>
</template>