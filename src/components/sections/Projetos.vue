<template>
  <section class="projetos">
    <div class="container">
      <Titulo titulo="Projetos" :subtitulo="projetos.title" />
      <div class="conteudo">
        <div
          class="projeto"
          v-for="projeto in projetos.items"
          :key="projeto.id"
        >
          <div @click="toggleOverlayProjetos(projeto.id, $event)">
            <div :class="['overlay', `id-${projeto.id}`]">
              <h3>{{ projeto.titulo }}</h3>
              <small>clique aqui para ver mais</small>
              <p>{{ projeto.descricao }}</p>
            </div>
            <img
              :src="
                projeto.image
                  ? projeto.image
                  : 'https://via.placeholder.com/540x410'
              "
              :alt="projeto.titulo"
            />
          </div>
        </div>
      </div>

      <BtnMais
        name="projetos"
        :novos-itens="{ secao: 'ALTERA_PROJETOS', qtdItensMostrar: 2 }"
        :tem-novos-itens="Boolean(hasProjetosDb)"
      />
    </div>
  </section>
</template>

<script>
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

import { mapState, mapActions } from "vuex";

export default {
  name: "Projetos",
  components: {
    Titulo,
    BtnMais,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["projetos", "hasProjetosDb"]),
  },
  methods: {
    toggleOverlayProjetos(idItem) {
      const projeto = document.querySelector(`.overlay.id-${idItem}`);
      const projetos = document.querySelectorAll(".overlay");

      if (projeto) {
        projetos.forEach((el) => {
          el.classList.remove("active");
          el.offsetParent.classList.remove("open");
        });

        if (!projeto.classList.contains("active")) {
          document
            .querySelector(`.overlay.id-${idItem}`)
            .classList.add("active");
          document
            .querySelector(`.overlay.id-${idItem}`)
            .offsetParent.classList.add("open");
        }
      } else {
        projetos[0].classList.add("active");
      }
    },
    ...mapActions(["insereItensNaLista"]),
  },
  created() {
    this.insereItensNaLista({ secao: "ALTERA_PROJETOS", qtdItensMostrar: 2 });
  },
  mounted() {
    this.toggleOverlayProjetos();
  },
};
</script>

<style lang="scss" scoped>
.projetos {
  position: relative;
  padding: 1px 0 5rem 0;
  max-width: 1920px;
  margin: 120px auto 0 auto;

  &::before {
    content: "";
    background: red url("~@/assets/images/bg-projetos.jpg") no-repeat;
    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
    object-fit: cover;
    position: absolute;
    opacity: 0.14;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .conteudo {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 30px;
    margin-bottom: 60px;

    @include tamanho-tela(desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    .projeto {
      position: relative;
      cursor: pointer;

      &.open {
        transform: scale(1.05);
        cursor: initial;
      }

      div {
        max-width: 540px;
      }

      .overlay {
        position: absolute;
        width: 100%;
        max-width: inherit;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 30px;
        background-color: var(--color-text);
        opacity: 0.9;
        transition: all 1s;

        &.active {
          background-color: var(--color-text);
          opacity: 0.7;

          h3 {
            margin-bottom: 30px;
          }

          small {
            display: none;
          }

          p {
            display: block;
          }
        }

        h3 {
          opacity: 1;
          font-weight: 700;
          font-size: 1.357rem;
          margin-bottom: 0;
          color: var(--color-gray-content);
        }

        small {
          display: block;
          color: var(--color-highlight);
          margin-top: 1rem;
          text-decoration: underline;
        }

        p {
          display: none;
          font-size: 0.8rem;
          color: var(--color-gray-content);

          @include tamanho-tela(tablet) {
            font-size: 1.125rem;
          }
        }
      }
    }
  }
}
</style>
