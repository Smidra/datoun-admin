<script setup>
import { ref, watch, computed } from "vue"
import AutocompleteCategory from "./AutocompleteCategory.vue";

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])

// An array of strings containing categories picked by the user.
const selectedCategories = ref([""])

// Parsed categories for each category level.
const categoriesByLevel = computed(() => {
    const result = {
        firstLevel: new Set(),
        secondLevel: new Set(),
        thirdLevel: new Set()
    }

    selectedCategories.value.forEach(selectedCategory => {
        // Ignore whitespace-only strings.
        if (selectedCategory.trim() == "") {
            return
        }
        let arrayOfCategories = selectedCategory.split(" > ")
        result.firstLevel.add(arrayOfCategories[0])
        if (arrayOfCategories.length < 2) {
            return
        }
        result.secondLevel.add(arrayOfCategories[0] + " > " + arrayOfCategories[1])
        if (arrayOfCategories.length < 3) {
            return
        }
        result.thirdLevel.add(categoryString)
    })

    return result
})
watch(categoriesByLevel, () => {emit("changeJson", categoriesByLevel.value)})

/* This Gets called every time something is picked in autocomplete */
function autocompleteCategoryHandler(id, newCat) {
    selectedCategories.value[id] = newCat
}

function addArray() {
    selectedCategories.value.push("")
}

function removeArray() {
    selectedCategories.value.pop()
}
</script>

<!-- Shows an array of AutocompleteCategory inputs and two buttons -->
<template>
    <div>
        <n-p>{{ title }}
            <AutocompleteCategory v-for="(selectedCategory, index) in selectedCategories" :key="index"
                @changeJson="autocompleteCategoryHandler(index, $event)" />

            <n-button @click="addArray" class="mr-1">+</n-button>
            <n-button @click="removeArray">-</n-button>
        </n-p>

        <n-timeline>
            <n-timeline-item type="success" title="Použité kategorie první úrovně">
                <div v-for="category in categoriesByLevel.firstLevel">
                    <p>• {{ category }}</p>
                </div>
            </n-timeline-item>
            <n-timeline-item type="info" title="Použité kategorie druhé úrovně">
                <div v-for="category in categoriesByLevel.secondLevel">
                    <p>• {{ category }}</p>
                </div>
            </n-timeline-item>
            <n-timeline-item type="warning" title="Použité kategorie třetí úrovně">
                <div v-for="category in categoriesByLevel.thirdLevel">
                    <p>• {{ category }}</p>
                </div>
            </n-timeline-item>
        </n-timeline>
    </div>
</template>