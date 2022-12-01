<script setup>
import algoliasearch from "algoliasearch"
import { useDialog } from "naive-ui";

const { jsonToSend } = defineProps(['jsonToSend'])

/* Submit the whole JSON to algolia */
function submitHandler() {
  const client = algoliasearch('S27OT8U78J', '39e5cf3041647ce2f68c09b8e477eb8c') // API Key to EDIT
  const index = client.initIndex('firmy')
  const savePromise = index.saveObject(jsonToSend)
  savePromise.then(handleSuccess)
  savePromise.catch(handleFailure)
}

/* Dialogs to display based on how the promise finished. Did it send OK? */
const dialog = useDialog();
function handleSuccess() {
  dialog.success({
    title: "Úspěch",
    content: "Firma byla úspěšně vložena do databáze.",
    negativeText: "Úžas!",
    onNegativeClick: () => {
      location.reload()
    }
  });
}
function handleFailure() {
  dialog.error({
    title: "Neúspěch",
    content: "Něco se stalo, a firma nebyla přidána do databáze.",
    negativeText: "Dobrá tedy",
    onNegativeClick: () => {
      console.log("Bad!");
    }
  });
}
</script>

<template>
  <div class="">
    <n-button size="large" @click="submitHandler()"> Přidat do databáze </n-button>
  </div>
</template>