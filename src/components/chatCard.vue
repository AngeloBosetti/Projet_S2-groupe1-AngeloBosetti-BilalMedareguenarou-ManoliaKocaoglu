<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {pb} from '@/backend';
// import { fetchUserMessages } from '@/backend';
import type { MessagesResponse } from '@/pocketbase-types';



const currentUser = ref()
onMounted(async () => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const props = defineProps<MessagesResponse>();

  // Remplacez par l'URL de votre instance Pocketbase


// 
</script>

<template>
  <div class="flex flex-col w-3/4" :class="[props.from == pb.authStore.model?.id ? 'bg-lavenderBlue ' : 'bg-blueBell self-end']">
    <p>{{ props.content }}</p>
  </div>
</template>
