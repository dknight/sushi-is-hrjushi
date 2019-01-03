<template>
  <div class="content">
    <div class="content__heading u-margin-bottom-medium">
      <h2 class="heading-2">
        <slot name="menu-title">Menu</slot>
      </h2>
      <slot name="menu-navigation"></slot>
    </div>
    <slot name="menu-content"></slot>
  </div>
</template>

<style lang="scss">
@import '../../assets/sass/global';

.content {
  height: 100%;
  &__heading {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    @media only screen and (max-width: $bp-tiny) {
      grid-template-rows: repeat(2, max-content);
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }

    .heading-2 {
      @media only screen and (max-width: $bp-tiny) {
        grid-row: 2 / 3;
      }
    }
  }
}
.menu-navigation {
  justify-self: end;

  @media only screen and (max-width: $bp-tiny) {
    justify-self: stretch;
  }
}
</style>