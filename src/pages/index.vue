<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue';
import { onMounted, ref } from 'vue';
import Pocketbase from 'pocketbase'


const currentUser = ref()
onMounted(async () => {
  const pb = new Pocketbase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})
</script>

<template>
  <main class="bg-blueBell grid-cols-4  h-screen mt-20  " v-scroll-lock="true">
  <h1 v-if="currentUser" class=" text-center text-2xl font-bold pt-8">Ravi de vous revoir <br> {{ currentUser.firstName }}{{ currentUser.lastName }}</h1>
  <h5 class="text-base font-semibold m-4 ">Accès rapide</h5>
  <div class="">
    
    <!-- card chat -->
    <RouterLink to="/PageChat"><div class=" rounded-lg bg-lavenderBlue shadow-md p-4 m-4 ">
      
      <h4 class="text-xl font-medium p-2">Chat</h4>
      <!-- Les derniers messages -->
      <div class="bg-neutral-50 rounded-md px-4 gap-1">
        <div class="flex items-center gap-4">
          <RouterLink to="/"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
      </div>
      
    </div>
    </RouterLink>
    <!-- bouton rencontre de nouvelle personne -->
    <div class="rounded-lg  bg-lavenderBlue shadow-md p-4 m-4">
      <RouterLink to="/PageRencontre"><h4 class="text-lg font-semibold">Rencontrer  une nouvelle personne ?</h4> </RouterLink>
    </div>
    
    <!-- bouton dossier vacance -->
    <div class="rounded-lg  bg-lavenderBlue shadow-md p-4 m-4">
      <RouterLink to="/PageDossier_Vacance"><h4 class="text-lg font-semibold">Album partagé</h4></RouterLink>
    </div>
  </div>
  </main>
</template>
