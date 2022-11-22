<script setup>
import autocompleteCity from "./autocompleteCity.vue"
import { watch, ref } from "vue"

const { id } = defineProps(['id'])
const emit = defineEmits(["changeJson"])

const newFactory = ref({
    "id": id,
    "lokalita": "",
    "kategorie.0": [],
    "kategorie.1": [],
    "kategorie.2": [],
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
    </div>
</template>