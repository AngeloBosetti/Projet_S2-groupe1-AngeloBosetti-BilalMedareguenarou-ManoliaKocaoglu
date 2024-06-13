<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { pb, AllUsers } from '@/backend'; // Suppose that AllUsers fetches all users
import convCard from '@/components/convCard.vue';
import { useRouter } from 'vue-router'; // Import useRouter for navigation

const searchQuery = ref(''); // Propriété réactive pour le terme de recherche
const users = ref([]); // Utilisez ref pour rendre réactif
const currentUser = ref(null);
const router = useRouter(); // Initialiser le routeur

onMounted(async () => {
  const usersData = await AllUsers();
  users.value = usersData;
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
});

// Calculer les utilisateurs filtrés
const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value;
  }
  return users.value.filter(user =>
    user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Fonction pour accéder au profil d'un utilisateur
const goToProfile = (userId) => {
  router.push({ path: `/profile/${userId}` });
};
</script>
<template>
  <div class="mt-20">
    <h1>Page chat</h1>
    
    <!-- Input de recherche -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Rechercher un utilisateur"
      class="p-2 border rounded mb-4"
    />
    
    <div v-if="filteredUsers.length">
      <div
        v-for="User in filteredUsers"
        :key="User.id"
        @click="goToProfile(User.id)"
        class="cursor-pointer"
      >
        <convCard v-bind="User" />
      </div>
    </div>
    <div v-else>
      <p>Aucun utilisateur trouvé.</p>
    </div>
  </div>
</template>