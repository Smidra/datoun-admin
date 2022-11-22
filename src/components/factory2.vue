<script setup>
import autocompleteCity from "./autocompleteCity.vue"
import arrayCategoryInput from "./arrayCategoryInput.vue"
import { watch, ref } from "vue"

const { id } = defineProps(['id'])
const emit = defineEmits(["changeJson"])

const newFactory = ref({
    "id": id,
    "lokalita": "",
    "kategorie0": [],
    "kategorie1": [],
    "kategorie2": [],
})

watch(newFactory.value, () => {emit("changeJson", newFactory.value)} )

</script>

<template>
    <div>
        <!-- Title -->
        <div>
            --- Výrobna {{ id }} ---
        </div>

        <!-- Searching for a city in Czechia -->
        <!-- <autocomplete jsonKey="lokalita" @changeJson="changeJson" file="obce" key="hezkeJmeno" label="Lokalita"/> -->
        <autocompleteCity @changeJson="newFactory.lokalita = $event" />

        <!-- Adding categories -->
        <!-- <arrayTextInput jsonKey="kategorie.0" @changeJson="changeJson" title="Kategorie lvl 0" label="" /> -->
        <arrayCategoryInput @changeJson="newFactory.kategorie0 = $event" title="Kategorie lvl 0" />
        <arrayCategoryInput @changeJson="newFactory.kategorie1 = $event" title="Kategorie lvl 1" />
        <arrayCategoryInput @changeJson="newFactory.kategorie2 = $event" title="Kategorie lvl 2" />
        <!-- <arrayTextInput @changeJson="newFactory.kategorie2 = $event" title="Kategorie lvl 2" /> -->
    </div>
</template>