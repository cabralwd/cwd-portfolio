<template>
  <section class="sobre container">
    <div class="grid">
      <div class="perfil">
        <p>Muito prazer, me chamo <br /><span>Junior Cabral</span></p>
        <img src="../assets/images/foto-perfil-ceo.png" alt="" />
      </div>
      <div class="historia">
        <p>
          Sou idealizador da marca CWD e responsável inteiramente pelos projetos
          de desenvolvimento Web por aqui. Tenho uma bagagem na área que é super
          desafiadora e pude ter a oportunidade de evoluir minhas habilidades ao
          lado de pessoas incríveis. <br /><br />
          Em meu portifólio você terá acesso as minhas <strong>Skills</strong>,
          <strong>Projetos</strong> criados,
          <strong>experiência profissional</strong> e
          <strong>meus contatos</strong>. E falando nisso, já vou deixar abaixo
          os links das minhas redes, email e telefone caso queira bater um papo!
        </p>
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
            <a href="https://www.behance.net/cabralwd" target="_blank"
              >Behance</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sobre",
};
</script>

<style lang="scss" scoped>
.sobre {
  margin-top: 100px;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text);

  &::before,
  &::after {
    content: "";
    width: 100%;
    display: block;
    opacity: 0.25;
    border-top: 2px solid var(--color-text);
  }

  strong {
    font-weight: 700;
  }

  .grid {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
    padding: 60px 0;

    @include tamanho-tela(tablet) {
      grid-template-columns: 270px 1fr;
    }
  }

  .perfil {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @include tamanho-tela(tablet) {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    p {
      text-align: center;
      margin-top: 1.3rem;

      @include tamanho-tela(tablet) {
        text-align: initial;
        margin-top: 0;
      }

      span {
        font-family: Saira Stencil One, cursive;
        color: var(--color-highlight);
        font-size: 2.625rem;
      }
    }

    img {
      background: var(--color-highlight);
      border-radius: 100%;
      width: 150px;
    }
  }

  .historia {
    a {
      font-weight: 700;
    }

    li {
      line-height: 1.3;
    }

    .contatos {
      margin-top: 20px;
    }

    .redes-sociais {
      display: flex;

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
  }
}
</style>
