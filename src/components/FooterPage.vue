<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconChat from '@/components/icons/IconChat.vue'
import IconDossierVac from '@/components/icons/IconDossierVac.vue'
import IconRencontre from '@/components/icons/IconRencontre.vue'

</script>
<template>
    <footer class= "fixed w-screen  bottom-0">
           <div class="bg-White flex items-centr justify-between space-x-4 p-6 px-8">
            <RouterLink to="/PageDossier_Vacance" class=" flex flex-col justify-center"><IconDossierVac /></RouterLink>
            <RouterLink to="/PageChat" class=" "><IconChat /></RouterLink>
            <RouterLink to="/PageRencontre" class=" "><IconRencontre /></RouterLink>
            </div>
    </footer>
</template>