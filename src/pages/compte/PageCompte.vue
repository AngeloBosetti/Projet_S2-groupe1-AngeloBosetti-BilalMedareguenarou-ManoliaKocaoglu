<script setup lang="ts">
import Pocketbase from 'pocketbase'
import IconUser from '@/components/icons/IconUser.vue';
import { onMounted, ref } from 'vue';
import Button from '@/components/Button.vue';

const currentUser = ref()
onMounted(async () => {
  const pb = new Pocketbase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

//
</script>

<template>
  <div class="flex flex-col mx-4 col-start-1 h-screen mt-20  ">
    <picture class="flex col-start-1 col-span-4 row-start-1 row-span-1 "><IconUser class="flex items-center" /></picture>
    
    <form class="  pt-8  text-Black ">
          <!-- <div class="flex flex-col justify-center gap-4">
            <p class="text-xs ">Nom</p>
              <input v-model="username" type="username" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Nom">
            <p class="text-xs ">Prénom</p>
              <input v-model="username" type="username" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Prénom">
            <p class="text-xs ">Mots de passe</p>
              <input v-model="password" type="password" class="w-full font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Votre mots de passe">
          </div> -->
      </form>
    <Button class="flex items-center justify-center" url="/" text="Paramètres" />
  </div>
</template>
