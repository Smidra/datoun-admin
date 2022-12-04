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

function updateCategories(event) {
    newFactory.value.kategorie0 = Array.from(event.firstLevel)
    newFactory.value.kategorie1 = Array.from(event.secondLevel)
    newFactory.value.kategorie2 = Array.from(event.thirdLevel)
}

watch(newFactory.value, () => { emit("changeJson", newFactory.value) })

</script>

<template>
    <div class="border rounded mb-3 p-3 ">
        <!-- Title -->
        <n-h3>{{ id + 1 }}. výrobna</n-h3>

        <!-- Searching for a city in Czechia -->
        <AutocompleteCity @changeJson="newFactory.lokalita = $event" />
        <!-- Adding categories -->
        <ArrayCategoryInput
            @changeJson="updateCategories($event)"
            title="Kategorie výrobků této výrobny" />
    </div>
</template>