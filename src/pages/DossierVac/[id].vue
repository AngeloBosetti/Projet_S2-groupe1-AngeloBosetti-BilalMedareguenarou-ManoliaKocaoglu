<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { pb } from '@/backend';

const route = useRoute();
const cardId = route.params.id; // Assurez-vous que 'id' correspond au nom du paramètre défini dans votre route

const images = ref([]);

onMounted(async () => {
  if (pb.authStore.isValid) {
    // Récupérer les images associées à l'ID de la carte
    const imagesData = await pb.collection('images').getFullList({
      filter: `cardId = '${cardId}'`,
    });

    images.value = imagesData.map(image => ({
      id: image.id,
      url: image.url, // Remplacez 'url' par le nom réel de votre champ d'image
    }));
  }
});
</script>

<template>
  <div class="flex flex-col mx-4 h-screen mt-20 mb-20 gap-5">
    <h1 class="fixed py-2 border-b-[1.5px] bg-white w-full text-2xl font-bold mb-4">Images de la carte</h1>
    <div class="mt-20 mb-40" v-if="images.length">
      <div v-for="image in images" :key="image.id" class="mb-4">
        <img :src="image.url" alt="Image de la carte" class="p-2 border rounded" />
      </div>
    </div>
    <div v-else>
      <p>Aucune image trouvée.</p>
    </div>
  </div>
</template>