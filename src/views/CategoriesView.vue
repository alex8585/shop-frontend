<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '../stores/categoryStore'

const store = useCategoryStore()

onMounted(() => {
  store.fetchCategories()
})
</script>

<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="c in store.categories"
        :key="c.id"
      >
        {{ c.name }}
      </v-list-item>
    </v-list>
  </v-container>
</template>
