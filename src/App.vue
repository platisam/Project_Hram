<template>
  <AppHeader />
  <WrapperApp />
  <AppFooter />

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import WrapperApp from "./components/WrapperApp.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
