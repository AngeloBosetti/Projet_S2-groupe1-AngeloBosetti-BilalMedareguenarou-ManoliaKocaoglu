<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { pb, AllFriends } from '@/backend';
import convCard from '@/components/convCard.vue';
import IconAddUser from '@/components/icons/IconAddUser.vue'
import { RouterLink } from 'vue-router/auto';
const userFrom = ref('');
const searchQuery = ref(''); // Propriété réactive pour le terme de recherche



onMounted(async () => {
  const friends = ref([]); // Utilisez ref pour rendre réactif
  const currentUser = ref(null);
  const friendsData = await AllFriends();
  friends.value = friendsData;
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null;
});

// Calculer les amis filtrés
const filteredFriends = computed(() => {
  if (!searchQuery.value) {
    return friends.value[0]?.expand?.friends || [];
  }
  return friends.value[0]?.expand?.friends.filter(friend =>
    friend.username.toLowerCase().includes(searchQuery.value.toLowerCase())
  ) || [];
});
</script>

<template>
  <div class="mt-20">
    
    <!-- Input de recherche et accès a la page recherche d'amis-->
    <div class="flex gap-4 p-4 justify-between ">
      <input class="p-2 border rounded mb-4 w-full" type="text" v-model="searchQuery" placeholder="Rechercher un ami" />
      <RouterLink to="/PageRecherche"><IconAddUser /></RouterLink>
    </div>
    
      <div v-if="friends[0] && friends[0].expand">
        <convCard
          v-for="User in filteredFriends"
          :key="User.id"
          v-bind="User"
        />
      </div>
  </div>
</template>