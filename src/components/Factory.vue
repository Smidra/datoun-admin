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
        <ArrayCategoryInput @changeJson="newFactory.kategorie0 = $event" title="Kategorie všech úrovní" />
    </div>
</template>