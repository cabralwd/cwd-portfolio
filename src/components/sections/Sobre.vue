<template>
  <section class="sobre container" id="sobre">
    <div class="grid">
      <div class="perfil">
        <img src="../../assets/images/foto-perfil-dev.png" alt="" />
      </div>
      <div class="historia">
        <p>
          Sou Desenvolvedor Front-end apaixonado por código, finanças e
          culinária. Tenho uma bagagem na área que é super desafiadora e pude
          ter a oportunidade de evoluir minhas habilidades ao lado de pessoas
          incríveis. <br /><br />
          Em meu portifólio você terá acesso as minhas <strong>Skills</strong>,
          <strong>Projetos</strong> criados,
          <strong>experiência profissional</strong> e
          <strong>meus contatos</strong>. E falando nisso, já vou deixar abaixo
          os links das minhas redes, e-mails e telefone para batermos um papo!
        </p>
        <RedesSociais class="contatos-sobre" />
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
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text);

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
    align-items: center;

    @include tamanho-tela(tablet) {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    img {
      background: var(--color-highlight);
      border-radius: 100%;
      width: auto;
      margin: 0 auto;
    }
  }

  .historia {
    .contatos-sobre {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 40px;
      font-size: 1.4rem;

      @include tamanho-tela(apenas-celular) {
        align-items: center;
        font-size: 1rem;
      }

      @include tamanho-tela(desktop) {
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-end;
      }
    }
  }
}
</style>
