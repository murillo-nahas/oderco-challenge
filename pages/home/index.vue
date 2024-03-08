<template>
  <Breadcrumb :title="'Home'" />

  <div class="flex justify-center items-center">
    <Spinner v-if="!data" />
  </div>

  <main
    class="mt-32 mb-32 flex flex-col flex-wrap items-center justify-center w-4/5 m-auto"
    v-if="data"
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
        :value="searchPeopleParam"
        @input="handleInputSearch"
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
      v-if="filteredPeopleData.length === 0"
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

    <CharacterCard :filteredPeopleData="filteredPeopleData" />
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const searchPeopleParam = ref("");

const { data }: any = await useFetch(config.public.API_PEOPLE_URL);

const filteredPeopleData = computed(() => {
  return data.value.filter((el: any) =>
    el.name.toLowerCase().includes(searchPeopleParam.value.toLowerCase())
  );
});

function handleInputSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  searchPeopleParam.value = input.value;
}

function handleClearSearch() {
  searchPeopleParam.value = "";
}

useHead({
  title: "SWAPI",
});
</script>
