<template>
  <section class="sobre container">
    <div class="grid">
      <div class="perfil">
        <p>Muito prazer, me chamo <br /><span>Junior Cabral</span></p>
        <img src="../../assets/images/foto-perfil-dev.png" alt="" />
      </div>
      <div class="historia">
        <p>
          Sou Desenvolvedor Front-end apaixonado por código, finanças e
          cozinhar. Tenho uma bagagem na área que é super desafiadora e pude ter
          a oportunidade de evoluir minhas habilidades ao lado de pessoas
          incríveis. <br /><br />
          Em meu portifólio você terá acesso as minhas <strong>Skills</strong>,
          <strong>Projetos</strong> criados,
          <strong>experiência profissional</strong> e
          <strong>meus contatos</strong>. E falando nisso, já vou deixar abaixo
          os links das minhas redes, e-mail e telefone para batermos um papo!
        </p>
        <RedesSociais />
      </div>
    </div>
  </section>
</template>

<script>
import RedesSociais from "@/components/RedesSociais";

export default {
  name: "Sobre",
  components: {
    RedesSociais,
  },
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
}
</style>
