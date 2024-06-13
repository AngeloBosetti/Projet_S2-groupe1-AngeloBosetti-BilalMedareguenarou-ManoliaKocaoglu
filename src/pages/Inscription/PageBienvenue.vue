<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>
<template>
    <circle class="absolute h-screen w-screen -z-10 bg-gradient-to-r from-lavenderBlue via-blueBell to-lavenderBlue"></circle>
    <div class="mt-20 px-4 grid grid-rows-3 h-screen  items-center" v-scroll="true">
    <h1 class="text-White text-center text-3xl font-semibold text-">Bienvenue Sur MysClick !</h1>
    <p class="text-White ">Nous vous remercions d'avoir créé un compte et de faire confiance à MysClick. 
        Découvrez, partagez et faites un maximum de rencontres avec notre application mobile.
    </p>
    <Button text="Continuer" />
    </div>
</template>