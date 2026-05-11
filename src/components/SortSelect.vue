<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const options = [
  { title: 'Newest', value: 'newest' },
  { title: 'Oldest', value: 'oldest' },

  { title: 'Price: Low → High', value: 'price_asc' },
  { title: 'Price: High → Low', value: 'price_desc' },

  { title: 'Name: A → Z', value: 'name_asc' },
  { title: 'Name: Z → A', value: 'name_desc' },

  { title: 'Stock ↑', value: 'stock_asc' },
  { title: 'Stock ↓', value: 'stock_desc' },
]
</script>

<template>
  <div class="sort-wrapper">
    <v-select
      :model-value="modelValue"
      :items="options"
      item-title="title"
      item-value="value"
      label="Sort by"
      density="compact"
      variant="outlined"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<style scoped>
.sort-wrapper {
  max-width: 260px;
}
</style>
