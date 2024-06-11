<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';
import { fetchUserMessages } from '@/backend';

const currentUser = ref()
onMounted(async () => {
  const pb = new PocketBase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})


const pb = new PocketBase('http://127.0.0.1:8090');  // Remplacez par l'URL de votre instance Pocketbase

const messages = fetchUserMessages(currentUser.value.username,'angelo.bosetti.veille@gmail.com')
const newMessage = ref('');



const sendMessage = async () => {
  if (newMessage.value.trim()) {
    const record = await pb.collection('messages').create({ content: newMessage.value });
    messages.push({
      id: record.id,
      content: record.content,
      created: record.created
    });
    newMessage.value = '';
  }
};


// 
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold">Chat</h2>
      <div v-if="currentUser" class="text-gray-500">Connecté en tant que {{ currentUser.firstName }}</div>
    </div>
    <div class="mb-4">
      <div v-for="message in messages" :key="message.id" class="p-2 border-b">
        <div>{{ message.content }}</div>
        <div class="text-xs text-gray-400">{{ new Date(message.created).toLocaleString() }}</div>
      </div>
    </div>
    <div class="flex ">
      <input v-model="newMessage" class="flex-1 p-2 border rounded" placeholder="Type a message..." @keyup.enter="sendMessage"/>
      <button @click="sendMessage" class="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
    </div>
  </div>
</template>
