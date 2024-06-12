<script setup lang="ts">
import { pb } from '@/backend'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import IconUser from '@/components/icons/IconUser.vue'
import IconX from '@/components/icons/IconX.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import Button from '@/components/Button.vue'

const currentUser = ref()

onMounted(async () => {
  currentUser.value = pb.authStore.isValid ? pb.authStore.model : null
  console.log(currentUser.value)
})

const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="flex flex-col mx-4 col-start-1 h-screen mt-20 gap-5">
    <div class="flex justify-between px-2 pt-4">
      <button @click="goBack()"><IconX /></button>
      <RouterLink to="./parametre"><IconSettings /></RouterLink>
    </div>
    <picture class="flex flex-col items-center mt-10 z-10">
      <IconUser class="flex w-48 h-auto" />
    </picture>
    <div class="flex flex-col gap-14">
      <div v-if="currentUser" class="flex bg-gradient-to-r flex-col justify-center gap-4">
        <p class="p-3 rounded-lg text-3xl font-bold text-center">
          {{ currentUser.lastName }} {{ currentUser.firstName }}
        </p>
        <p class="text-xs font-semibold">Description</p>
        <p
          v-if="currentUser.description !== ''"
          class="bg-neutral-300 p-3 rounded-lg font-semibold"
        >
          {{ currentUser.description }}
        </p>
        <p
          v-if="currentUser.description === ''"
          class="bg-neutral-300 p-3 rounded-lg font-semibold"
        >
          Vous n'avez pas encore de description
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <Button class="flex items-center justify-center" url="/parametre" text="Paramètres" />
        <Button class="flex items-center justify-center" url="/" text="MysClick +" />
      </div>
    </div>
  </div>
</template>
