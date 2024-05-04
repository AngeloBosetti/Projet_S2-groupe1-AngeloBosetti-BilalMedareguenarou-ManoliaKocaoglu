<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Menu from './components/MenuPages.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Menu />
</template>
