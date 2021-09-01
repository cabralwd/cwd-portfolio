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
    <section class="projetos">
      <Titulo
        titulo="Projetos"
        subtitulo="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?"
      />
      <BtnMais name="projetos" />
    </section>
    <section class="experiencia">
      <Titulo
        titulo="Experiência Profissional"
        subtitulo="Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis?"
      />
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
  methods: {},
  components: {
    Header,
    Sobre,
    Titulo,
    BtnMais,
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
</style>
