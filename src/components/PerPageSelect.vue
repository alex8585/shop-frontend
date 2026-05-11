<script setup lang="ts">
const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits(['update:modelValue'])

const options = [6, 12, 18, 24, 30]
</script>

<template>
  <v-select
    :model-value="props.modelValue"
    :items="options"
    label="Per page"
    variant="outlined"
    density="compact"
    hide-details
    class="per-page-select"
    style="min-width: 140px"
    @update:model-value="emit('update:modelValue', Number($event))"
  />
</template>

<style scoped>
</style>
