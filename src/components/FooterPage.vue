<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router/auto'
import IconChat from '@/components/icons/IconChat.vue'
import IconDossierVac from '@/components/icons/IconDossierVac.vue'
import IconRencontre from '@/components/icons/IconRencontre.vue'


</script>
<template>
    <footer class= "fixed w-screen border-t-2 stroke-Black  bottom-0" v-if="$route.path !== '/connexion' && $route.path !== '/Inscription/PageInscription' && $route.path !== '/Inscription/PageBienvenue' && $route.path !== '/chat/[id]' && $route.path !== '/compte' && $route.path !== '/compte/CompteChange'">
           <div class="bg-White  flex items-centr justify-between space-x-4 p-6 px-8">
            <RouterLink to="/PageDossier_Vacance" class=" flex flex-col justify-center"><IconDossierVac /></RouterLink>
            <RouterLink to="/chat" class=" "><IconChat /></RouterLink>
            <RouterLink to="/PageRencontre" class=" "><IconRencontre /></RouterLink>
            </div>
    </footer>
</template>