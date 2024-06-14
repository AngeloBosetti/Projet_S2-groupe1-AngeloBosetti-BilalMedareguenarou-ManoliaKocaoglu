<!-- eslint-disable vue/multi-word-component-names -->
<script setup lan="ts">
import Button from '@/components/Button.vue';
import IconX from '@/components/icons/IconX.vue';


</script>

<template>
    <div class="flex flex-col gap-12 mx-5 mt-24">
        <div class="flex justify-between px-2 ">
      <RouterLink to="/" ><IconX /></RouterLink>
    </div>
        <h1 class="text-2xl text-center font-bold">Paramètre</h1>
        <div class="flex flex-col gap-5 mt-10">
             <Button class="flex items-center justify-center" url="/parametre/ParametreCompte" text="Paramètres Compte" />
             <Button class="flex items-center justify-center" url="/parametre/About" text="À propos" />
        </div>
    </div>
    
</template>