<template>
  <section class="skills container">
    <Titulo
      titulo="Skills"
      subtitulo="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?"
    />
    <div class="conteudo">
      <div v-for="skill in skills" :key="skill.id">
        <div class="fundo">
          <div class="icon">
            <i :class="skill.logo"></i>
          </div>
          <div class="infos">
            <h5>{{ skill.linguagem }}</h5>
            <p>
              <span>Tempo:</span> <span>{{ skill.tempo }}</span>
            </p>
            <p>
              <span>Nível:</span> <span>{{ skill.nivel }}</span>
            </p>
          </div>
        </div>
        <div class="descricao">
          <p>{{ skill.descricao }}</p>
        </div>
      </div>

      <BtnMais name="habilidades" />
    </div>
  </section>
</template>

<script>
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

export default {
  name: "Skills",
  components: {
    Titulo,
    BtnMais,
  },
  data() {
    return {
      skills: [
        {
          id: 1,
          logo: "devicon-vuejs-plain-wordmark",
          linguagem: "Vue.js",
          tempo: "20/12/2020",
          nivel: "Intermediário",
          descricao:
            "Framework JavaScript progressivo para construção de interfaces de usuário",
        },
        {
          id: 2,
          logo: "devicon-javascript-plain",
          linguagem: "JavaScript",
          tempo: "20/12/2020",
          nivel: "Intermediário",
          descricao:
            "Linguagem de programação da internet utilizada para dar interatividade as páginas",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
  .conteudo {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    align-items: center;
    gap: 30px;

    @include tamanho-tela(tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include tamanho-tela(desktop) {
      grid-template-columns: repeat(3, 1fr);
    }

    .fundo {
      background-color: var(--color-highlight-bg);
      padding: 10px 15px;
      color: var(--color-text);
      transition: transform 0.4s;
      display: flex;

      &:hover {
        background-color: var(--color-highlight);
        color: var(--color-primary);
        transform: scale(1.1);
      }
    }

    i {
      font-size: 3.5rem;
      margin-right: 10px;
    }

    .infos {
      width: 100%;
      h5 {
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 5px;
      }
      p {
        width: inherit;
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;
      }
    }

    .descricao {
      margin-top: 15px;
      text-align: center;
      color: var(--color-text);
    }
  }
}
</style>
