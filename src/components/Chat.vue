<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { pb } from '@/backend';
import type { MessagesResponse } from '@/pocketbase-types';

const currentUser = ref(null);
onMounted(() => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
});

const props = defineProps<MessagesResponse>();
</script>

<template>
  <div class="flex flex-col w-3/4" :class="[props.from.id === currentUser.value?.id ? 'bg-lavenderBlue self-end' : 'bg-blueBell']">
    <p>{{ props.content }}</p>
  </div>
</template>

<style scoped>
.bg-lavenderBlue {
  background-color: #c3b1e1;
}

.bg-blueBell {
  background-color: #a2cffe;
}
</style>