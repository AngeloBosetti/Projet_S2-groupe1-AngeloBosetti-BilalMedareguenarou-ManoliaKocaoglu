<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconMysClick from '@/components/icons/IconMysClick.vue';
import { onMounted, ref } from 'vue';
import {pb} from '@/backend';

const currentUser = ref()
onMounted(async () => {

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})
//
</script>

<template>
  <main class=" grid-cols-4  h-screen mt-20  ">
    <h1 class="text-3xl font-bold text-center justify-center pt-12 mx-10">Veux-tu Rencontrer une nouvelle personne ?</h1>
    <IconMysClick />
    <Button />
  </main>
</template>
