<script setup lang="ts">
import { pb } from '@/backend';
import { onMounted, ref } from 'vue';
import IconUser from '@/components/icons/IconUser.vue';
import Button from '@/components/Button.vue';

const currentUser = ref();

onMounted(async() => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
});
</script>


<template>
  <div class="flex flex-col mx-4 col-start-1 h-screen mt-20 gap-5">
    <picture class="flex flex-col items-center mt-10 z-10">
      <IconUser class="flex w-48 h-auto" />
    </picture>
    <div v-if="currentUser" class="flex flex-col justify-center gap-4">
      <p class="p-3 rounded-lg text-xl font-bold text-center">
        {{ currentUser.lastName }} {{ currentUser.firstName }}
      </p>
      <p class="bg-neutral-300 p-3 rounded-lg text-xs font-semibold">Prénom</p>
      <p class="bg-neutral-300 p-3 rounded-lg text-xs font-semibold">Description</p>
    </div>
    <Button class="flex items-center justify-center" url="/parametre" text="Paramètres" />
  </div>
</template>

