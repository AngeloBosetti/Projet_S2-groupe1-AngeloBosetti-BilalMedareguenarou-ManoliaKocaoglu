<script setup lang="ts">
import type {Ref} from 'vue';
import { onMounted, provide, ref } from 'vue';
import Chat from '@/components/Chat.vue';
import {pb, Alluser} from '@/backend';
import convCard from '@/components/convCard.vue';

const userFrom = ref('')
provide('userFrom', userFrom)


const currentUser = ref()
onMounted(async () => {

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

// const allMessagesByUsers = await pb.collection('messages').getFullList({
//                 filter: `from = '${pb.authStore.model?.id}' && to = '${userFrom.value}' || to = '${pb.authStore.model?.id}' && from = '${userFrom.value}' `,
//                 expand : 'from && to',
//             });

const UsersListe = await Alluser()

</script>

<template>
  <div class="mt-20">
   <h1>Page chat</h1>
  <convCard v-for="User in UsersListe" :key="User.id" v-bind="User"  />
  </div>
</template>