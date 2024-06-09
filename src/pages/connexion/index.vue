<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import PocketBase from 'pocketbase';
import Button from '@/components/Button.vue';
import IconGoogle from '@/components/icons/IconGoogle.vue';

const Gooduser = ref(false);

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);
      Gooduser.value = true;

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const doLoginOAuth = async () => {
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    currentUser.value = pb.authStore.model
}

</script>



<template>
    <div class="mt-20  px-4"  v-scroll-lock="true">
      <div>
        <h1 class="flex pt-10 justify-center text-center text-3xl font-bold">Connecter vous <br>ou créer un compte</h1>
      </div>
      
        <h1 class="flex pt-10 justify-center text-center text-lg font-bold" v-if="currentUser">Bienvenue <br>{{ currentUser.firstName }} {{ currentUser.lastName }}</h1>
        <form class="max-w-md  pt-8  text-Black ">
          <div class="flex flex-col justify-center gap-4">
            <p class="text-xs font-semibold">Nom d'utilisateur</p>
              <input v-model="username" type="username" class="w-full  font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Votre Nom d'utilisateur">
            <p class="text-xs font-semibold">Mots de passe</p>
              <input v-model="password" type="password" class="w-full font-light placeholder:text-Black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Votre mots de passe">
          </div>
      </form>
        <div class="flex flex-col items-center gap-2 mt-6">
          <div class="flex justify-center gap-5">
            <Button @click="doLogin" text="Connexion" url="/PageAccueil"/>
            <Button @click="doLoginOAuth" text="Connexion Google" :icon="IconGoogle" />
          </div>
          <div class="flex gap-1">
            <p class="text-sm font-semibold text-neutral-400">Pas de compte ? Inscivez-vous</p>
            <RouterLink to="/Inscription/PageInscription"><p class="text-sm font-semibold text-blueBell">en cliquant ici</p></RouterLink>
          </div>
        </div>

        <!-- Bouton utiliser pour les test (laisser la au cas ou j'en aurais re-besoin) -->
        <button @click="doLogout">Déconnexion</button>
        
    </div>
</template>