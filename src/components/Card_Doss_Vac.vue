<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
import type { DossierVacResponse } from '@/pocketbase-types';
import IconLocker from '@/components/icons/IconLocker.vue';
import ImgPb from './ImgPb.vue';
const props = defineProps<DossierVacResponse<any>>();

// const TempsRestant =
</script>
<template>
  <article class="mx-4 py-5">
      <picture class="block rounded-t-lg overflow-hidden bg-slate-400 h-32">
        <!-- <img
          class="transition-all duration-300 ease-in-out group-hover:scale-110"
          :src="props.Couverture"
          :alt="props.CouvertureALt"
        /> -->
        <ImgPb :record="props" :filename="props.couverture" />
      </picture>
      <!-- <div
        class="absolute inset-0 flex items-center justify-center gap-3 bg-neutral-500 bg-opacity-20"
      >
        <IconLocker class="w-12 h-12 stroke-White" />
        <p class="text-lg text-White">8J : 12 : 46 : 15</p>
      </div> -->
    <div class="flex flex-col gap-1 bg-lavenderBlue rounded-b-lg py-5 h-22">
      <div class="flex flex-row items-center gap-8 px-4">
        <h1 class="text-lg font-bold">{{ props.title }}</h1>
        <p class="text-xs font-light justify-end">crée le {{ props.created }}</p>
      </div>
      <p class="text-xs font-light px-4">vous,nom,prénom</p>
    </div>
  </article>
</template>
