<template>
  <transition-group tag="section" name="anima-banner" appear class="banner">
    <h1 class="titulo-principal" key="title">Olá, me chamo</h1>
    <small key="name">Junior Araújo</small>
    <p key="descricao">
      Se você chegou até aqui é porque está procurando um Web Designer e
      Programador! Pois bem... Você encontrou, agora deixe-me apresentar:
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
  font-size: 3rem;

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: var(--color-highlight-bg);
    top: 0;
    right: 0;
    border-radius: 50%;
    opacity: 0.3;

    @include tamanho-tela(celular) {
      width: 300px;
      height: 300px;
    }
    @include tamanho-tela(tablet) {
      width: 400px;
      height: 400px;
    }
    @include tamanho-tela(desktop) {
      width: 500px;
      height: 500px;
    }
    @include tamanho-tela(desktop-up) {
      width: 900px;
      height: 900px;
    }
  }

  .titulo-principal {
    font-family: Saira Stencil One, Verdana, Geneva, Tahoma, sans-serif;
    color: var(--color-highlight);
    position: relative;
    font-size: 0.8em;

    @include tamanho-tela(celular) {
      font-size: 1.2em;
    }

    @include tamanho-tela(tablet) {
      font-size: 2em;
    }

    @include tamanho-tela(desktop) {
      font-size: 3em;
    }
  }

  small {
    font-size: 0.8em;
    font-weight: 700;
    margin: 5px 0 25px 0;
    display: block;
    color: var(--color-text);

    @include tamanho-tela(celular) {
      font-size: 1em;
    }

    @include tamanho-tela(tablet) {
      margin: 20px 0;
      font-size: 1.4em;
    }

    @include tamanho-tela(desktop) {
      font-size: 2em;
    }
  }

  p {
    font-size: 1.2rem;
    padding: 0.1rem 30px;
    color: var(--color-text);
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

    @include tamanho-tela(celular) {
      font-size: 1.3rem;
    }

    @include tamanho-tela(desktop) {
      padding: 0.1rem 120px;
      font-size: 1.8rem;
    }

    &::before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: var(--color-text);
      bottom: 0;
      left: 0;
      opacity: 0.05;

      @include tamanho-tela(celular) {
        width: 100px;
        height: 100px;
      }
      @include tamanho-tela(tablet) {
        width: 150px;
        height: 150px;
      }
      @include tamanho-tela(desktop) {
        width: 200px;
        height: 200px;
      }
      @include tamanho-tela(desktop-up) {
        width: 250px;
        height: 250px;
      }
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
