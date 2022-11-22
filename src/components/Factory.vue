<script setup>
import AutocompleteCity from "./AutocompleteCity.vue"
import ArrayCategoryInput from "./ArrayCategoryInput.vue"
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

watch(newFactory.value, () => { emit("changeJson", newFactory.value) })

</script>

<template>
    <div>
        <!-- Title -->
        <div>--- Výrobna {{ id }} ---</div>
        
        <!-- Searching for a city in Czechia -->
        <AutocompleteCity @changeJson="newFactory.lokalita = $event" />
        <!-- Adding categories -->
        <ArrayCategoryInput @changeJson="newFactory.kategorie0 = $event" title="Kategorie lvl 0" />
        <ArrayCategoryInput @changeJson="newFactory.kategorie1 = $event" title="Kategorie lvl 1" />
        <ArrayCategoryInput @changeJson="newFactory.kategorie2 = $event" title="Kategorie lvl 2" />
    </div>
</template>