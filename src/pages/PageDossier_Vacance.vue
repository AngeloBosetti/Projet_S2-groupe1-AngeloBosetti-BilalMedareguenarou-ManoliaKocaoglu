<template>
  <div>
    <h1>Liste des Dossiers de Vacances</h1>
    <div v-for="dossier in dossiers" :key="dossier.id" class="dossier-card">
      <!-- Utilisez RouterLink pour créer un lien vers la page de détail de chaque dossier -->
      <RouterLink :to="`/dossier/${dossier.id}`">
        <div class="card">
          <h2>{{ dossier.title }}</h2>
          <!-- Autres informations du dossier -->
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router/auto';
import { pb } from '@/backend'; // Assurez-vous d'avoir une instance de PocketBase configurée

const dossiers = ref([]);

onMounted(async () => {
  try {
    // Remplacez 'nomDeVotreCollection' par le nom réel de votre collection PocketBase
    const response = await pb.collection('nomDeVotreCollection').getFullList();
    dossiers.value = response.map(dossier => ({
      id: dossier.id,
      title: dossier.title, // Remplacez 'title' par le champ réel de votre collection
      // Autres champs nécessaires
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des dossiers:", error);
  }
});
</script>
