<script setup lang="ts">
import {ref} from 'vue'
import {  Adduser } from '@/backend';
import { useRouter } from 'vue-router'
import Button from '@/components/Button.vue';
const router = useRouter()

const polconfident = ref(false);

const data = ref({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: ""
});


const handleValidation = async () => {
    if (data.value.username === ""  || data.value.email === ""|| data.value.password === "" || data.value.passwordConfirm === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        if (polconfident.value === true) {
            if (data.value.password === data.value.passwordConfirm) {
                Adduser(data.value);
                router.push('../');
                console.log(data.value)
            } else {
                console.log("Les mots de passe ne correspondent pas");
            }
        } else {
            console.log("Veuillez accepter la politique de confidentialité");
        }
    }
}


</script>
<template>
    <div class="w-screen h-screen mt-20 px-5 flex flex-col gap-5 "  v-scroll-lock="true">
        <div class="flex flex-col gap-8">
            <h1 class="flex justify-center mt-10 font-Marigny font-bold text-4xl">
                Créer un compte
            </h1>
        </div>
        <div class="container mx-auto mt-2">
        <form class="max-w-md mx-auto text-black">
            <div class="mb-5 ">
                <input type="text" id="name" v-model="data.username" class="w-full font-light placeholder:text-black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Pseudo" />
            </div>
            <div class="mb-5 ">
                <input type="text" id="name" v-model="data.firstName" class="w-full font-light placeholder:text-black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Nom" />
            </div>
            <div class="mb-5 ">
                <input type="text" id="name" v-model="data.lastName" class="w-full font-light placeholder:text-black px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Prénom" />
            </div>
            <div class="mb-5">
                <input type="email" id="email" v-model="data.email" class="w-full font-light placeholder:text-black px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Email" />
            </div>
            <div class="mb-5">
                <input type="password" id="password" v-model="data.password" class="w-full placeholder:text-black font-light px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Mot de passe (8 cactère minimum)"/>
            </div>
            <div class="mb-5">
                <input type="password" id="confirmPassword" v-model="data.passwordConfirm" class="w-full font-light placeholder:text-black px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Confirmer le mot de passe"/>
            </div>
            <div class="flex gap-12">
            <div class="flex flex-row">
                <label class="mb-4">
                    <label for="polconfident" class="flex items-center text-gray-400">
                        <input type="checkbox" id="polconfident" v-model="polconfident" class="appearance-none mr-2 w-4 h-4 border-2 border-gray-300 rounded-sm bg-none checked:bg-blue-500" />
                        <div class="gap-1">
                            <span class="text-xs">J'approuve </span> 
                            <RouterLink to="/PageAccueil"><span class="text-xs">la politique de confidentialité</span></RouterLink> 
                        </div>
                    </label>
                       
                
                </label>
            </div>
            </div>
            <RouterLink  to="/">
                <Button class="flex justify-center" @click="handleValidation()" text="C'est parti !" />
            </RouterLink>
            
        </form>
    </div>
    </div>
</template>