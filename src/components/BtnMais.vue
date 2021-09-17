<template>
  <div>
    <div
      v-if="temNovosItens"
      class="btn-mais"
      @click="insereItensNaLista(novosItens)"
    >
      <div class="plus">
        <p>+</p>
      </div>
      <div class="text">
        <p>veja mais {{ name }}</p>
      </div>
    </div>
    <div v-else class="sem-itens">
      <p>Não há mais {{ name }} no momento.</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BtnMais",
  props: { name: String, novosItens: Object, temNovosItens: Boolean },
  methods: {
    ...mapActions(["insereItensNaLista"]),
  },
};
</script>

<style lang="scss" scoped>
.btn-mais {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.375rem;
  font-weight: 600;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  .plus {
    border-radius: 100%;
    background-color: var(--color-highlight);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    flex-grow: 0;
    cursor: pointer;

    p {
      color: var(--color-primary);
    }
  }

  .text {
    cursor: pointer;
    p {
      color: var(--color-text);
      margin-top: 10px;
      flex-grow: 0;
    }
  }
}

.sem-itens {
  text-align: center;
  font-size: 1.2rem;
  cursor: not-allowed;
  color: var(--color-text);

  &::before {
    content: "❌";
    display: block;
    font-size: 2em;
    margin-bottom: 20px;
  }
}
</style>
