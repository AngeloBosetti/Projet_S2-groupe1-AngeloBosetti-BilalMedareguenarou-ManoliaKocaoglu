<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router/auto'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'

onErrorCaptured((err, instance, info) => {
  console.error('erreur : ', err, '\ninfo : ', info, '\ncomposant : ', instance)
  return true
})

</script>

<template>
  <Header  class="fixed" />
    <RouterView /> 
  <Footer  />
</template>
