<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'dark' 
    url?: string
    text?: string
  }>(),
  {
    variant: 'default',
  }
)
const variantClass = {
  default: 'border-indigo-200 bg-indigo-100 ',
  dark: 'border-indigo-200 bg-red'
}

</script>

<template>
  <RouterLink
    class="inline-flex items-center p-3 gap-2 border-2 font-bold rounded-lg transition duration-300 ease-in-out"
    :class="[variantClass[props.variant]]"
    :to="`${url}`"
  >
    {{ text }}
  </RouterLink>
</template>
