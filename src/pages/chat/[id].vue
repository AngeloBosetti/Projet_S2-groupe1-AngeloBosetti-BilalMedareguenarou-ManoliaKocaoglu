<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { pb, AddMessages } from '@/backend';


const route = useRoute();
const friendId = route.params.id;

const currentUser = ref();
const friendUsername = ref('');
const messages = ref([]);

const newMessage = ref('');



onMounted(async () => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;

  if (currentUser.value) {
    // Récupérer les messages entre l'utilisateur connecté et l'ami spécifié
    const messagesData = await pb.collection('messages').getFullList({
      filter: `from = '${currentUser.value.id}' && to ='${friendId}' || from ='${friendId}' && to ='${currentUser.value.id}'`,
      expand: 'from, to',
    });

    messages.value = messagesData.map(message => ({
      id: message.id,
      content: message.content,
      from: message.expand.from,
      to: message.expand.to,
    }));


    // Récupérer le nom d'utilisateur de l'ami
    const friendData = await pb.collection('users').getOne(friendId);
    friendUsername.value = friendData.username;
  }
  console.log(friendId);
console.log(currentUser.value.id);


    pb.collection('messages').subscribe('*', async ({action, record }) => {
        if (action === 'create') {
           
            const messagesData = await pb.collection('messages').getFullList({
      filter: `from = '${currentUser.value.id}' && to ='${friendId}' || from ='${friendId}' && to ='${currentUser.value.id}'`,
      expand: 'from, to',
        });

        messages.value = messagesData.map(message => ({
        id: message.id,
        content: message.content,
        from: message.expand.from,
        to: message.expand.to,
        }));

        }
        
    });
});

const sendMessage = async () => {
  if (newMessage.value.trim()) {
    const record = await pb.collection('messages').create({ content: newMessage.value });
    AddMessages({
      content: record.content,
      from: currentUser.value.id,
      to: friendId,
    });
    newMessage.value = '';
  }
};
</script>
<template>
  <div class="flex flex-col mx-4  h-screen mt-20 mb-20 gap-5 ">
    <h1 class="fixed py-2 border-b-[1.5px]  bg-white w-full text-2xl font-bold mb-4">Conversation avec {{ friendUsername }}</h1>
    <div class="mt-20 mb-40" v-if="messages.length" >
      <div  v-for="message in messages" :key="message.id" class="mb-4">
        <div :class="message.from === currentUser.id ? 'text-right' : 'text-left'">
          <p class="p-2 border rounded">{{ message.content }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Aucun message trouvé.</p>
    </div>
    
    <div class="flex fixed  bg-white self-center h-30 w-full mt-[550px]">
        <div class="flex self-center w-full  px-2">
            <input
                v-model="newMessage"
                class="flex-1 p-2 border rounded"
                placeholder="écrit ton message..."
                @keyup.enter="sendMessage"
            />
            <button @click="sendMessage" class=" ml-2 p-2 bg-blueBell text-white rounded">Send</button>
        </div>
    </div>
  </div>
</template>
