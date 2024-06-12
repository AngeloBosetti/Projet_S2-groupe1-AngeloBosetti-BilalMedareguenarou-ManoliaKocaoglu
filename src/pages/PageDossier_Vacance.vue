<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import Card from '@/components/Card_Doss_Vac.vue';
import { onMounted, ref } from 'vue';
import {pb, AllDossVac} from '@/backend';


const currentUser = ref()

onMounted(async () => {

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})
//
const CardListe = await AllDossVac()
</script>

<template>
  <main class="grid-cols-4  h-screen mt-20  ">
    <h1 class=" items-center text-xl font-semibold">Dossier Vacance</h1>
    <Card v-for="DossierVacRecord in CardListe" :key="DossierVacRecord.id" v-bind="DossierVacRecord" />
    
  </main>
</template>
