
<script setup lan="ts">
import IconX from '@/components/icons/IconX.vue';
import Button from '@/components/Button.vue';

</script>

<template>
    <div class="flex flex-col gap-12 mx-5 mt-24">
        <div class="flex justify-between px-2 ">
      <RouterLink to="/parametre" ><IconX /></RouterLink>
    </div>
        <h1 class="text-2xl text-center font-bold">Paramètres Compte</h1>
        <div class="flex flex-col gap-5 mt-10">
             <Button class="flex items-center justify-center" url="/parametre/CGU" text="Conditions Générales d’Utilisation" />
             <Button class="flex items-center justify-center" url="/parametre/GCV" text="Conditions Générales de Vente" />
             <Button class="flex items-center justify-center" url="/parametre/GCV" text="Conditions Générales de Vente" />
        </div>
        
    </div>
    
</template>