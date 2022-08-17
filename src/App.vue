<script setup>
import Vyrobna from './components/Vyrobna.vue'
import { ref } from 'vue'
import axios from 'axios'

let new_id = 2
let aktualni_vyrobny = ref([{id: 1}])

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

</script>

<template>

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

    <FormKit 
      type="text"
      label="Jméno firmy"
      name="jmeno_firmy"
      placeholder=""
      help="Přidej pouze firmu, která zatím není v databázi."
    />
    <FormKit
      type="textarea"
      label="Popisek firmy"
      name="popisek_firmy"
      rows="10"
      placeholder=""
      help="Krátký motivační popisek většinou najdete na stránkách firmy."
    />
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
        @click="aktualni_vyrobny.push({id: new_id}); new_id++"
      />
      <FormKit
        type="button"
        label="Odebrat výrobnu"
        class="column"
        @click="aktualni_vyrobny.pop(); new_id--"
      />
    </div>

    <pre wrap>{{ value }}</pre>
    </FormKit>

</template>

<style>
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>