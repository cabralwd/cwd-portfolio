<template>
  <div>
    <Header />
    <section class="banner">
      <h1 class="titulo-principal">Portfolio</h1>
      <p>
        Se você chegou até aqui é porque está procurando um Web Designer &
        Programador! <br class="hideThis" />
        Pois bem... Você encontrou, agora deixe me apresentar:
      </p>
    </section>
    <Sobre />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Sobre,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  margin-top: 160px;

  .titulo-principal {
    font-size: 4rem;
    font-family: Saira Stencil One, cursive;
    color: var(--color-highlight);

    @include tamanho-tela(celular) {
      font-size: 6.5rem;
    }

    @include tamanho-tela(tablet) {
      font-size: 8.5rem;
    }

    @include tamanho-tela(desktop) {
      font-size: 12.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    padding: 0.1rem 30px;
    color: var(--color-text);

    @include tamanho-tela(celular) {
      font-size: 1.3rem;
    }

    @include tamanho-tela(desktop) {
      padding: 0.1rem 0;
    }
  }
}
</style>
