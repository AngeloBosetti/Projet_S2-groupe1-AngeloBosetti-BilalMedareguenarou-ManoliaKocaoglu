<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink  } from 'vue-router/auto'
import IconUser from '@/components/icons/IconUser.vue'
import IconMysClick from '@/components/icons/IconMysClick.vue'
const HeaderIs = ref(true)
</script>
<template>
    <header  v-if="HeaderIs" class="fixed bg-White w-screen top-0 z-10">
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