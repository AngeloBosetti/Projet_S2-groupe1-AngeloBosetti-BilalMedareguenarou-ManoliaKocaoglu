<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'dark' 
    url?: string
    text?: string
    icon?: string | object | undefined
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
  <component
      v-if="props.icon"
      :is="props.icon"
      :class="props.variant === 'dark' ? 'stroke-white' : 'stroke-blueBell'"
      class="size-5"
    />
    {{ text }}
  </RouterLink>
</template>
