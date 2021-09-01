<template>
  <div class="btn-mais">
    <div class="plus">
      <p>+</p>
    </div>
    <div class="text">
      <p>mais {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnMais",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.btn-mais {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.375rem;
  font-weight: 600;

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
</style>
