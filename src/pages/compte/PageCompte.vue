<script setup lang="ts">
import Pocketbase from 'pocketbase'
import IconUser from '@/components/icons/IconUser.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import Button from '@/components/Button.vue';
import { text } from 'stream/consumers';

const currentUser = ref()
onMounted(async () => {
  const pb = new Pocketbase('http://127.0.0.1:8090')

  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
})

const data = ref({
    description : "",
    firstName: "",
    lastName: ""
});
const router = useRouter();
function goBack() {
  router.back();
};

const Description = async () => {
    if (data.value.description === ""  || data.value.email === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        Adduser(data.value);
        router.push('../');
        console.log(data.value);
        }
    }
//
</script>

<template>
  <div class="flex flex-col mx-4 col-start-1 h-screen mt-20  ">
    <div class="flex justify-between px-2 pt-4">
      <RouterLink to="/PageCompteModif"><IconX /></RouterLink>
      <RouterLink to="./parametre"><IconSettings /></RouterLink>
    </div>
    <picture class="flex col-start-1 col-span-4 row-start-1 row-span-1 "><IconUser class="flex items-center" /></picture>
    
    <form class="  pt-8  text-Black ">
          <!-- form pour modifier les donné du Current User -->
        <div class="flex flex-col justify-center gap-4">
            <p class="text-xs ">Nom</p>
              <input v-model="text" type="Nom" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="{{currentUser.lastName}}">
            <p class="text-xs ">Prénom</p>
              <input v-model="text" type="Prenom" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="{{currentUser.firstName}}">
            <p class="text-xs ">Description</p>
              <input v-model="text" type="Description" class="w-full font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="{{currentUser.description}}">
          </div> 
      </form>
        <RouterLink  to="/">
            <Button class="flex justify-center" @click="Description()" text="Enregistrer les modifications" />
        </RouterLink>
  </div>
</template>
