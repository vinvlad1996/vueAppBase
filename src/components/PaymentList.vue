<template>
  <div class="payment-list">
    <ul>
      <li
        v-for="payment in payments"
        :key="payment.id"
        class="payment-list__item"
      >
        <div class="payment-name">{{ payment.name }}</div>
        <div class="payment-amount">{{ payment.amount }}</div>
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
    padding: 0;
  }

  .payment-list {
    color: #ffffff;

    &__item {
      display: grid;
      column-gap: 40px;
      grid-template-columns: 100px 1fr;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      @media(max-width: 430px) {
        font-size: 13px;
    }
    }
  }
</style>