<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Chat from '@/components/Chat.vue';
import Pocketbase from 'pocketbase'


const currentUser = ref()
onMounted(async () => {
  const pb = new Pocketbase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const messageCount = ref(0);
const userInfo = ref<{ username: string } | null>(null);

function setUnreadMessageCount(count: number) {
  messageCount.value = count;
}

function setUserInfo(user: { username: string }) {
  userInfo.value = user;
}
</script>

<template>
    <div class="p-4 bg-gray-800 h-screen text-white flex justify-between items-center ">
    <div class="flex items-center">

    </div>
    <div class="flex items-center">
      <div class="mr-4">
        <span v-if="messageCount > 0">{{ messageCount }}</span>
      </div>
      <div>{{ userInfo?.username }}</div>
    </div>
 
  <main class="p-4">
    <Chat :setUnreadMessageCount="setUnreadMessageCount" :setUserInfo="setUserInfo"/></main>
  </div>
  
</template>