<script setup lang="ts">
import { onMounted, ref , } from 'vue';
import Pocketbase from 'pocketbase'
import { AddMessages, } from '@/backend';

const pb = new Pocketbase('http://127.0.0.1:8090')

const currentUser = ref()
onMounted(async () => {


  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})



const newMessage = ref('');

const sendMessage = async () => {
  if (newMessage.value.trim()) {
    const record = await pb.collection('messages').create({ content: newMessage.value });
    AddMessages({
      id: record.id,
      content: record.content,
      from: currentUser.value.username,
      to: 'angelo.bsti25@gmail.com',
      created: record.created
    });
    newMessage.value = '';
  }
};
</script>

<template>
  <div class="mt-20">
    <h1 class="text-xl">test</h1>
  </div>
  <div>  
  </div>
  <div class="flex ">
      <input v-model="newMessage" class="flex-1 p-2 border rounded" placeholder="Type a message..." @keyup.enter="sendMessage"/>
      <button @click="sendMessage" class="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
    </div>
</template>