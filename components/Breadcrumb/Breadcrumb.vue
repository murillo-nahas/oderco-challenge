<template>
  <div class="mt-12 w-4/5 m-auto">
    <h1
      class="text-textGrayLighter font-bold cursor-pointer hover:text-textGray"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
