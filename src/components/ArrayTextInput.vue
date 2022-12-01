<script setup>
import { clone } from "lodash";
import { ref, watch, reactive } from "vue"
import TextInput from "./TextInput.vue";
import TextInputWithRemove from "./TextInputWithRemove.vue";

// Define "title" prop and "changeJson" emit 
const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])

/*  newArray variable will hold array of objects { "id": 1 , "value": "company alias string" }
    When a change in the array occurs the whole array gets send to the parent.
    Parent gets an array of strings (not objects) from all "value" keys. */
let newArray = reactive([])
watch(newArray, sendArray)
function sendArray() {
    let arrayForSending = []
    newArray.forEach(item => {
        arrayForSending.push(item.value)
    });
    emit("changeJson", arrayForSending)
}

// Add an empty object to the array
function addArray() { newArray.push({ "id": Date.now().toString(), "value": "" }) }
// Remove last object in array
function removeArray() { newArray.pop() }

// Remove all objects that match "id"
function removeById(removeID) {
    // https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array
    const positionToDelete = newArray.map(e => e.id).indexOf(removeID);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    newArray.splice(positionToDelete, 1)
}
</script>

<template>
    <div>
        <n-p class="pb-3 gap-1">{{ title }}<a class="p-1"></a>
            <TextInputWithRemove @removeThis="removeById(input.id)" 
                v-for="input in newArray"
                :key="input.id"
                v-model="input.value" />

            <n-button class="mr-1" @click="addArray">+</n-button>
            <!-- <n-button @click="removeArray">-</n-button> --> 
        </n-p>
    </div>
</template>