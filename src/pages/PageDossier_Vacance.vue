<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue';
import Card from '@/components/Card_Doss_Vac.vue';
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
  <main class="grid-cols-4  h-screen mt-20  ">
    <h1 class=" items-center text-xl font-semibold">Dossier Vacance</h1>
    <Card />
    
  </main>
</template>
