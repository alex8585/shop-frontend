<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'

const store = useProductStore()

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="p in store.products"
        :key="p.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto" elevation="3">

          <v-img
            height="200"
            :src="p.image || 'https://via.placeholder.com/300'"
            cover
          />

          <v-card-title class="text-subtitle-1">
            {{ p.name }}
          </v-card-title>

          <v-card-text>
            <div class="text-truncate">
              {{ p.short_description }}
            </div>
          </v-card-text>

          <v-card-actions class="justify-space-between">
            <strong class="text-primary">
              ${{ p.price }}
            </strong>

            <v-btn size="small" color="primary">
              Buy
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
