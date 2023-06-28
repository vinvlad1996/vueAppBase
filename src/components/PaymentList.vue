<template>
  <div class="payment-list">
    <ul>
      <li v-for="payment in payments" :key="payment.id">
        <span class="payment-name">{{ payment.name }}</span>
        <span class="payment-amount">{{ payment.amount }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createPaymentList, Payment } from '../facture';

export default defineComponent({
  name: 'PaymentList',
  data() {
    return {
      payments: [] as Payment[]
    };
  },
  created() {
    this.payments = createPaymentList();
  }
});
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
  }
</style>