<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue';
import IconX from '@/components/icons/IconX.vue'
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import Button from '@/components/Button.vue';
import {pb, UpdtUser} from '@/backend';

const currentUser = ref()
onMounted(async () => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})


const data = ref({
    description : "",
    firstName: "",
    lastName: "",
    avatar: ""
});
const router = useRouter();

const handleFileChange = (event) => {
    const file = event.target.files[0];
    data.value.avatar = file; // assuming you want to store the file in the avatar property
}

const Description = async () => {
    const updatedData = { ...currentUser.value };

    for (const [key, value] of Object.entries(data.value)) {
        if (value !== "") {
            updatedData[key] = value;
        }
    }

    await UpdtUser(updatedData, currentUser.value.id);
    router.push('/compte');
    console.log(updatedData);
}
//
</script>

<template>
  <div class="flex flex-col mx-4 col-start-1 h-screen mt-5 "  v-scroll-lock="true">
    <div class="flex justify-between px-2 pt-4">
      <RouterLink to="/compte"><IconX /></RouterLink>
    </div>
    <picture class="flex flex-col items-center mt-10 z-10">
      <IconUser class="flex w-48 h-auto" />
    </picture>
    <form class="flex flex-col gap-3  pt-8  text-Black ">
          <!-- form pour modifier les donné du Current User -->
        <div class="flex flex-col justify-center gap-4">
          <p class="text-xs ">Nouvel avatar</p>
              <input type="file" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 "  v-on:change="handleFileChange">
            <p class="text-xs ">Nom</p>
              <input v-model="data.lastName"  type="text" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Nouveaux nom">
            <p class="text-xs ">Prénom</p>
              <input v-model="data.firstName" type="text" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Nouveaux prénom">
            <p class="text-xs ">Description</p>
              <input v-model="data.description" type="text" class="w-full font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Nouvelle description">
        </div> 
      </form>
        <RouterLink class="flex self-center"  to="/">
            <Button class="mt-2" @click="Description()" text="Enregistrer les modifications" />
        </RouterLink>
  </div>
</template>
