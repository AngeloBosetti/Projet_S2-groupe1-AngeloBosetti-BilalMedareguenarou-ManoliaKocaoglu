<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router/auto'
import convCard from '@/components/convCard.vue';
import IconAddUser from '@/components/icons/IconAddUser.vue';
import { useRouter, useRoute } from 'vue-router';
import IconUser from '@/components/icons/IconUser.vue';
import { onMounted, ref, computed } from 'vue';
import Pocketbase from 'pocketbase'
import { pb, AllFriends } from '@/backend';

const currentUser = ref()
const searchQuery = ref(''); // Propriété réactive pour le terme de recherche
const friends = ref([]); // Utilisez ref pour rendre réactif
const router = useRouter(); // Initialiser le routeur
const friendsData = await AllFriends();

onMounted(async () => {
  friends.value = friendsData;
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const route = useRouter();
onMounted(() => {
    if (pb.authStore.model === null) {
        route.push('/connexion');
    }
})




const filteredFriends = computed(() => {
  if (!searchQuery.value) {
    return friends.value[0]?.expand?.friends || [];
  }
  return friends.value[0]?.expand?.friends.filter(friend =>
    friend.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  ) || [];
});

// Fonction pour accéder à la page de chat avec un ami
const goToChat = (friendId) => {
  router.push(`/chat/${friendId}`);
};
</script>

<template>
  <main class="bg-blueBell grid-cols-4  h-screen mt-20  " v-scroll-lock="true">
  <h1 v-if="currentUser" class=" text-center text-2xl font-bold pt-8">Ravi de vous revoir <br> {{ currentUser.firstName }} {{ currentUser.lastName }}</h1>
  <h5 class="text-base font-semibold m-4 ">Accès rapide</h5>
  <div class="">
    
    <!-- card chat -->
    <RouterLink to="/chat"><div class=" rounded-lg bg-lavenderBlue shadow-md p-4 m-4 ">
      
      <h4 class="text-xl font-medium p-2">Chat</h4>
      <!-- Les derniers messages -->
      
      <div class="flex flex-col bg-neutral-50 rounded-md py-2 gap-4" v-if="friends[0] && friends[0].expand">
      <RouterLink
      v-for="User in filteredFriends.slice(0, 3)"
      :key="User.id"
      :to="`/chat/${User.id}`"
      class="cursor-pointer"
    >
      <convCard v-bind="User" />
    </RouterLink>
      </div>
      
    </div>
    </RouterLink>
    <!-- bouton rencontre de nouvelle personne -->
    <div class="rounded-lg  bg-lavenderBlue shadow-md p-4 m-4">
      <RouterLink to="/PageRencontre"><h4 class="text-lg font-semibold">Rencontrer  une nouvelle personne ?</h4> </RouterLink>
    </div>
    
    <!-- bouton dossier vacance -->
    <div class="rounded-lg  bg-lavenderBlue shadow-md p-4 m-4">
      <RouterLink to="/PageDossier_Vacance"><h4 class="text-lg font-semibold">Album partagé</h4></RouterLink>
    </div>
  </div>
  </main>
</template>
