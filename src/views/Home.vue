<template>
  <div>
    <Header />
    <section class="banner">
      <h1 class="titulo-principal">Portfolio</h1>
      <p>
        Se você chegou até aqui é porque está procurando um Web Designer &
        Programador! <br class="hideThis" />
        Pois bem... Você encontrou, agora deixe me apresentar:
      </p>
    </section>
    <Sobre />
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

    <section class="projetos container">
      <Titulo
        titulo="Projetos"
        subtitulo="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?"
      />
      <div class="conteudo">
        <div class="projeto" v-for="projeto in projetos" :key="projeto.id">
          <div @click="toggleOverlay(projeto.id, $event)">
            <div :class="['overlay', `id-${projeto.id}`]">
              <h3>{{ projeto.titulo }}</h3>
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

      <BtnMais name="projetos" />
    </section>

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

    <footer>
      <div class="container">
        <p>Gostou? Fique a vontade para entrar em</p>
        <h4>Contato</h4>

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
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import Titulo from "@/components/Titulo";
import BtnMais from "@/components/BtnMais";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: {
    Header,
    Sobre,
    Titulo,
    BtnMais,
  },
  data() {
    return {
      carregou: true,
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
      projetos: [
        {
          id: 1,
          image: "",
          titulo: "BioTecBrazil",
          descricao:
            "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Per aumento de cachacis, eu reclamis. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        },
        {
          id: 2,
          image: "",
          titulo: "Crowndfunding",
          descricao:
            "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Per aumento de cachacis, eu reclamis. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        },
      ],
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
  methods: {
    toggleOverlay(id) {
      const el = document.querySelector(`.overlay.id-${id}`);
      const elementos = document.querySelectorAll(".overlay");

      if (el) {
        elementos.forEach((el) => {
          el.classList.remove("active");
          el.offsetParent.classList.remove("open");
        });

        if (!el.classList.contains("active")) {
          document.querySelector(`.overlay.id-${id}`).classList.add("active");
          document
            .querySelector(`.overlay.id-${id}`)
            .offsetParent.classList.add("open");
        }
      } else {
        elementos[0].classList.add("active");
      }
    },
  },
  mounted() {
    this.toggleOverlay();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  margin-top: 160px;

  .titulo-principal {
    font-size: 4rem;
    font-family: Saira Stencil One, cursive;
    color: var(--color-highlight);

    @include tamanho-tela(celular) {
      font-size: 6.5rem;
    }

    @include tamanho-tela(tablet) {
      font-size: 8.5rem;
    }

    @include tamanho-tela(desktop) {
      font-size: 12.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    padding: 0.1rem 30px;
    color: var(--color-text);

    @include tamanho-tela(celular) {
      font-size: 1.3rem;
    }

    @include tamanho-tela(desktop) {
      padding: 0.1rem 0;
    }
  }
}

footer {
  margin-top: 100px;
  padding: 100px 0;
  text-align: center;
  background-color: var(--color-highlight-bg);

  h4 {
    font-size: 4rem;
    font-family: Saira Stencil One, cursive;
    color: var(--color-highlight);

    @include tamanho-tela(celular) {
      font-size: 6.5rem;
    }

    @include tamanho-tela(tablet) {
      font-size: 8.5rem;
    }

    @include tamanho-tela(desktop) {
      font-size: 12.5rem;
    }
  }

  p {
    font-size: 1.375rem;
    color: var(--color-text);
  }

  a {
    font-weight: 700;
  }

  li {
    line-height: 1.3;
    font-size: 1.375rem;
    color: var(--color-text);

    @include tamanho-tela(tablet) {
      font-size: 1.75rem;
    }
  }

  .contatos {
    margin-top: 20px;
  }

  .redes-sociais {
    display: flex;
    justify-content: center;

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

.projetos {
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
        max-width: inherit;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 30px;
        background-color: var(--color-highlight);
        opacity: 0.1;
        transition: all 1s;

        &.active {
          background-color: var(--color-gray);
          opacity: 1;

          h3,
          p {
            opacity: 1;
          }
        }

        h3 {
          opacity: 0;
          font-weight: 700;
          font-size: 1.357rem;
          margin-bottom: 30px;
          color: var(--color-gray-content);
        }

        p {
          opacity: 0;
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
