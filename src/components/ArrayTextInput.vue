<script setup>
import { ref, watch, reactive} from "vue"
import TextInput from "./TextInput.vue";
import TextInputWithRemove from "./TextInputWithRemove.vue";

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
let newArray = reactive([])

watch(newArray, sendArray)

function sendArray() {
    let arrayForSending = []
    newArray.forEach(item => {
        arrayForSending.push(item.value)
    });
    emit("changeJson", arrayForSending)
}
function addArray() {
    newArray.push({ "id": newArray.length, "value": "" })
}
function removeArray() {
    newArray.pop()
}
function removeById(id){
    newArray = newArray.filter(e => e.id !== id)
}

</script>

<template>
    <div>
        <n-p class="pb-3">{{ title }}
        <TextInputWithRemove @removeThis="removeById(input.id)" v-for="input in newArray" :key="input.id" v-model="input.value" />

        <n-button class="mr-1" @click="addArray">+</n-button>
        <n-button @click="removeArray">-</n-button>
        </n-p>
    </div>
</template>