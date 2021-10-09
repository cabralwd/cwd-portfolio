<template>
  <transition-group tag="section" name="anima-banner" appear class="banner">
    <h1 class="titulo-principal" key="title">
      Portfolio
    </h1>
    <p key="descricao">
      Se você chegou até aqui é porque está procurando um Web Designer e
      Programador! <br class="hideThis" />
      Pois bem... Você encontrou, agora deixe-me apresentar:
    </p>
  </transition-group>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  margin-top: 160px;

  .titulo-principal {
    font-size: 4rem;
    font-family: Saira Stencil One, Verdana, Geneva, Tahoma, sans-serif;
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

.anima-banner-enter-active {
  opacity: 0;
  transition: all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.anima-banner-enter-to {
  opacity: 1;
}
</style>
