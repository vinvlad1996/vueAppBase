<template>
  <div>
    <h2>Список пользователей</h2>
    <UserList :users="userList" @select-user="selectUser"></UserList>

    <UserModal :user="selectedUser"></UserModal>

    <h2>Список платежей</h2>
    <PaymentList :payments="selectedUser?.payments" @select-payment="selectPayment"></PaymentList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserList from './components/UserList.vue';
import TaskList from './components/TaskList.vue';
import UserModal from './components/UserModal.vue';
import PaymentList from './components/PaymentList.vue';
import { createUserList, User, Payment } from './facture';

@Options({
  components: {
    UserList,
    TaskList,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
