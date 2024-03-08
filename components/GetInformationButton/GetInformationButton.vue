<template>
  <button
    class="text-2xl px-12 py-3 rounded-3xl text-borderGrayLighter border-2 border-borderGrayLighter hover:text-black hover:bg-borderGrayLighter"
  >
    {{ title }}
  </button>
</template>
"
<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
