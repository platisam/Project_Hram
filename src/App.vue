<template>
  <AppHeader />
  <WrapperApp />
  <IntroApp />
  <HeroApp />
  <ServicesApp />
  <ContextApp />
  <AppFooter />

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import WrapperApp from "@/components/WrapperApp.vue";
import IntroApp from "@/components/IntroApp.vue";
import HeroApp from "@/components/HeroApp.vue";
import ServicesApp from "@/components/ServicesApp.vue";
import ContextApp from "@/components/ContextApp.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
