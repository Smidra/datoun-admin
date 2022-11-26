<script setup>
import { ref } from "vue"
const emit = defineEmits(["changeJson"])

/* Dynamically import JSON with all cities to "f" */
const f = ref({})
import("../assets/obce.json").then( value => f.value = value )

function parseCity(city){
    return city.hezkyNazev.concat(" - ", city.adresaUradu.kraj, " (", city.adresaUradu.PSC, ")" )
}

/* When autocomplete selects something, this gets called. */
function selectItemEventHandler( selectedItem ){
    emit("changeJson", selectedItem )
}

</script>

<template>
    <n-p >Lokalita: 
    <!-- Autocomplete from https://www.npmjs.com/package/vue3-simple-typeahead -->
    <vue3-simple-typeahead
        id="typeahead_id"
        placeholder="Nápověda obcí v ČR..."
        :items="f.municipalities"
        :itemProjection="parseCity"
        :minInputLength="2"
        @selectItem="selectItemEventHandler"
    />
    </n-p>
</template>