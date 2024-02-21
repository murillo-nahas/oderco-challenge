<template>
  <main
    class="mt-32 flex flex-col flex-wrap items-center justify-center w-4/5 m-auto"
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
  </main>
</template>
