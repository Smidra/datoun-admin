<script setup>
import { ref } from "vue"
const { jsonKey, file, key, label } = defineProps(['jsonKey', 'file', 'key', 'label'])
const emit = defineEmits(["changeJson"])

/* Dynamically import JSON with all cities to "f" */
const f = ref({})
import(`../assets/${file}.json`).then( value => f.value = value )

function parseCity(city){
    return city.hezkyNazev.concat(" - ", city.adresaUradu.kraj, " (", city.adresaUradu.PSC, ")" )
}

/* When autocomplete selects something, this gets called. */
function selectItemEventHandler( selectedItem ){
    console.log("Hello form autocomplete");
    console.log(selectedItem)

    emit("changeJson", jsonKey, parseCity(selectedItem) )
}
const arrayVeci = [{id:1},{id:2}, {id:3}]

</script>

<template>
    {{ label }}
    <!-- Autocomplete from https://www.npmjs.com/package/vue3-simple-typeahead -->
    <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Nápověda obcí v ČR..."
        :items="f.municipalities"
        :itemProjection="parseCity"
        :minInputLength="2"
        @selectItem="selectItemEventHandler"
    ></vue3-simple-typeahead>
</template>