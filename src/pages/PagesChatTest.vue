<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Chat from '../components/Chat.vue';
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
  <header class="p-4 bg-gray-800 text-white flex justify-between items-center">
    <div class="flex items-center">
      <svg class="w-6 h-6 mr-2" viewBox="0 0 128 128">
        <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path>
      </svg>
      Your Vue.js App
    </div>
    <div class="flex items-center">
      <div class="mr-4">
        <span v-if="messageCount > 0">{{ messageCount }}</span>
      </div>
      <div>{{ userInfo?.username }}</div>
    </div>
  </header>
  <main class="p-4">
    <Chat :setUnreadMessageCount="setUnreadMessageCount" :setUserInfo="setUserInfo"/>
  </main>
</template>