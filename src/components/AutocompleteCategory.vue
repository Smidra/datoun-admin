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
        try {
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
            })
        } catch {
            // console.log("No categories found in this hit.")
        };
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
function onInputEventHandler(inputText) {
    selectItemEventHandler(inputText.input)
}
</script>

<!-- Shows a text input with autocompletion for categories -->
<template>
    <!-- Autocomplete from https://www.npmjs.com/package/vue3-simple-typeahead -->
    <!-- <div class="n-input n-input--resizable n-input--stateful"
        style="--n-bezier: cubic-bezier(.4, 0, .2, 1); --n-count-text-color: rgb(118, 124, 130); --n-count-text-color-disabled: rgba(194, 194, 194, 1); --n-color: rgba(255, 255, 255, 1); --n-font-size: 14px; --n-border-radius: 3px; --n-height: 34px; --n-padding-left: 12px; --n-padding-right: 12px; --n-text-color: rgb(51, 54, 57); --n-caret-color: #18a058; --n-text-decoration-color: rgb(51, 54, 57); --n-border: 1px solid rgb(224, 224, 230); --n-border-disabled: 1px solid rgb(224, 224, 230); --n-border-hover: 1px solid #36ad6a; --n-border-focus: 1px solid #36ad6a; --n-placeholder-color: rgba(194, 194, 194, 1); --n-placeholder-color-disabled: rgba(209, 209, 209, 1); --n-icon-size: 16px; --n-line-height-textarea: 1.6; --n-color-disabled: rgb(250, 250, 252); --n-color-focus: rgba(255, 255, 255, 1); --n-text-color-disabled: rgba(194, 194, 194, 1); --n-box-shadow-focus: 0 0 0 2px rgba(24, 160, 88, 0.2); --n-loading-color: #18a058; --n-caret-color-warning: #f0a020; --n-color-focus-warning: rgba(255, 255, 255, 1); --n-box-shadow-focus-warning: 0 0 0 2px rgba(240, 160, 32, 0.2); --n-border-warning: 1px solid #f0a020; --n-border-focus-warning: 1px solid #fcb040; --n-border-hover-warning: 1px solid #fcb040; --n-loading-color-warning: #f0a020; --n-caret-color-error: #d03050; --n-color-focus-error: rgba(255, 255, 255, 1); --n-box-shadow-focus-error: 0 0 0 2px rgba(208, 48, 80, 0.2); --n-border-error: 1px solid #d03050; --n-border-focus-error: 1px solid #de576d; --n-border-hover-error: 1px solid #de576d; --n-loading-color-error: #d03050; --n-clear-color: rgba(194, 194, 194, 1); --n-clear-size: 16px; --n-clear-color-hover: rgba(146, 146, 146, 1); --n-clear-color-pressed: rgba(175, 175, 175, 1); --n-icon-color: rgba(194, 194, 194, 1); --n-icon-color-hover: rgba(146, 146, 146, 1); --n-icon-color-pressed: rgba(175, 175, 175, 1); --n-icon-color-disabled: rgba(209, 209, 209, 1); --n-suffix-text-color: rgb(51, 54, 57);">
        <div class="n-input-wrapper">
            <input class="n-input__input-el" type="text" placeholder="Test" />
        </div>
        <div class="n-input__border"></div>
        <div class="n-input__state-border"></div>
    </div> -->

    <vue3-simple-typeahead class="p-2 border border-1 rounded-sm w-full" id="typeahead_id" placeholder="Zadejte kategorii..."
        :items="uniqCategories" :minInputLength="1" @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler" />
    <div class="py-1" />

</template>