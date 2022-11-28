<script setup>
import {ref, watch} from "vue"
import {removeDiacritics, throttle} from "../utils/utils";

const emit = defineEmits(["changeJson"])

const MIN_SEARCH_LENGTH = 3;

// complete municipality data
const searchData = ref({})
// mapped array of municipalities to searchable labels
const searchDataMappedLabels = ref([]);
// currently visible options when searching
const options = ref([]);
// current string entered by user into the search string
const searchField = ref("");
// mapping from label to index of the object in the original array
let searchIndex = {};

// async load
import("../assets/obce.json").then(value => {
  searchData.value = value
  const newSearchIndex = {};
  const newSearchDataMappedLabels = [];

  // for each municipality object create parsed label, push it into a searchable array and add index for back lookup
  value.municipalities.forEach((c,i) => {
    const parsed = parseCity(c);
    newSearchDataMappedLabels.push(parsed);
    newSearchIndex[parsed] = i;
  });
  searchDataMappedLabels.value = newSearchDataMappedLabels;
  searchIndex = newSearchIndex;
})

// creates nice searchable label for municipality object
function parseCity(city) {
  return city.hezkyNazev.concat(" - ", city.adresaUradu.kraj, " (", city.adresaUradu.PSC, ")")
}

// based on string in sarchfield find index of the original object of the municipality and emit the whole object
function selectItemEventHandler() {
  emit("changeJson", searchData.value.municipalities[searchIndex[searchField.value]]);
}

// update visible options base on entered string
function updateOptions() {
  if ((searchField.value || "").length < MIN_SEARCH_LENGTH) {
    options.value = [];
    return;
  }

  // lowercase and remove diacritics from the search string
  const optionMatch = removeDiacritics(searchField.value.toLowerCase());

  // filter array of the labels
  options.value = searchDataMappedLabels.value.filter(v => {
    return removeDiacritics(v.toLowerCase()).indexOf(optionMatch) !== -1;  // includes?
  });
}

// as filtering 6K results can affect the performance, we throttle the input
const throttledUpdateOptions = throttle(updateOptions, 300);

// setup watcher on input changes
watch(searchField, throttledUpdateOptions)


</script>

<template>
  <n-p class="autocomplete-city">Lokalita:
    <n-auto-complete
        v-model:value="searchField"
        :options="options"
        :on-blur="selectItemEventHandler"
    />
  </n-p>
</template>
