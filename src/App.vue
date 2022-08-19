<script setup>
import Vyrobna from './components/Vyrobna.vue'
import TextBox from './components/TextBox.vue'
import { add_to_list , remove_from_list, remove_from_list_zero } from './components/ListControl.js'
import { ref } from 'vue'
import axios from 'axios'
import swal from 'sweetalert';

const axios_instance = axios.create({
  baseURL: 'https://wiki.smid.io/',
  timeout: 1000,
  headers: {
    'Authorization': 'Bearer ' + '8ebe7bf636fde29d64a19dcd144ad569be5791c1e9a2e3caba9809ac3d872d58'
  }
});

function submitHandler (inputData){
  axios_instance.post('/indexes/firmy/documents', inputData)
  .then(function (response) {
    console.log(response);
    swal("Skvělé!", "Firma přidána do databáze.", "success")
    .then(() => { location.reload() })
  })
  .catch(function (error) {
    console.log(error);
    swal("Ajaj!", "Firma nebyla přidána!", "error")
    .then(() => { location.reload() });
  });
}

// Pridavani a odebirani vyroben
let aktualni_vyrobny = ref([{id: 1}])
let pole_aliasu = ref([])

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

    <!-- Pridavani Aliasuu +- -->
    <label class="formkit-label">Aliasy</label>
    <label class="formkit-help" style="padding-bottom:10pt;">Značky pod kterými firma vyrábí, aliasy.</label>
    <label class="formkit-label"></label>
    <FormKit
      v-model="list"
      type="list"
      name="aliasy"
    >
      <TextBox v-for="item in pole_aliasu" :key=item.id :number="item.id" />
    </FormKit>

    <div class="row">
    <FormKit
      type="button"
      label="➕"
      class="column"
      style="background-color:lightpink;"
      @click="add_to_list(pole_aliasu)"
    />
    <FormKit
      type="button"
      label="➖"
      class="column"
      style="background-color:lightpink;"
      @click="remove_from_list_zero(pole_aliasu)"
    />
    </div>


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

    <!-- Zobraz JSON pro kontrolu -->
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