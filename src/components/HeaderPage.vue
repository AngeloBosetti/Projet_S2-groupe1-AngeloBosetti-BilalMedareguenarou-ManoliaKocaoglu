<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue'
import IconMysClick from '@/components/icons/IconMysClick.vue'

</script>
<template>
    <header class="fixed bg-White w-screen top-0 z-10">
        <div class="flex  items-center justify-between p-4">
            <RouterLink to="/PageAccueil"><IconMysClick /></RouterLink>
            <ul>
                <li class="text-lg font-bold">MysClick</li>
            </ul>
            <RouterLink to="/PageCompte"><IconUser /></RouterLink>
        </div>
        <span class="bg-black w-full h-1 "></span>

    </header>

</template>