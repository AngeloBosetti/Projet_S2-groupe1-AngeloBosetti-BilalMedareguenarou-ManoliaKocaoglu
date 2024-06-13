<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink  } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue'
import IconMysClick from '@/components/icons/IconMysClick.vue'

</script>
<template>
    <header   class="fixed bg-White w-screen top-0 z-10" v-if="$route.path !== '/connexion' && $route.path !== '/inscription' && $route.path !== '/chat/[id].vue' && $route.path !== '/compte'  && $route.path !== '/compte/CompteChange'">
        <div class="flex  items-center justify-between p-4">
            <RouterLink to="/"><IconMysClick /></RouterLink>
            <ul>
                <li class="text-lg font-bold">MysClick</li>
            </ul>
            <RouterLink to="/compte"><IconUser /></RouterLink>
        </div>
        <span class="bg-black w-full h-1 "></span>

    </header>

</template>