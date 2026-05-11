<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'

import AppPagination from '../components/AppPagination.vue'
import SortSelect from '../components/SortSelect.vue'
import ProductFilters from '../components/ProductFilters.vue'
import PerPageSelect from '../components/PerPageSelect.vue'


import { useCategoryStore } from '../stores/categoryStore'
import { useTagStore } from '../stores/tagStore'

const store = useProductStore()

const categoryStore = useCategoryStore()
const tagStore = useTagStore()

onMounted(() => {
  store.fetchProducts()
  categoryStore.fetchCategories()
  tagStore.fetchTags()
})

const changePerPage = (value: number) => {
  store.fetchProducts(1, store.sort, value)
}

const changePage = (page: number) => {
  store.fetchProducts(page)

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const changeSort = (value: string) => {
  store.fetchProducts(1, value)
}

const applyFilters = () => {
  store.fetchProducts(1)
}

const resetFilters = () => {
  store.resetFilters()
  store.fetchProducts(1)
}

</script>

<template>
  <v-container fluid>

    <v-row>

      <!-- 🧩 LEFT FILTER COLUMN -->
      <v-col cols="12" md="3">

      <ProductFilters
        :filters="store.filters"
        :categories="categoryStore.categories"
        :tags="tagStore.tags"
        @update:filters="store.setFilters"
        @apply="applyFilters"
        @reset="resetFilters"
      />

      </v-col>

      <!-- 🛒 RIGHT PRODUCTS -->
      <v-col cols="12" md="9">

        <!-- TOP BAR -->
        <div class="top-bar">

          <!-- LEFT -->
          <div class="top-left">
            <PerPageSelect
              :model-value="store.perPage"
              @update:model-value="changePerPage"
            />
          </div>

          <!-- RIGHT -->
          <div class="top-right">
            <SortSelect
              :model-value="store.sort"
              @update:model-value="changeSort"
            />
          </div>

        </div>
        <!-- PRODUCTS GRID -->
        <v-row>
          <v-col
            v-for="p in store.products"
            :key="p.id"
            cols="12"
            sm="6"
            md="4"
          >

            <v-card elevation="3" class="h-100 d-flex flex-column">

              <v-img
                height="200"
                :src="p.image"
                cover
              />

              <v-card-title class="text-subtitle-1">
                {{ p.name }}
              </v-card-title>

              <v-card-text>

                <!-- TAGS -->
                <div
                  v-if="p.tags?.length"
                  class="mb-3 d-flex flex-wrap ga-1"
                >
                  <v-chip
                    v-for="tag in p.tags"
                    :key="tag.id"
                    size="x-small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ tag.name }}
                  </v-chip>
                </div>

                <!-- DESCRIPTION -->
                <div class="text-truncate">
                  {{ p.short_description }}
                </div>

              </v-card-text>

              <v-spacer />

              <v-card-actions class="justify-space-between">

                <strong class="text-primary">
                  ${{ p.price }}
                </strong>

                <v-btn
                  size="small"
                  color="primary"
                >
                  Buy
                </v-btn>

              </v-card-actions>

            </v-card>

          </v-col>
        </v-row>

        <!-- PAGINATION -->

        <AppPagination
          v-if="store.lastPage > 1"
          :page="store.currentPage"
          :length="store.lastPage"
          @update:page="changePage"
        />

      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.top-left,
.top-right {
  display: flex;
  align-items: center;
  gap: 10px;
}



</style>
