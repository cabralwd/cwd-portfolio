<template>
  <main id="app">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    titleTemplate: "CWD | %s",
  },
};
</script>

<style lang="scss">
// Fontes
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap");

// Estilos principais
@import "/scss/conteudo";
</style>
