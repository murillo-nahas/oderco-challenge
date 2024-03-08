<template>
  <Breadcrumb :title="'Home → Busca'" />
  <main class="w-4/5 m-auto">
    <div class="mt-12 flex flex-col justify-center items-center">
      <p class="text-white text-3xl font-bold">Detalhes do personagem</p>
      <p class="mt-10 text-borderYellow text-5xl font-bold">
        {{ responseData.name }}
      </p>
    </div>

    <div class="mt-16 w-full flex flex-wrap justify-between items-center">
      <GetInformationButton
        :title="'Detalhes'"
        @click="getDetailsInformation"
      />
    </div>

    <div class="mt-2">
      <NuxtLink
        class="text-borderYellow underline cursor-pointer hover:text-borderYellowHover"
        :to="`/home`"
        >Voltar aos outros personagens</NuxtLink
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from "vue-router";

const { params }: RouteLocationNormalizedLoaded = useRoute();

const config = useRuntimeConfig();

const { data: people }: any = await useFetch(
  `${config.public.API_PEOPLE_URL}/${params.id}`
);

let responseData = people.value;

async function getDetailsInformation() {
  const detailsData: any = await $fetch(
    `${config.public.API_PEOPLE_URL}/${params.id}`
  );

  responseData = detailsData;
  console.log(responseData);
}

console.log(responseData);

useHead({
  title: `SWAPI - ${responseData.name}`,
});
</script>
