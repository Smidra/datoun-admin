<script setup>
import { ref } from "vue"
import algoliasearch from "algoliasearch"
const emit = defineEmits(["changeJson"])

/* Dynamically import JSON with all categories used in the entire database */
// https://www.algolia.com/doc/api-reference/api-methods/search/
const client = algoliasearch('S27OT8U78J', '6c71ae31ec984a2185234a501482d57a') // API Key to SEARCH
const index = client.initIndex('firmy')
index.search('', {
    attributesToRetrieve: ['vyrobny.kategorie0', 'vyrobny.kategorie1', 'vyrobny.kategorie2'],
    hitsPerPage: 10000,
}).then(processCategories);

// Extract all the messy data that I recieved from Algolia into a nice JSON for autoomplete dropdown 
const allCategories = []
let uniqCategories = ref([])
function processCategories(rawCategories) {
    // For every Result
    rawCategories.hits.forEach(result => {
        // For every Factory in that result
        result.vyrobny.forEach(factory => {
            // For every category with lvl 0 (if exists)
            try {
                factory.kategorie0.forEach(cat0 => {
                    allCategories.push(cat0)
                })
            } catch { }
            // For every category with lvl 1 (if exists)
            try {
                factory.kategorie1.forEach(cat1 => {
                    allCategories.push(cat1)
                })
            } catch { }
            // For every category with lvl 2 (if exists)
            try {
                factory.kategorie2.forEach(cat2 => {
                    allCategories.push(cat2)
                })
            } catch { }
        });
    });
    // Create array of unique categories
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    uniqCategories.value = [...new Set(allCategories)];
}


/* When autocomplete selects something, this gets called. */
function selectItemEventHandler(selectedItem) {
    emit("changeJson", selectedItem)
}

/* When Something is written in the box, this gets called */
function onInputEventHandler(inputText){
    selectItemEventHandler(inputText.input)
}
</script>

<!-- Shows a text input with autocompletion for categories -->
<template>
    <!-- Autocomplete from https://www.npmjs.com/package/vue3-simple-typeahead -->
    <vue3-simple-typeahead id="typeahead_id" placeholder="Nápověda kategorií..." :items="uniqCategories"
        :minInputLength="1" @selectItem="selectItemEventHandler" @onInput="onInputEventHandler"/>
</template>