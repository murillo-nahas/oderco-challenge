<template>
  <Breadcrumb :title="'Home'" />

  <div class="flex justify-center items-center">
    <Spinner v-if="!filteredData" />
  </div>
  <main
    class="mt-32 mb-32 flex flex-col flex-wrap items-center justify-center w-4/5 m-auto"
    v-if="filteredData"
  >
    <h1 class="text-xlg font-bold text-white">
      Todos os dados de Star Wars que você sempre quis:
    </h1>
    <p class="mt-2 text-2xl text-textGray">
      Planetas, naves espaciais, veículos, pessoas, filmes e espécies
    </p>
    <div class="mt-20 w-full relative">
      <img
        src="~/assets/icons/search-icon.svg"
        alt="Search Icon"
        class="absolute left-4 top-4"
        loading="lazy"
      />
      <input
        class="outline-none p-4 pl-12 pr-12 rounded-lg bg-backgroundGray w-full border border-borderGray text-sm text-white"
        placeholder="Busque por pessoas, planetas, naves espaciais..."
        type="text"
        :value="searchQuery"
        @input="handleSearchInput"
      />
      <img
        src="~/assets/icons/clear-icon.svg"
        alt="Clear Search Icon"
        class="absolute right-4 top-4 cursor-pointer"
        loading="lazy"
        @click="handleClearSearch"
      />
    </div>

    <div
      v-if="filteredData.length === 0"
      class="mt-12 w-full flex flex-col items-center justify-center"
    >
      <p class="text-white text-2xl">
        Eita! O personagem desejado não conseguiu ser encontrado. 😬
      </p>
      <p
        class="mt-2 text-2xl text-borderYellow underline cursor-pointer hover:text-borderYellowHover"
        @click="handleClearSearch"
      >
        Clique aqui para retornar à pesquisa
      </p>
    </div>

    <div class="w-11/12 mt-20 grid grid-cols-3 gap-8">
      <div
        v-for="item in filteredData"
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
  </main>
</template>

<script setup lang="ts">
import { extractIdFromUrl } from "~/utils/functions/extract-id-from-url";

const config = useRuntimeConfig();

const { data: people }: any = await useFetch(config.public.API_PEOPLE_URL);

const responseData = people.value;

const searchQuery = ref("");

const filteredData = computed(() => {
  return responseData.filter((person: any) =>
    person.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function handleSearchInput(event: any) {
  const inputElement = event.target as HTMLInputElement;
  searchQuery.value = inputElement.value;
}

function handleClearSearch() {
  searchQuery.value = "";
}

useHead({
  title: "SWAPI",
});
</script>
