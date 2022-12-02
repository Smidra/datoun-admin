<script setup>
import { ref, watch } from "vue"
import AutocompleteCategory from "./AutocompleteCategory.vue";

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])
const newArray = ref([])
let arrayForShowing = ref([])
addArray() // Default is one category

watch(newArray.value, sendArray)

function sendArray() {
    let arrayForSending = []
    newArray.value.forEach(item => {
        arrayForSending.push(item.value)
    });

    /* -- I have stained the honor of my familly with the following code. --- */
    // Initialise arrays for different categories
    let kat0 = []
    let kat1 = []
    let kat2 = []

    arrayForSending.forEach(element => {
        let arrayOfCategories = element.split(" > ")
        if (arrayOfCategories[0] == undefined) {
            return // "continue" https://masteringjs.io/tutorials/fundamentals/foreach-continue
        } else {
            // First element definitely exists, so add it to first array.
            kat0.push(arrayOfCategories[0])
            if (arrayOfCategories[1] == undefined) {
                return
            } else {
                // Second element definitely exists, so add to array: first_element + " > " + second_element
                kat1.push(arrayOfCategories[0].concat(" > ", arrayOfCategories[1]))
                if (arrayOfCategories[2] == undefined) {
                    return
                } else {
                    // Third element definitely exists, so add to array: first_element + " > " + second_element + ...
                    kat2.push(arrayOfCategories[0].concat(" > ", arrayOfCategories[1], " > ", arrayOfCategories[2]))
                }
            }
        }
    });
    // Remove duplicates from arrays. Put arrays together into a big array for sending.
    const megaArray = [[...new Set(kat0)], [...new Set(kat1)], [...new Set(kat2)]]
    /* --- Please dispose the buckets filled with vomit in the nearest bin. Mischief managed. --- */

    /* Send the array */
    emit("changeJson", megaArray)
    /* Show the array */
    arrayForShowing.value = megaArray
}

/* This Gets calld every time something is picked in autocomplete */
function autocompleteCategoryHandler(id, newCat) {
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
        <n-p>{{ title }}<a class="p-1"></a>
            <AutocompleteCategory v-for="input in newArray" :key="input.id"
                @changeJson="autocompleteCategoryHandler(input.id, $event)" />

            <n-button class="mr-1" @click="addArray">+</n-button>
            <n-button @click="removeArray">-</n-button>
        </n-p>

        <n-timeline>
            <n-timeline-item type="success" title="Použité kategorie první úrovně">
                <div v-for="kat0 in arrayForShowing[0]">
                    <p>• {{ kat0 }}</p>
                </div>
            </n-timeline-item>
            <n-timeline-item type="info" title="Použité kategorie druhé úrovně">
                <div v-for="kat1 in arrayForShowing[1]">
                    <p>• {{ kat1 }}</p>
                </div>
            </n-timeline-item>
            <n-timeline-item type="warning" title="Použité kategorie třetí úrovně">
                <div v-for="kat2 in arrayForShowing[2]">
                    <p>• {{ kat2 }}</p>
                </div>
            </n-timeline-item>
        </n-timeline>
    </div>
</template>