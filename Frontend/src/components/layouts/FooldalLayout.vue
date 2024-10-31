<template>
  <HeaderLayout />
  <NavbarLayout />
  <div class=""></div>
  <div class=""></div>
  <main>
    <router-view />
  </main>
</template>

<script>
import HeaderLayout from "@layouts/HeaderLayout.vue";
import NavbarLayout from '@layouts/NavbarLayout.vue';

export default {
  components: {
    HeaderLayout,
    NavbarLayout,
  },
};
</script>
