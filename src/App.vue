<script setup>
import {ref, reactive} from "vue"
import textInput from "./components/textInput.vue"
import arrayTextInput from "./components/arrayInput.vue"
import boolInput from "./components/boolInput.vue"
import factories from "./components/factories.vue"

const jsonToSend = reactive({
  id:Date.now(),
  "funguje": true
})

function changeJson(key, value){
  jsonToSend[key] = value
}

let testprom = ref("")
</script>

<template>
  <main class="container pt-8 mb-16">
  <h1 class="text-4xl font-sans font-bold text-primary mb-4 pl-6">
    Přidat novou firmu
  </h1>

  <section class="simple-section">  
    {{ jsonToSend }}
    <!-- Name of company -->
    <textInput @changeJson="changeJson" jsonKey="jmeno_firmy" label="Jméno firmy" />
    <!-- Array input stuff for aliases-->
    <arrayTextInput jsonKey="aliasy" @changeJson="changeJson" title="Aliasy & Značky" label="" />
    <!-- Description of the company -->
    <textInput @changeJson="changeJson" jsonKey="popisek_firmy" label="Stručný popisek firmy" />
    <!-- Notes on where they make stuff -->
    <textInput @changeJson="changeJson" jsonKey="poznamky_k_vyrobe" label="Poznámky k výrobě" />
    <!-- Eshop -->
    <textInput @changeJson="changeJson" jsonKey="eshop" label="Eshop firmy" />
    <!-- Logo URL -->
    <textInput @changeJson="changeJson" jsonKey="logo" label="Logo firmy" />
    <!-- Does it work? -->
    <boolInput @changeJson="changeJson" jsonKey="funguje" label="Firma je zaniklá"/>
    <!-- Factories -->
    <factories @changeJson="changeJson" jsonKey="vyrobny" title="Výrobny"/>

  </section>

  </main>
</template>