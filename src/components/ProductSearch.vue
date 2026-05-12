<script setup lang="ts">

import { ref } from 'vue'

const emit = defineEmits(['search'])

const search = ref('')

const applySearch = () => {
  emit('search', search.value)
}

</script>

<template>

  <div class="search-box">

    <v-text-field
      v-model="search"
      label="Search products..."
      density="comfortable"
      variant="outlined"
      hide-details
      clearable
      @keyup.enter="applySearch"
    />

    <v-btn
      color="primary"
      height="48"
      @click="applySearch"
    >
      Apply
    </v-btn>

  </div>

</template>

<style scoped>

.search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.search-box .v-text-field {
  flex: 1;
  min-width: 600px;
}

.search-box .v-btn {
  flex-shrink: 0;
}
</style>
