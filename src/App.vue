<template>
  <div class="container">
    <div class="content">
      <div class="content__header">
        <img
        class="content__logo"
        src="@/assets/logo.png"
        alt="logo"
      >
        <h1 class="content__logo-title">CYBER<br>ZILLA</h1>
      </div>
      <h2 class="content__title">Список пользователей</h2>
      <UserList
        class="content__list"
        :users="userList"
        @select-user="selectUser"
      />
      <UserModal :user="selectedUser" />
      <h2 class="content__title">Список платежей</h2>
      <PaymentList
        class="content__list"
        :payments="selectedUser?.payments"
        @select-payment="selectPayment"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserList from './components/UserList.vue';
import UserModal from './components/UserModal.vue';
import PaymentList from './components/PaymentList.vue';
import { createUserList, User, Payment } from './facture';

@Options({
  components: {
    UserList,
    PaymentList,
    UserModal
  },
})

export default class App extends Vue {
  userList: User[] = [];
  selectedUser: User | null = null;
  selectedPayment: Payment | null = null;

  mounted() {
    this.userList = createUserList();
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.selectedPayment = null;
  }

  selectPayment(payment: Payment) {
    this.selectedPayment = payment;
  }

  closePaymentModal() {
    this.selectedPayment = null;
  }
}

</script>

<style scoped lang="scss">
@import './assets/fonts.css';

  h1 {
    font-family: 'Audiowide', sans-serif;
    color: rgb(220 220 0);
  }

  .container {
      background-color: rgb(43 58 79);
  }

  .content {
      margin: 0 auto;
      max-width: 1200px;
      padding: 60px 20px;

      &__header {
        display: flex;
        align-items: center;
        column-gap: 40px;
      }

      &__logo {
          height: 118px;
          width: 200px;
      }

      &__logo-title {
        text-align: center;
      }

      &__title {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        line-height: 36px;
        color: #ffffff;
      }

      &__list {
        font-family: 'Roboto', sans-serif;
      }

      @media(max-width: 430px) {
        &__logo {
            height: 59px;
            width: 100px;
        }

        &__logo-title {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
      }
  }
</style>
