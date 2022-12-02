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
function logMe(a) {
  console.log(a);
}
</script>

<template>
  <div class="flex flex-col items-center bg-gray-100">

    <n-p class="pt-5 pl-5 w-full md:w-1/2 md:max-w-lg">
      <n-h1 class="text-5xl">Datoun </n-h1>
      <n-blockquote class=""> Přidat novou firmu </n-blockquote>
    </n-p>

    <div class="w-full p-3 md:w-1/2 md:max-w-lg">
      <div class="p-3 border rounded bg-white">
        <!-- {{ jsonToSend }} -->

        <!-- Name of company -->
        <TextInput v-model="jsonToSend.jmeno_firmy" label="Jméno firmy" />
        <!-- Array input stuff for aliases-->
        <ArrayTextInput @changeJson="jsonToSend.aliasy = $event" title="Aliasy & Značky" />
        <!-- Description of the company -->
        <TextInput v-model="jsonToSend.popisek_firmy" label="Stručný popisek firmy" type="textarea" />
        <!-- Notes on where they make stuff -->
        <TextInput v-model="jsonToSend.poznamky_k_vyrobe" label="Poznámky k výrobě" type="textarea" />
        <!-- Eshop -->
        <TextInput v-model="jsonToSend.eshop" label="Eshop firmy" />
        <!-- Logo URL -->
        <TextInput v-model="jsonToSend.logo" label="Logo firmy" />
        <!-- Does it work? -->
        <!-- <n-checkbox @on-update:checked="logMe($event)" class="pb-3" :default-checked="true" v-model="jsonToSend.funguje"> Firma stále funguje </n-checkbox> -->
        <n-checkbox @update:checked="jsonToSend.funguje = $event" :default-checked="true" class="pb-3"> Firma stále
          funguje </n-checkbox>
        <!-- Factories -->
        <ArrayFactory @changeJson="jsonToSend.vyrobny = $event" title="Výrobny" />
      </div>

      <!-- Button to send JSON to algolia. It can conjure dialogs. -->
      <n-dialog-provider>
        <div class="w-96">
          <SendToAlgolia :jsonToSend="jsonToSend" />
        </div>
      </n-dialog-provider>

    </div>

    <!-- Free space at the bottom for nices scrolling. -->
    <div class="mb-60"></div>

  </div>
</template>
