<script setup>
</script>

<template>
  <div class="outer-div flex justify-end">
    <button class="btn btn-circle btn-outline btn-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

</template>

<style scoped>
.outer-div {
  position: relative;
  width: 100%;
  height: 16px;
}

.inner-div {
  position: absolute;
  right: -4px;
  top: -16px;
  opacity: 0.6;
  font-size: 18pt;
}

.inner-div:hover {
  cursor: pointer;
}
</style>
