<template>
  <div class="w-11/12 mt-20 grid grid-cols-3 gap-8">
    <div
      v-for="item in filteredPeopleData"
      :key="item.url"
      class="rounded-lg py-6 px-12 border border-white cursor-pointer hover:bg-backgroundGray"
    >
      <p class="text-white text-2xl">{{ item.name }}</p>
      <p class="text-textGray">Altura: {{ item.height }}cm</p>
      <p class="text-textGray">
        Peso:
        {{ item.mass === "unknown" ? "desconhecido" : `${item.mass}kg` }}
      </p>

      <div class="mt-2">
        <NuxtLink
          class="text-borderYellow underline cursor-pointer hover:text-borderYellowHover"
          :to="`/home/${extractIdFromUrl(item.url)}`"
          >Ver todos os detalhes</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { extractIdFromUrl } from "~/utils/functions/extract-id-from-url";

const props = defineProps({
  filteredPeopleData: {
    type: Array<any>,
    required: true,
  },
});
</script>
