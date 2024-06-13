<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { UsersResponse } from '@/pocketbase-types';
import IconUser from './icons/IconUser.vue';

const props = defineProps<UsersResponse<any>>();
console.log(props);

</script>

<template>
  
    <div class="flex items-center gap-4">
      <RouterLink to="../chat">
          <IconUser />
      </RouterLink>
      
      <div>
        <h5 class="text-lg font-semibold">{{ props.username }}</h5>
        
      </div>
    </div>
  
</template>
