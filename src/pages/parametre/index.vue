<!-- eslint-disable vue/multi-word-component-names -->
<script setup lan="ts">
import {pb} from '@/backend';
import Button from '@/components/Button.vue';
</script>

<template>
    <div class="flex flex-col gap-20 mx-5 mt-26">
        <h1 class="text-xl">page paramètre index</h1>
        <div class="flex flex-col gap-3">
             <Button class="flex items-center justify-center" url="/parametre/ParametreCompte" text="Paramètres Compte" />
             <Button class="flex items-center justify-center" url="/parametre/MentionsLegales" text="Mentions Légales" />
             <Button class="flex items-center justify-center" url="/parametre/About" text="À propos" />
        </div>
    </div>
    
</template>