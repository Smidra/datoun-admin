<script setup>
import { reactive } from "vue"
import ArrayTextInput from "./components/ArrayTextInput.vue"
import ArrayFactory from "./components/ArrayFactory.vue"
import TextInput from "./components/TextInput.vue"
import SendToAlgolia from "./services/SendToAlgolia.vue"

const jsonToSend = reactive({
  "objectID": Date.now().toString(),
  "funguje": true,
})

</script>

<template>
  <main class="container pt-8 mb-16">
    <h1 class="text-4xl font-sans font-bold text-primary mb-4 pl-6">
      Přidat novou firmu
    </h1>

    <section class="simple-section">
      {{ jsonToSend }}

      <!-- Name of company -->
      <TextInput v-model="jsonToSend.jmeno_firmy" label="Jméno firmy" />
      <!-- Array input stuff for aliases-->
      <ArrayTextInput @changeJson="jsonToSend.aliasy = $event" title="Aliasy & Značky" />
      <!-- Description of the company -->
      <TextInput v-model="jsonToSend.popisek_firmy" label="Stručný popisek firmy" />
      <!-- Notes on where they make stuff -->
      <TextInput v-model="jsonToSend.poznamky_k_vyrobe" label="Poznámky k výrobě" />
      <!-- Eshop -->
      <TextInput v-model="jsonToSend.eshop" label="Eshop firmy" />
      <!-- Logo URL -->
      <TextInput v-model="jsonToSend.logo" label="Logo firmy" />
      <!-- Does it work? -->
      <input type="checkbox" id="funguje?" v-model="jsonToSend.funguje" />
      <label for="funguje?">Firma stále funguje</label>
      <!-- Factories -->
      <ArrayFactory @changeJson="jsonToSend.vyrobny = $event" title="Výrobny" />
    </section>

    <SendToAlgolia :jsonToSend="jsonToSend" />
    
  </main>
</template>