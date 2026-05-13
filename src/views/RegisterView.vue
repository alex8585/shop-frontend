<script setup lang="ts">

import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const auth = useAuthStore()
const router = useRouter()
const form = reactive({
  name: '',
  email: '',
  password: ''
})


const submit = async () => {

  try {

    await auth.register(form)

    router.push('/')

  } catch (e) {

    console.error(e)

    alert('Registration failed')
  }
}

</script>

<template>

  <v-container class="register-page">

    <v-row justify="center">

      <v-col cols="12" md="6" lg="4">

        <v-card class="pa-6">

          <h1 class="text-h4 mb-6">
            Register
          </h1>

          <v-text-field
            v-model="form.name"
            label="Name"
            variant="outlined"
            class="mb-3"
          />

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
            Register
          </v-btn>

        </v-card>

      </v-col>

    </v-row>

  </v-container>

</template>

<style scoped>

.register-page {
  padding-top: 60px;
}

</style>
