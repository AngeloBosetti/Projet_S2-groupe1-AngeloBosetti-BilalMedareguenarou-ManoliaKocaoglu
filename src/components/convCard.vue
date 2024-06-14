<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { UsersResponse } from '@/pocketbase-types';
import IconUser from './icons/IconUser.vue';

const props = defineProps<UsersResponse<any>>();
console.log(props);

</script>

<template>
  
    <div class="flex border-y-2 w-full px-4 items-center gap-4">
        <IconUser class="my-4" />
        <h5 class="text-lg font-semibold m-2">{{ props.username }}</h5>
        
    </div>
  
</template>
