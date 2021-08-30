<template>
  <header class="shadow">
    <router-link id="logo" to="/">
      <h1>
        <span>CWD</span> <br />
        <span>cabral web designer</span>
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
      <div class="menu">
        <div class="open-menu">
          <div id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Menu</p>
        </div>
        <ul style="display: none;">
          <li></li>
        </ul>
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
  font-family: Saira Stencil One, cursive;
  text-decoration: none;

  span {
    &:first-child {
      color: var(--color-highlight);
      font-size: 2.625rem;
    }

    &:last-child {
      color: var(--color-text);
    }
  }
}

nav {
  display: flex;

  .modo-dark {
    cursor: pointer;
    margin-right: 30px;

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

      span {
        display: block;
        background-color: var(--color-text);
        width: 100%;
        height: 4px;
      }
    }
  }
}
</style>
