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
//
</script>

<template>
    <main class="mt-20 px-4">
    <h1>Chat</h1>
    <div class="flex items-center gap-4">
          <RouterLink to="/"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div><div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/PagesChatTest"><IconUser /></RouterLink>
          <div>
            <h5 class="text-lg font-semibold">Julie Casser</h5>
            <p class="text-md font-meduim">Salut mec comment ca va ? Je voulais te demander un truc ?</p>
          </div>
        </div>

    </main>
</template>
