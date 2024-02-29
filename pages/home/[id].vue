<template>
  <h1 class="text-white">Dados: {{ responseData }}</h1>
</template>

<script setup lang="ts">
const { params }: any = useRoute();

const { data: people }: any = await useFetch(
  `https://swapi.dev/api/people/${params.id}/`
);

let responseData = people.value;
console.log(responseData);

useHead({
  title: `SWAPI - ${responseData.name}`,
  
})
</script>
