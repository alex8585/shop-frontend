<script setup lang="ts">
const props = defineProps<{
  filters: any
  categories: any[]
  tags: any[]
}>()

const emit = defineEmits(['update:filters', 'apply', 'reset'])

const update = (key: string, value: any) => {
  emit('update:filters', {
    ...props.filters,
    [key]: value
  })
}

const reset = () => {
  emit('reset')
}
</script>

<template>
  <v-card class="pa-4">

    <!-- CATEGORY -->
    <v-select
      label="Category"
      :model-value="props.filters.category_id"
      :items="props.categories"
      item-title="name"
      item-value="id"
      clearable
      @update:model-value="val => update('category_id', val ? Number(val) : null)"
    />

    <!-- PRICE RANGE -->
    <div class="mt-4">
      <div class="text-subtitle-2 mb-2">Price range</div>

      <v-range-slider
        :model-value="[props.filters.price_min, props.filters.price_max]"
        :min="0"
        :max="5000"
        step="50"
        @update:model-value="val => {
          update('price_min', val[0])
          update('price_max', val[1])
        }"
      />
    </div>

    <!-- TAGS -->
    <v-select
      class="mt-4"
      label="Tags"
      :items="props.tags"
      item-title="name"
      item-value="id"
      multiple
      chips
      closable-chips
      :model-value="props.filters.tags"
      @update:model-value="val => update('tags', val ?? [])"
    />

    <!-- ACTIONS -->
    <div class="mt-4 d-flex flex-column ga-2">

      <!-- APPLY -->
      <v-btn
        color="primary"
        block
        @click="$emit('apply')"
      >
        Apply filters
      </v-btn>

      <!-- RESET -->
      <v-btn
        variant="outlined"
        color="error"
        block
        @click="reset"
      >
        Reset filters
      </v-btn>

    </div>

  </v-card>
</template>
