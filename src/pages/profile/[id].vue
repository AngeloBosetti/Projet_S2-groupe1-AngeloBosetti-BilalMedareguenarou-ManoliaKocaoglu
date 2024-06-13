<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { pb } from '@/backend';

const route = useRoute();
const friendId = route.params.id;

const friend = ref(null);
const friendUsername = ref('');

onMounted(async () => {
  try {
    const friendData = await pb.collection('users').getOne(friendId);
    friend.value = friendData;
    friendUsername.value = friendData.username;
  } catch (error) {
    console.error("Erreur lors de la récupération des informations du profil:", error);
  }
});
</script>

<template>
  <div class="container mt-20">
    <h1 class="text-2xl font-bold mb-4">Profil de {{ friendUsername }}</h1>
    <div v-if="friend">
      <p><strong>Nom d'utilisateur:</strong> {{ friend.username }}</p>
      <p><strong>Prénom:</strong> {{ friend.firstName }}</p>
      <p><strong>Description:</strong> {{ friend.description }}</p>
      <!-- Ajoutez d'autres informations sur l'ami ici -->
    </div>
    <div v-else>
      <p>Aucun profil trouvé.</p>
    </div>
  </div>
</template>

