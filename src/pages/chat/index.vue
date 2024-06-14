<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { pb, AllFriends } from '@/backend';
import convCard from '@/components/convCard.vue';
import IconAddUser from '@/components/icons/IconAddUser.vue';
import { useRouter, useRoute } from 'vue-router';

const searchQuery = ref(''); // Propriété réactive pour le terme de recherche
const friends = ref([]); // Utilisez ref pour rendre réactif
const currentUser = ref();
const router = useRouter(); // Initialiser le routeur

const friendsData = await AllFriends();

const filteredFriends = computed(() => {
  if (!searchQuery.value) {
    return friends.value[0]?.expand?.friends || [];
  }
  return friends.value[0]?.expand?.friends.filter(friend =>
    friend.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  ) || [];
});

onMounted(async () => {
  friends.value = friendsData;
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
});

// Fonction pour accéder à la page de chat avec un ami
const goToChat = (friendId) => {
  router.push(`/chat/${friendId}`);
};
</script>

<template>
  <div class="flex flex-col  h-screen mt-20 gap-5 " >
    <!-- Input de recherche et accès à la page recherche d'amis -->
    <div class="fixed flex gap-4 p-4 w-auto justify-between">
      <input class="p-2 border rounded mb-4 w-full" type="text" v-model="searchQuery" placeholder="Rechercher un ami" />
      <RouterLink to="/PageRecherche"><IconAddUser /></RouterLink>
    </div>
    
    <div class="flex flex-col mt-20 gap-2" v-if="friends[0] && friends[0].expand">
      <div
        v-for="User in filteredFriends"
        :key="User.id"
        @click="goToChat(User.id)"
        class="cursor-pointer"
      >
        <convCard v-bind="User" />
      </div>
    </div>
  </div>
</template>