<template>
  <HeaderApp />
  <RouterView />
  <FooterApp />
</template>

<script setup>
import { RouterView } from "vue-router";
import FooterApp from "@/components/FooterApp.vue";
import HeaderApp from "@/components/HeaderApp.vue";
</script>

<style lang="scss"></style>
