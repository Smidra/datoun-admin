<script setup>
</script>

<template>
  <div class="outer-div">
    <div @click="$emit('click')" class="inner-div">
      ✖️
    </div>
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
