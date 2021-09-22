<template>
  <section class="skills container">
    <Titulo titulo="Skills" :subtitulo="skills.title" />

    <transition-group tag="div" class="conteudo" name="skills">
      <div v-for="skill in skills.items" :key="skill.id">
        <div class="fundo">
          <div class="icon">
            <i :class="skill.logo"></i>
          </div>
          <div class="infos">
            <h5>{{ skill.linguagem }}</h5>
            <p>
              <span>Tempo:</span>
              <span>{{ skill.tempo | formatandoData }}</span>
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
    </transition-group>
    <BtnMais
      name="habilidades"
      :novos-itens="{ secao: 'ALTERA_SKILLS', qtdItensMostrar: 3 }"
      :tem-novos-itens="Boolean(hasSkillsDb)"
    />
  </section>
</template>

<script>
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

import moment from "moment";

import { mapState, mapActions } from "vuex";

export default {
  name: "Skills",
  components: {
    Titulo,
    BtnMais,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["skills", "hasSkillsDb"]),
  },
  filters: {
    formatandoData(data) {
      return moment(
        new Date(data),
        ["ddd MMM DD YYYY HH:mm:ss Z+HHmm"],
        "pt-br",
        true
      ).fromNow();
    },
  },
  methods: {
    ...mapActions(["insereItensNaLista"]),
  },
  created() {
    this.insereItensNaLista({ secao: "ALTERA_SKILLS", qtdItensMostrar: 3 });
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
    margin-bottom: 60px;

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

.skills-enter-active {
  transform: translate3d(0, -100px, 0);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
}

.skills-enter-to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>
