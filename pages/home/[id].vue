<template>
  <h1 class="text-white">Dados: {{ responseData }}</h1>
</template>

<script setup lang="ts">
const { params }: any = useRoute();

const config = useRuntimeConfig();

const { data: people }: any = await useFetch(
  `${config.public.API_PEOPLE_URL}/${params.id}`
);

let responseData = people.value;
console.log(responseData);

useHead({
  title: `SWAPI`,
});
</script>
