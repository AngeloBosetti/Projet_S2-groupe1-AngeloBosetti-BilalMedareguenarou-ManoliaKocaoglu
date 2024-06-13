<!-- eslint-disable vue/multi-word-component-names -->
<script setup lan="ts">
import IconX from '@/components/icons/IconX.vue';


</script>

<template>
    <div class="flex flex-col gap-12 mx-5 mt-24 mb-32">
        <div class="flex justify-between px-2 ">
      <RouterLink to="/parametre" ><IconX /></RouterLink>
    </div>
        <h1 class="text-2xl text-center font-bold">À propos </h1>
        <div class="flex flex-col gap-5 mt-10">
             <p class="text-xs text-center uppercase">CEUX GRACE à QUI CE PROJET POSSIBLE</p>
             <h2 class="text-blueBell text-xl font-bold text-center">Notre équipe</h2>
             <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-3">
                    <img class="rounded-xl shadow-md" src="/public/img/Angelo-pp.jpg" alt="Bilal-pp">
                    <h3 class="text-lg font-semibold">Angelo Bosetti</h3>
                    <p class="text-sm">Developper web</p>
                </div>
                <div class="flex flex-col gap-3">
                    <img class="rounded-xl shadow-md" src="/public/img/Bilal-pp.jpg" alt="Bilal-pp">
                    <h3 class="text-lg font-semibold">Bilal Medareguenarou</h3>
                    <p class="text-sm">Développeur, chargé de communication</p>
                </div>
                <div class="flex flex-col gap-3">
                    <img class="rounded-xl shadow-md" src="/public/img/Manolia.jpg" alt="Bilal-pp">
                    <h3 class="text-lg font-semibold">Manolia Kocaoglu</h3>
                    <p class="text-sm">Designer, Chargée de communication</p>
                </div>
             </div>
        </div>
    </div>
    
</template>