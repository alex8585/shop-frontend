<script setup lang="ts">
const props = defineProps<{
  page: number
  length: number
}>()

const emit = defineEmits(['update:page'])
</script>

<template>
  <v-pagination
    :model-value="props.page"
    :length="props.length"
    @update:model-value="emit('update:page', Number($event))"
  />
</template>
