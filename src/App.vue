<script setup>
import Vyrobna from './components/Vyrobna.vue'
import { add_to_list , remove_from_list } from './components/ListControl.js'
import { ref } from 'vue'
import axios from 'axios'

const axios_instance = axios.create({
  baseURL: 'https://wiki.smid.io/',
  timeout: 1000,
  headers: {
    'Authorization': 'Bearer ' + '8ebe7bf636fde29d64a19dcd144ad569be5791c1e9a2e3caba9809ac3d872d58'
  }
});

function submitHandler (inputData){
  axios_instance.post('/indexes/firmy/documents', inputData).then(response => console.log(response))
}

// Pridavani a odebirani vyroben
let aktualni_vyrobny = ref([{id: 1}])

</script>

<template>

  <h1>Přidat novou firmu</h1>

  <FormKit
    type="form"
    submit-label="Poslat"
    #default="{ value }"
    @submit="submitHandler"
  >
    <!-- ID -->
    <FormKit
      name="id"
      type="hidden"
      :value='Date.now()'
    />
    <!-- Jmeno firmy -->
    <FormKit 
      type="text"
      label="Jméno firmy"
      name="jmeno_firmy"
      placeholder=""
      help="Přidej pouze firmu, která zatím není v databázi."
    />
    <!-- Popisek firmy -->
    <FormKit
      type="textarea"
      label="Popisek firmy"
      name="popisek_firmy"
      rows="10"
      placeholder=""
      help="Krátký motivační popisek většinou najdete na stránkách firmy."
    />
    <!-- Eshop firmy -->
    <FormKit
      type="url"
      label="E-shop firmy"
      name="eshop"
      placeholder=""
      validation="required|url"
      help="Přípustné jsou pouze firmy B2C"
      @input="handler"
    />
    <!-- Přidat upload loga firmy -->
    <!-- Pridavani vyroben +- -->
    <FormKit
      v-model="list"
      type="list"
      name="vyrobny"
    >
      <Vyrobna v-for="item in aktualni_vyrobny" :key="item.id" :factory_number="item.id" />
    </FormKit>

    <div class="row">
      <FormKit
        type="button"
        label="Přidat výrobnu"
        class="column"
        @click="add_to_list(aktualni_vyrobny)"
      />
      <FormKit
        type="button"
        label="Odebrat výrobnu"
        class="column"
        @click="remove_from_list(aktualni_vyrobny)"
      />
    </div>

    <pre wrap>{{ value }}</pre>
    </FormKit>

</template>

<style>
h1{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>