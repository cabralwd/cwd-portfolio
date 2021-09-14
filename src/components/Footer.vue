<template>
  <footer>
    <div class="container">
      <p>Gostou? Fique a vontade para entrar em</p>
      <h4>Contato</h4>
      <RedesSociais big-size="big-size" />

      <div class="ferramentas">
        <p>
          Desenvolvido com
          <a href="https://br.vuejs.org/" target="_blank"
            ><i class="devicon-vuejs-plain" title="Vue.js"></i
          ></a>
          <a href="https://pt.wikipedia.org/wiki/JavaScript" target="_blank"
            ><i class="devicon-javascript-plain" title="JavaScript"></i
          ></a>
          <a href="https://sass-lang.com/" target="_blank"
            ><i class="devicon-sass-original" title="Sass"></i
          ></a>
          <a href="https://code.visualstudio.com/" target="_blank"
            ><i class="devicon-vscode-plain" title="VsCode"></i
          ></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import RedesSociais from "@/components/RedesSociais";

export default {
  name: "Footer",
  components: {
    RedesSociais,
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  padding: 100px 0;
  text-align: center;
  background-color: var(--color-highlight-bg);

  h4 {
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
    font-size: 1.375rem;
    color: var(--color-text);
  }

  .ferramentas {
    margin-top: 2rem;
    a {
      text-decoration: none;
    }
    i {
      padding: 0 0.5rem;
    }
  }
}
</style>
