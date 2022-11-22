<script setup>
import { ref } from "vue"
import fCity from "../assets/obce.json"

const emit = defineEmits(["changeJson"])

/* Dynamically import JSON with all cities to "f" */
const f = ref({})
import("../assets/obce.json").then( value => f.value = value )

function parseCity(city){
    return city.hezkyNazev.concat(" - ", city.adresaUradu.kraj, " (", city.adresaUradu.PSC, ")" )
}

/* When autocomplete selects something, this gets called. */
function selectItemEventHandler( selectedItem ){
    console.log("Hello form autocomplete");
    console.log(selectedItem)

    emit("changeJson", parseCity(selectedItem) )
}

</script>

<template>
    Lokalita: 
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