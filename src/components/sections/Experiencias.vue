<template>
  <section class="experiencias container">
    <Titulo titulo="Experiência Profissional" :subtitulo="experiencias.title" />
    <transition-group tag="div" class="conteudo" name="anima">
      <div
        class="item"
        v-for="experiencia in experiencias.items"
        :key="experiencia.id"
      >
        <h4 class="titulo">{{ experiencia.titulo }}</h4>
        <p class="data">{{ experiencia.data_inicio }}</p>
        <ul class="atribuicoes">
          <li
            v-for="(atribuicao, index) in experiencia.atribuicoes"
            :key="index"
          >
            {{ atribuicao }}
          </li>
        </ul>
      </div>
    </transition-group>
    <BtnMais
      name="experiências"
      :novos-itens="{ secao: 'ALTERA_EXPERIENCIAS', qtdItensMostrar: 1 }"
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
