<script setup lang="ts">
import { onMounted, provide, ref, } from 'vue';
import {pb, AllFriends} from '@/backend';
import convCard from '@/components/convCard.vue';


const userFrom = ref('')
provide('userFrom', userFrom)

const friendsList = await AllFriends() as Array<{ expand: { friends: object[] } }>;


const currentUser = ref()

onMounted(async () => {
  console.log(typeof friendsList[0]);
  console.log(currentUser);
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
  console.log(currentUser.value);
  // UsersListe.value = await pb.collection('users').getFullList();
  
});




</script>

<template>
  <div class="mt-20">
   <h1>Page chat</h1>
  <div v-if="friendsList[0].expand !== undefined">
    <convCard v-for="User in friendsList[0].expand.friends" :key="User.id" v-bind="User "  />
  </div>
  </div>
</template>