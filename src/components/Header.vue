<template>
  <header class="shadow">
    <router-link id="logo" to="/">
      <h1>
        <span>CWD</span>
        <span>Code - Web - Design</span>
      </h1>
    </router-link>
    <nav>
      <div class="modo-dark" @click.prevent="toggleDark()">
        <svg
          width="33"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 2.66667C23.852 2.66667 29.8333 8.648 29.8333 16S23.852 29.3333 16.5 29.3333C9.148 29.3333 3.16667 23.352 3.16667 16 3.16667 8.648 9.148 2.66667 16.5 2.66667zM16.5 0C7.664 0 .5 7.164.5 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zm0 5.33333C10.6093 5.33333 5.83333 10.1093 5.83333 16S10.6093 26.6667 16.5 26.6667V5.33333z"
          />
        </svg>
      </div>
      <div class="menu" @click="toggleMenuDropdown = !toggleMenuDropdown">
        <div class="open-menu">
          <div id="hamburger" :class="[menuClose]">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>{{ menuName }}</p>
        </div>
        <transition
          name="menuDropdown"
          mode="out-in"
          v-on:enter="showClose()"
          v-on:leave="hideClose()"
        >
          <ul :class="['dropdown']" v-show="toggleMenuDropdown">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="#skills">Skills</router-link></li>
            <li><router-link to="#projetos">Projetos</router-link></li>
            <li><router-link to="#experiencia">Experiências</router-link></li>
            <li><router-link to="#contato">Contato</router-link></li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dark: false,
      toggleMenuDropdown: false,
      menuClose: "",
      menuName: "Menu",
    };
  },
  methods: {
    toggleDark() {
      if (!this.dark) {
        this.dark = true;
        return document.querySelector("body").classList.add("dark");
      } else {
        this.dark = false;
        return document.querySelector("body").classList.remove("dark");
      }
    },
    sizeMenuTop() {
      let top = document.querySelector("header").offsetHeight;
      document.querySelector(".dropdown").style.top = top + "px";
    },
    showClose() {
      this.menuClose = "menu-close";
      this.menuName = "Fechar";
    },
    hideClose() {
      this.menuClose = "";
      this.menuName = "Menu";
    },
  },
  mounted() {
    this.sizeMenuTop();
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-primary);
  padding: 15px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include tamanho-tela(desktop) {
    padding: 15px 60px;
  }

  &.shadow {
    box-shadow: 0px 0px 10px var(--color-gray);
  }
}

#logo {
  font-family: Saira Stencil One, Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;

  h1 {
    font-size: 2rem;

    @include tamanho-tela(tablet) {
      font-size: 3.1rem;
    }

    span {
      display: block;

      &:first-child {
        color: var(--color-highlight);
      }

      &:last-child {
        color: var(--color-text);
        font-size: 0.7rem;
        text-transform: uppercase;
      }
    }
  }
}

nav {
  display: flex;

  .modo-dark {
    cursor: pointer;
    margin-right: 15px;

    @include tamanho-tela(tablet) {
      margin-right: 30px;
    }

    svg {
      path {
        fill: var(--color-text);
      }

      &:hover {
        path {
          fill: var(--color-highlight);
        }
      }
    }
  }

  .menu {
    color: var(--color-text);

    .open-menu {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    #hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 30px;
      margin-right: 15px;

      &.menu-close {
        position: relative;
        justify-content: center;

        span {
          position: absolute;

          &:nth-child(1) {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }

      span {
        transition: all 0.5s;
        position: relative;
        background-color: var(--color-text);
        width: 100%;
        height: 4px;

        &:nth-child(1) {
          transform: rotate(0deg);
        }

        &:nth-child(2) {
          transform: rotate(0deg);
        }

        &:nth-child(3) {
          opacity: 1;
        }
      }

      @keyframes closeMenu {
        0% {
          transform: translate3d(0, 0, 0);
        }

        100% {
          transform: translate3d(0, 0, 0);
        }
      }
    }

    .dropdown {
      position: absolute;
      overflow-y: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: min-content;
      max-height: 100vh;
      padding: 1rem 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-primary);
      border-top: 5px solid var(--color-highlight);
      border-bottom: 5px solid var(--color-highlight);

      @include tamanho-tela(tablet) {
        padding: 2rem 0;
      }

      li {
        margin-top: 15px;
        font-size: 2rem;
        display: block;

        &:first-child {
          margin-top: 0;
        }

        @include tamanho-tela(celular) {
          font-size: 1.8rem;
        }

        @include tamanho-tela(tablet) {
          font-size: 2.5rem;
        }

        @include tamanho-tela(desktop) {
          font-size: 3rem;
          line-height: 1.2;
        }
      }
    }
  }
}

.menuDropdown-enter-active,
.menuDropdown-leave-active {
  transition: transform 0.7s;
}
.menuDropdown-enter,
.menuDropdown-leave-to {
  transform: translate3d(100vw, 0, 0);
}
</style>
