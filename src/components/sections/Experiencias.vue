<template>
  <section class="experiencias container">
    <Titulo
      titulo="Experiência Profissional"
      subtitulo="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?"
    />
    <div class="conteudo">
      <div
        class="item"
        v-for="experiencia in experiencias"
        :key="experiencia.id"
      >
        <h4 class="titulo">{{ experiencia.titulo }}</h4>
        <p class="data">{{ experiencia.data }}</p>
        <ul class="atribuicoes">
          <li v-for="(attr, index) in experiencia.atribuicoes" :key="index">
            {{ attr }}
          </li>
        </ul>
      </div>
    </div>
    <BtnMais name="experiências" />
  </section>
</template>

<script>
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

export default {
  name: "Experiencias",
  components: {
    Titulo,
    BtnMais,
  },
  data() {
    return {
      experiencias: [
        {
          id: 1,
          titulo: "Oliver Produções",
          data: "2021/08/12",
          atribuicoes: [
            "Workflow especializado em Desenvolvimento de E-mails Marketing com alta escalabilidade e compatibilidade;",
            "Programação utilizando técnicas avançadas com HTML/CSS;",
            "Criação de métodos que auxiliam na produtividade e trabalho em equipe;",
          ],
        },
        {
          id: 2,
          titulo: "Public Online Marketing Digital",
          data: "2021/08/12",
          atribuicoes: [
            "Workflow especializado em Desenvolvimento de E-mails Marketing com alta escalabilidade e compatibilidade;",
            "Programação utilizando técnicas avançadas com HTML/CSS;",
            "Criação de métodos que auxiliam na produtividade e trabalho em equipe;",
          ],
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.experiencias {
  .conteudo {
    .item {
      color: var(--color-text);

      // &:last-child {
      //   &::after {
      //     content: "";
      //     border: none;
      //   }
      // }

      &::after {
        content: "";
        width: 100%;
        display: block;
        opacity: 0.25;
        border-top: 2px solid var(--color-text);
        margin: 30px 0;
      }

      .titulo {
        font-weight: 700;
        font-size: 1.125rem;
      }

      .data {
        opacity: 0.5;
        margin: 0.2rem 0 0.5rem 0;
      }

      .atribuicoes {
        padding: 0 0 0 20px;
        li {
          list-style-type: disc;
          line-height: 1.3;
        }
      }
    }
  }
}
</style>
