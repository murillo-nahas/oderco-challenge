export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  components: true,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Projeto Star Wars SWAPI - consulte as principais informações dos seus personagens.' }
      ],
    }
  },
  
});
