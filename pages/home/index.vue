<script setup lang="ts">
const { data: people }: any = await useFetch("https://swapi.dev/api/people/");

let responseData = people.value;

function extractIdFromUrl(url: string) {
  const segments = url.split("/");
  const lastSegment = segments[segments.length - 2];

  return lastSegment;
}
</script>

<template>
  <main
    class="mt-32 mb-32 flex flex-col flex-wrap items-center justify-center w-4/5 m-auto"
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
      />
      <img
        src="~/assets/icons/clear-icon.svg"
        alt="Clear Search Icon"
        class="absolute right-4 top-4 cursor-pointer"
        loading="lazy"
      />
    </div>

    <div class="w-11/12 mt-20 grid grid-cols-3 gap-8">
      <div
        v-for="item in responseData.results"
        class="rounded-lg py-6 px-12 border border-white cursor-pointer hover:bg-backgroundGray"
      >
        <p class="text-white text-2xl">{{ item.name }}</p>
        <p class="text-textGray">Altura: {{ item.height }}cm</p>
        <p class="text-textGray">Peso: {{ item.mass }}kg</p>

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
