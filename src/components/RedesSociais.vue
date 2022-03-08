<template>
  <div :class="bigSize">
    <ul class="contatos">
      <li>
        Contato:
        <a href="mailto:contato@cwd.dev.br" target="_self"
          >contato@cwd.dev.br</a
        >
      </li>
      <li>
        Projetos:
        <a href="mailto:projetos@cwd.dev.br" target="_self"
          >projetos@cwd.dev.br</a
        >
      </li>
      <li>
        WhatsApp:
        <a
          href="https://api.whatsapp.com/send?phone=5511960197454&text=Adorei%20seus%20servi%C3%A7os%2C%20podemos%20conversar%3F"
          target="_blank"
          >+55 11 96019-7454</a
        >
      </li>
    </ul>
    <ul class="redes-sociais">
      <li>
        <a href="https://www.linkedin.com/in/cwd-dev/" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-linkedin"
        /></a>
      </li>
      <li>
        <a href="https://github.com/cwd-dev" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-github"
        /></a>
      </li>
      <li>
        <a href="https://www.behance.net/cwd-dev" target="_blank"
          ><font-awesome-icon icon="fa-brands fa-behance"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RedesSociais",
  props: ["bigSize"],
};
</script>

<style lang="scss" scoped>
a {
  font-weight: 700;
}

li {
  line-height: 1.3;
}

.contatos {
  margin-top: 20px;
  color: var(--color-text);

  @include tamanho-tela(desktop) {
    margin-top: 0;
  }
}

.redes-sociais {
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  width: 140px;
  font-size: 2rem;
  margin-top: 20px;

  @include tamanho-tela(celular) {
    width: 110px;
    font-size: 1.6rem;
  }

  @include tamanho-tela(tablet) {
    margin-top: 15px;
    width: 120px;
    font-size: 1.8rem;
  }
  @include tamanho-tela(desktop) {
    width: 130px;
    font-size: 2rem;
  }
  @include tamanho-tela(desktop-up) {
    width: 140px;
    font-size: 2.2rem;
  }
}

.big-size {
  font-size: 1.07rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .redes-sociais {
    li {
      line-height: 1.3;
      font-size: 1.05em;

      @include tamanho-tela(tablet) {
        font-size: 1.15em;
      }
    }
  }
}
</style>
