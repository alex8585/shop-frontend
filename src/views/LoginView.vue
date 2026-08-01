<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { api } from '../services/api'

const auth = useAuthStore()
const router = useRouter()
const errorMessage = ref('')
const fieldErrors = ref<any>(null)
const form = reactive({
  email: '',
  password: ''
})



const loginWithGithub = async () => {
  const res = await api.get('/auth/github/redirect-url')
  window.location.href = res.data.url
}


const submit = async () => {

  errorMessage.value = ''
  fieldErrors.value = null

  try {

    await auth.login(form)

    router.push('/')

  } catch (e: any) {

    errorMessage.value = e.message
    fieldErrors.value = e.errors
  }
}



</script>

<template>
  <v-container class="login-page">
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">

        <v-card class="pa-6">

          <h1 class="text-h4 mb-6">
            Login
          </h1>

          <v-alert
            v-if="errorMessage"
            type="error"
            class="mb-4"
          >
            {{ errorMessage }}
          </v-alert>



          <v-text-field
            v-model="form.email"
            label="Email"
            variant="outlined"
            class="mb-3"
          />

          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            variant="outlined"
            class="mb-5"
          />

          <v-btn
            block
            color="primary"
            size="large"
            :loading="auth.loading"
            @click="submit"
          >
            Login
          </v-btn>

    <v-btn block variant="outlined" class="mb-3" @click="loginWithGithub">
  Войти через GitHub
</v-btn>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style scoped>
.login-page {
  padding-top: 60px;
}
</style>
