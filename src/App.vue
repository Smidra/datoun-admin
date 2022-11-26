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
  <div class="flex flex-col items-center">

    <n-h1 class="pt-5 w-96">
      Přidat novou firmu
    </n-h1>

    <div class="w-96">
      <!-- {{ jsonToSend }} -->

      <!-- Name of company -->
      <TextInput v-model="jsonToSend.jmeno_firmy" label="Jméno firmy" />
      <!-- Array input stuff for aliases-->
      <ArrayTextInput @changeJson="jsonToSend.aliasy = $event" title="Aliasy & Značky" />
      <!-- Description of the company -->
      <TextInput v-model="jsonToSend.popisek_firmy" label="Stručný popisek firmy" type="textarea"/>
      <!-- Notes on where they make stuff -->
      <TextInput v-model="jsonToSend.poznamky_k_vyrobe" label="Poznámky k výrobě" type="textarea" />
      <!-- Eshop -->
      <TextInput v-model="jsonToSend.eshop" label="Eshop firmy" />
      <!-- Logo URL -->
      <TextInput v-model="jsonToSend.logo" label="Logo firmy"/>
      <!-- Does it work? -->
      <n-checkbox class="pb-3" :default-checked="true" id="funguje?" v-model="jsonToSend.funguje"> Firma stále funguje </n-checkbox>
      <!-- Factories -->
      <ArrayFactory @changeJson="jsonToSend.vyrobny = $event" title="Výrobny" />
    </div>

    <div class="w-96">
      <SendToAlgolia :jsonToSend="jsonToSend" />
    </div>
  </div>
</template>
