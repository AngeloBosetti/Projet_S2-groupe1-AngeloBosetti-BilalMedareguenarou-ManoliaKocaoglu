<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import IconLocker from '@/components/icons/IconLocker.vue'
const props = 
  defineProps<{
    url?: string
    id: number
    title: string
    created?: string
    dateDebut?: string
    dateFin?: string
    Couverture?: File
    CouvertureALt?: string
    images?: File[]
    personnes?: Array<String>
  }>()

</script>
<template>
  <article class="mx-4 py-5 ">
    <RouterLink class="relative" to="/">
      <picture class="block rounded-t-lg overflow-hidden bg-slate-400 h-32">
         <img
          class="transition-all duration-300 ease-in-out group-hover:scale-110"
          :src="Couverture" 
          :alt="CouvertureAlt"
        />
      </picture>
      <div class="absolute inset-0 flex items-center justify-center gap-3 bg-neutral-500 bg-opacity-20">
        <IconLocker class="w-12 h-12 stroke-White" />
        <p class="text-lg text-White ">8J : 12 : 46 : 15</p>
      </div>  
    </RouterLink>
    <div class="flex flex-col gap-1 bg-lavenderBlue rounded-b-lg py-5 h-22">
      <div class=" flex flex-row items-center gap-8 px-4">
        <h1 class="text-lg font-bold ">Titre</h1>
        <p class="text-xs font-light justify-end">crée le jj/mm/aaaa</p>
      </div>
      <p class="text-xs font-light px-4">vous,nom,prénom</p>
    </div>
  </article>
</template>
