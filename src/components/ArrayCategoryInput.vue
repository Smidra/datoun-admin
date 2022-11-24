<script setup>
import { ref, watch } from "vue"
import AutocompleteCaregory from "./AutocompleteCategory.vue";

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
const newArray = ref([])

watch(newArray.value, sendArray)

function sendArray() {
    let arrayForSending = []
    newArray.value.forEach(item => {
        arrayForSending.push(item.value)
    });

    console.log("Hello from ArrayCategoryInput")
    console.log(arrayForSending)

    /* -- I have stained the honor of my familly with the following code. --- */
    // Initialise arrays for different categories
    let kat0 = []
    let kat1 = []
    let kat2 = []

    arrayForSending.forEach(element => {
        let arrayOfCategories = element.split(" > ")
        console.log("Splitted stuff")
        console.log(arrayOfCategories)
        if( arrayOfCategories[0] == undefined){
            return // "continue" https://masteringjs.io/tutorials/fundamentals/foreach-continue
        }else{
            // First element definitely exists, so add it to first array.
            kat0.push(arrayOfCategories[0])
            if( arrayOfCategories[1] == undefined ){
                return
            }else{
                // Second element definitely exists, so add to array: first_element + " > " + second_element
                kat1.push(arrayOfCategories[0].concat(" > ", arrayOfCategories[1] ))
                if( arrayOfCategories[2] == undefined ){
                    return
                }else{
                    // Third element definitely exists, so add to array: first_element + " > " + second_element + ...
                    kat2.push(arrayOfCategories[0].concat(" > ", arrayOfCategories[1], " > ", arrayOfCategories[2] ))
                }
            }
        }
    });
    // Remove duplicates from arrays. Put arrays together into a big array for sending.
    const megaArray = [ [...new Set(kat0)], [...new Set(kat1)], [...new Set(kat2)] ]
    /* --- Please dispose the buckets filled with vomit in the nearest bin. Mischief managed. --- */

    /* Send the array */
    emit("changeJson", megaArray)
}

/* This Gets calld every time something is picked in autocomplete */
function autocompleteCategoryHandler(id, newCat){
    newArray.value[id].value = newCat
}

function addArray() {
    newArray.value.push({ "id": newArray.value.length, "value": "" })
}
function removeArray() {
    newArray.value.pop()
}
</script>

<!-- Shows an array of AutocompleteCategory inputs and two buttons -->
<template>
    <div>
        <div>{{ title }}</div>
        <AutocompleteCaregory v-for="input in newArray" :key="input.id"
            @changeJson="autocompleteCategoryHandler(input.id, $event)" />

        <button @click="addArray">+</button>
        <button @click="removeArray">-</button>
    </div>
</template>