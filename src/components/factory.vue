<script setup>
import arrayTextInput from "./arrayInput.vue"
import autocomplete from "./autocomplete.vue"

const { id } = defineProps( ['id'] )
const emit = defineEmits(["changeJson"])

let newFactory = { 
        "id": id,
        "lokalita": "",
        "kategorie.0" : [],
        "kategorie.1" : [],
        "kategorie.2" : [], 
     }

function changeJson(jsonKey, item){
    console.log("Hello form factory");
    newFactory[jsonKey] = item
    console.log(newFactory)
    emit("changeJson", jsonKey, newFactory, id )
}

</script>

<template>
<div>
    <!-- Title -->
    <div>
        --- Výrobna {{ id }} ---
    </div>

    <!-- Searching for a city in Czechia -->
    <div>
    <autocomplete jsonKey="lokalita" @changeJson="changeJson" file="obce" key="hezkeJmeno" label="Lokalita"/>
    </div>

    <!-- Adding categories -->
    <!-- <arrayTextInput jsonKey="kategorie.0" @changeJson="changeJson" title="Kategorie lvl 0" label="" /> -->
</div>
</template>