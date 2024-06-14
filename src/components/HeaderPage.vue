<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink  } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue'
import IconMysClick from '@/components/icons/IconMysClick.vue'

const currentUser = ref()

onMounted(async () => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
  console.log(currentUser.value)
})
</script>
<template>
    <header   class="fixed bg-White border-b-2 stroke-Black w-screen top-0 z-10" v-if="$route.path !== '/connexion' && $route.path !== '/Inscription/PageInscription' && $route.path !== '/Inscription/PageBienvenue'  && $route.path !== '/chat/[id].vue' && $route.path !== '/compte'  && $route.path !== '/compte/CompteChange'">
        <div class="flex  items-center justify-between p-4">
            <RouterLink to="/"><IconMysClick class="stroke-transparent" /></RouterLink>
            <ul>
                <li class="text-lg font-bold ">MysClick</li>
            </ul>
            <div>
            <RouterLink to="/compte"><IconUser class=" stroke-transparent" /></RouterLink>
            </div>
        </div>
    </header>

</template>