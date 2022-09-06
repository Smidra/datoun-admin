<script setup>
    import TextBox from './TextBox.vue';
    import { add_to_list , remove_from_list } from './ListControl.js'
    import { ref } from 'vue'

    defineProps({
      name: {
        type: String,
        required: true
      },
      title:{
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false
      },
      minimumBoxes:{
        type: Number,
        required: true
      }
    })

    // Uprav array aby v nem bylo alespon minimum polozek.
    function initialise(minimumBoxes, arrayOfTextfields){
      for( let i=0; i<minimumBoxes; i++){
        arrayOfTextfields.push(i+1)
      }
    }

    let arrayOfTextfields = ref([ ]);

</script>

<template>
    {{ initialise(minimumBoxes, arrayOfTextfields) }}

    <label class="formkit-label">{{ title }}</label>
    <label class="formkit-help" style="padding-bottom:10pt;">{{ description }}</label>
    <label class="formkit-label"></label>

    <FormKit v-model="list" type="list" :name=name>
        <TextBox v-for="item in arrayOfTextfields" :key=item :number=item :arrayOfTextfields=arrayOfTextfields :minimum=minimumBoxes />
    </FormKit>

    <div class="row">
    <FormKit
        type="button"
        label="➕"
        class="column"
        style="background-color:lightpink;"
        @click="add_to_list(arrayOfTextfields)"
    />
    <!-- <FormKit
        type="button"
        label="➖"
        class="column"
        style="background-color:lightpink;"
        @click="remove_from_list(arrayOfTextfields)"
    /> -->
    </div>

    <!-- Jaké kategorie výrobků se ve výrobně vyrábí -->
    <!-- <FormKit
        type="text"
        label=""
        help="" 
        validation="required|length:2,1000"
    />
    <p>
    <a href="">Odebrat</a>
    </p> -->
    
</template>    