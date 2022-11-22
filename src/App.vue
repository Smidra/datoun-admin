<script setup>
import {ref, reactive} from "vue"
import arrayTextInput from "./components/arrayTextInput.vue"
import arrayFactory2 from "./components/arrayFactory2.vue"
import textInput2 from "./components/textInput2.vue"

const jsonToSend = reactive({
  id:Date.now(),
  "funguje":true,
})

let checked = ref(true)
</script>

<template>
  <main class="container pt-8 mb-16">
  <h1 class="text-4xl font-sans font-bold text-primary mb-4 pl-6">
    Přidat novou firmu
  </h1>

  <section class="simple-section">  
    {{ jsonToSend }}

    <!-- Name of company -->
    <!-- <textInput @changeJson="changeJson" jsonKey="jmeno_firmy" label="Jméno firmy" /> -->
    <!-- <textInput2 :modelValue="jsonToSend.jmeno_firmy" @update:modelValue="jsonToSend.jmeno_firmy = $event" /> -->
    <textInput2 v-model="jsonToSend.jmeno_firmy" label="Jméno firmy" />

    <!-- Array input stuff for aliases-->
    <arrayTextInput @changeJson="jsonToSend.aliasy = $event" title="Aliasy & Značky" />

    <!-- Description of the company -->
    <!-- <textInput @changeJson="changeJson" jsonKey="popisek_firmy" label="Stručný popisek firmy" /> -->
    <textInput2 v-model="jsonToSend.popisek_firmy" label="Stručný popisek firmy" />

    <!-- Notes on where they make stuff -->
    <!-- <textInput @changeJson="changeJson" jsonKey="poznamky_k_vyrobe" label="Poznámky k výrobě" /> -->
    <textInput2 v-model="jsonToSend.poznamky_k_vyrobe" label="Poznámky k výrobě" />

    <!-- Eshop -->
    <!-- <textInput @changeJson="changeJson" jsonKey="eshop" label="Eshop firmy" /> -->
    <textInput2 v-model="jsonToSend.eshop" label="Eshop firmy" />

    <!-- Logo URL -->
    <!-- <textInput @changeJson="changeJson" jsonKey="logo" label="Logo firmy" /> -->
    <textInput2 v-model="jsonToSend.logo" label="Logo firmy" />

    <!-- Does it work? -->
    <input type="checkbox" id="funguje?" v-model="jsonToSend.funguje" />
    <label for="funguje?" >Firma stále funguje</label>

    <!-- Factories -->
    <!-- <arrayFactory @changeJson="changeJson" jsonKey="vyrobny" title="Výrobny"/> -->
    <arrayFactory2 @changeJson="jsonToSend.vyrobny = $event" title="Výrobny"/>

  </section>

  </main>
</template>