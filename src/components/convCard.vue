<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { UsersResponse } from '@/pocketbase-types';
import IconUser from './icons/IconUser.vue';

const props = defineProps<UsersResponse<any>>();
console.log(props);

</script>

<template>
  <RouterLink to="../chat">
    <div class="flex items-center gap-4">
      <IconUser />
      <div>
        <h5 class="text-lg font-semibold">{{ props.username }}</h5>
        <p class="text-md font-medium">
          Salut mec comment ça va ? Je voulais te demander un truc ?
        </p>
      </div>
    </div>
  </RouterLink>
</template>
