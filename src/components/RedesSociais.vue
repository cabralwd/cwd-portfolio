<template>
  <div :class="bigSize">
    <ul class="contatos">
      <li>
        E-mail:
        <a href="mailto:cabralwd@icloud.com" target="_self"
          >cabralwd@icloud.com</a
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
        <a href="https://www.linkedin.com/in/cabralwd/" target="_blank"
          >Linkedin</a
        >
      </li>
      <li>
        <a href="https://github.com/cabralwd" target="_blank">Github</a>
      </li>
      <li>
        <a href="https://www.behance.net/cabralwd" target="_blank">Behance</a>
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
.big-size {
  font-size: 1.35rem;

  .redes-sociais {
    justify-content: center;

    li {
      line-height: 1.3;
      font-size: 1.05em;

      @include tamanho-tela(tablet) {
        font-size: 1.15em;
      }
    }
  }
}

a {
  font-weight: 700;
}

li {
  line-height: 1.3;
}

.contatos {
  margin-top: 20px;
  color: var(--color-text);
}

.redes-sociais {
  display: flex;
  color: var(--color-text);

  li {
    &::after {
      content: "\2012";
      padding: 0 5px;
    }

    &:last-child {
      &::after {
        content: "";
      }
    }
  }
}
</style>
