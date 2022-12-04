<script setup>
import { ref, watch, computed, onMounted } from "vue"
import { loadCategories } from "../utils/algolia"

const { title } = defineProps(['title'])
const emit = defineEmits(["changeJson"])

// An array of objects representing each category input.
const selectedCategories = ref([])
addArray()

const allCategories = ref([])
onMounted(async () => {
    // Extract all the messy data that I recieved from Algolia into a nice JSON for autoomplete dropdown 
    allCategories.value = await loadCategories()
})

// An array of strings containing 'allCategories' without 'selectedCategories'.
const availableCategories = computed(() => {
    return allCategories.value.filter(category => {
        const isSelected = selectedCategories.value.some(selectedCategory => selectedCategory.category == category)
        return !isSelected
    })
})

// Parsed categories for each category level.
const categoriesByLevel = computed(() => {
    const result = {
        firstLevel: new Set(),
        secondLevel: new Set(),
        thirdLevel: new Set()
    }

    selectedCategories.value.forEach(selectedCategory => {
        // Ignore whitespace-only strings.
        const categoryString = selectedCategory.category
        if (categoryString.trim() == "") {
            return
        }
        let arrayOfCategories = categoryString.split(" > ")
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
function autocompleteCategoryHandler(index, category) {
    selectedCategories.value[index].category = category
}

function addArray() {
    selectedCategories.value.push({key:Math.random(), category:""})
}

function removeArray(index) {
    // Remove element at given index.
    selectedCategories.value.splice(index, 1)
}
</script>

<!-- Shows an array of autocomplete category inputs -->
<template>
    <div>
        <n-p>{{ title }}
            <div class="flex flex-row flex-nowrap py-1" v-for="(selectedCategory, index) in selectedCategories" :key="selectedCategory.key">
                <div class="w-full">
                    <vue3-simple-typeahead class="p-2 border border-1 rounded-sm w-full" 
                        placeholder="Zadejte kategorii..."    
                        :items="availableCategories" 
                        :minInputLength="1" 
                        :item="selectedCategory" 
                        @onInput="(category) => {autocompleteCategoryHandler(index, category.input)}"
                        @selectItem="(category) => {autocompleteCategoryHandler(index, category)}"
                         />
                    <div class="py-1" />
                </div>
                <div class="ml-1" v-if="(index != 0 || selectedCategories.length != 1)">
                    <n-button @click="removeArray(index)">-</n-button>
                </div>
            </div>
            <n-button @click="addArray" class="mr-1">+</n-button>
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