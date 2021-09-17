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
    <BtnMais
      name="experiências"
      :novos-itens="{ secao: 'ALTERA_EXPERIENCIAS', qtdItensMostrar: 2 }"
      :tem-novos-itens="Boolean(hasExperienciasDb)"
    />
  </section>
</template>

<script>
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

import { mapState, mapActions } from "vuex";

export default {
  name: "Experiencias",
  components: {
    Titulo,
    BtnMais,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["experiencias", "hasExperienciasDb"]),
  },
  methods: {
    ...mapActions(["insereItensNaLista"]),
  },
  created() {
    this.insereItensNaLista({
      secao: "ALTERA_EXPERIENCIAS",
      qtdItensMostrar: 1,
    });
  },
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
