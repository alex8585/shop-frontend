<script setup lang="ts">

import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()

const remove = (id: number) => {
  cart.removeFromCart(id)
}

const clear = () => {
  cart.clearCart()
}




</script>

<template>

  <v-container>

    <h1 class="text-h4 mb-6">Your Cart</h1>

    <v-row>

      <!-- LEFT: ITEMS -->
      <v-col cols="12" md="8">


<v-card
  v-for="item in cart.items"
  :key="item.id"
  class="cart-item mb-3"
  elevation="2"
>
  <div class="cart-row">

    <!-- IMAGE -->
    <div class="cart-image">
      <v-img :src="item.image" height="80" width="80" cover />
    </div>

    <!-- NAME -->
    <div class="cart-name">
      <div class="name">{{ item.name }}</div>
    </div>

    <!-- PRICE -->
    <div class="cart-price">
      ${{ item.price }}
    </div>

    <!-- QTY -->


    <div class="cart-qty">

      <v-btn
        size="x-small"
        variant="outlined"
        @click="cart.decreaseQuantity(item.id)"
      >
        -
      </v-btn>

      <span class="qty-value">
        {{ item.quantity }}
      </span>

      <v-btn
        size="x-small"
        variant="outlined"
        @click="cart.increaseQuantity(item.id)"
      >
        +
      </v-btn>

    </div>




    <!-- TOTAL -->
    <div class="cart-total">
      ${{ item.price * item.quantity }}
    </div>

    <!-- ACTION -->
    <div class="cart-action">
      <v-btn
        size="small"
        color="error"
        @click="cart.removeFromCart(item.id)"
      >
        Remove
      </v-btn>
    </div>

  </div>
</v-card>








      </v-col>

      <!-- RIGHT: SUMMARY -->
      <v-col cols="12" md="4">

        <v-card class="pa-4">

          <h2>Summary</h2>

          <div class="my-3">
            Total items: {{ cart.totalCount }}
          </div>

          <div class="mb-3">
            Total price: <strong>${{ cart.totalPrice }}</strong>
          </div>

          <v-btn
            color="error"
            block
            @click="clear"
          >
            Clear Cart
          </v-btn>



        </v-card>

      </v-col>

    </v-row>

  </v-container>

</template>



<style scoped>


.cart-qty {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-value {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
}


.cart-item {
  padding: 10px;
}

.cart-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px;
}

/* IMAGE */
.cart-image {
  flex: 0 0 80px;
}

/* NAME */
.cart-name {
  flex: 2;
}

.cart-name .name {
  font-weight: 600;
  font-size: 15px;
}

/* PRICE */
.cart-price {
  flex: 1;
  font-weight: 700;
  font-size: 16px;
  color: #1976d2;
}

/* QTY */
.cart-qty {
  flex: 1;
  font-weight: 600;
  opacity: 0.8;
}

/* TOTAL */
.cart-total {
  flex: 1;
  font-weight: 800;
  font-size: 16px;
  color: #2e7d32;
}

/* ACTION */
.cart-action {
  flex: 0;
}
</style>
