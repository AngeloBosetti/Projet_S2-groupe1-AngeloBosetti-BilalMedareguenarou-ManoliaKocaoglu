<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconMysClick from '@/components/icons/IconMysClick.vue';
import { onMounted, ref } from 'vue';
import Pocketbase from 'pocketbase'


const currentUser = ref()
onMounted(async () => {
  const pb = new Pocketbase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})
//
</script>

<template>
  <main class=" grid-cols-4  h-screen mt-20  ">
    <h1 class="text-3xl font-bold text-center justify-center pt-12 mx-10">Veux-tu Recontrer Une nouvelle personne ?</h1>
    
  </main>
</template>
