<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

onMounted(async () => {
  const temp = route.query.temp as string
  console.log(temp)
  if (!temp) {
    router.push('/login?error=missing_token')
    return
  }
  try {
    await auth.exchangeGithubToken(temp)
    router.push('/')
  } catch (e) {
    router.push('/login?error=github_exchange_failed')
  }
})
</script>

<template>
  <v-container class="d-flex justify-center align-center" style="height: 60vh">
    <v-progress-circular indeterminate color="primary" />
  </v-container>
</template>
