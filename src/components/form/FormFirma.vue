<script setup>
import Vyrobna from './Vyrobna.vue'
import BoxAdder from '../reusable/BoxAdder.vue'
import {add_to_list, remove_from_list_by_id} from '../../utils/ListControl.js'
import {ref} from 'vue'
import swal from 'sweetalert';
import {getAxiosInstance} from "../../services/axiosService";

const URL_FIRMY = '/indexes/firmy/documents';

function submitHandler(inputData) {
  getAxiosInstance().post(URL_FIRMY, inputData)
      .then(function (response) {
        console.log(response);
        swal("Skvělé!", "Firma přidána do databáze.", "success")
            .then(() => {
              location.reload()
            })
      })
      .catch(function (error) {
        console.log(error);
        swal("Ajaj!", "Firma nebyla přidána!", "error")
            .then(() => {
              location.reload()
            });
      });
}

// Pridavani a odebirani vyroben
const aktualni_vyrobny = ref([1]);
const list_vyroben = ref([]);
const formValue = ref({});

</script>

<template>
  <h1 class="text-3xl font-black text-sky-900 mb-4 pl-6">Přidat novou firmu</h1>
  <FormKit
      type="form"
      submit-label="Poslat"
      #default="{ value }"
      v-model="formValue"
      @submit="submitHandler"
      :config="{ validationVisibility: 'dirty' }"
      incomplete-message="Nějaké pole nebylo vyplněno správně..."
  >
    <section class="simple-section">
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
        validation="required|length:2,100"
        :validation-messages="{
        required: 'Jméno firmy je povinné pole.',
        length: 'Jméno musí být dlouhé 2 až 100 znaků.',
      }"
    />

    <!-- Pridavani Aliasuu +- -->
    <BoxAdder
        name="aliasy"
        title="Aliasy"
        description="Značky pod kterými firma vyrábí, aliasy."
        :minimumBoxes="0"
    />

    <!-- Popisek firmy -->
    <FormKit
        type="textarea"
        label="Popisek firmy"
        name="popisek_firmy"
        rows="8"
        placeholder=""
        help="Krátký motivační popisek většinou najdete na stránkách firmy."
        validation="required|length:10,10000"
        :validation-messages="{
        required: 'Popisek firmy je povinné pole.',
        length: 'Popisek musí být dlouhé 10 až 10000 znaků.',
      }"
    />

    <!-- Eshop firmy -->
    <FormKit
        type="url"
        label="E-shop firmy (zkopírujte)"
        name="eshop"
        placeholder=""
        help="Člověk musí mít možnost si od firmy něco koupit (B2C)."
        validation="required|url"
        :validation-messages="{
        required: 'Adresa eshopu firmy je povinné pole.',
        url: 'Adresa eshopu musí být platná URL.',
      }"
    />

    <!-- Je zaniklá? -->
    <FormKit
        type="checkbox"
        label="Firma je zaniklá"
        help="Zašrkněte pokud firma zkrachovala nebo přestala vyrábět v Česku."
        name="zanikla"
        value=false
        validation="required"
        :validation-messages="{
        required: 'Musíte označit jestli je firma zaniklá, nebo ne.',
      }"
    />

    </section>

    <!-- Přidat upload loga firmy -->
    <!-- TBA -->

    <!-- Pridavani vyroben +- -->
    <FormKit
        v-model="list_vyroben"
        type="list"
        name="vyrobny"
    >
      <Vyrobna v-for="item in aktualni_vyrobny" :key="item" :factory_number="item" :removable="aktualni_vyrobny.length > 1"  @remove="remove_from_list_by_id(aktualni_vyrobny, $event, 1)"/>
    </FormKit>
    <div class="row">
      <FormKit
          type="button"
          label="Přidat výrobnu"
          class="column"
          @click="add_to_list(aktualni_vyrobny)"
      />
    </div>

    <!-- Zobraz JSON pro kontrolu -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
