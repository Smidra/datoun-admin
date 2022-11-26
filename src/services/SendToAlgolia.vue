<script setup>
import algoliasearch from "algoliasearch"

const { jsonToSend } = defineProps(['jsonToSend'])

function submitSuccess(response) {
  console.log(response);
  location.reload()
}

function submitFail(error) {
  console.log(error);
}

function submitHandler() {
  console.log("Hello from submit handler.");

  const client = algoliasearch('S27OT8U78J', '39e5cf3041647ce2f68c09b8e477eb8c') // API Key to EDIT
  const index = client.initIndex('firmy')
  const savePromise = index.saveObject(jsonToSend)
  savePromise.then(submitSuccess)
  savePromise.catch(submitFail)
}

</script>

<template>
  <div class="mb-60">
    <n-button size="large" @click="submitHandler()"> Přidat do databáze </n-button>
  </div>
</template>