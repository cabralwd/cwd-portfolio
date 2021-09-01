<template>
  <div class="titulos container">
    <h2>{{ titulo }}</h2>
    <h3 class="subtitulo">
      {{ subtitulo }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "Titulo",
  props: ["titulo", "subtitulo"],
};
</script>

<style lang="scss" scoped>
.titulos {
  margin-top: 100px;
  color: var(--color-text);

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;

    @include tamanho-tela(tablet) {
      font-size: 1.75rem;
    }
  }

  .subtitulo {
    margin-top: 10px;
    font-size: 1rem;
    text-align: center;
    opacity: 0.5;

    @include tamanho-tela(tablet) {
      font-size: 1.125rem;
    }
  }
}
</style>
