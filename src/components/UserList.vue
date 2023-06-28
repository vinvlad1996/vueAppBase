<template>
  <div class="user-list-container">
    <ul class="user-list__list">
      <li class="user-list__list-item" v-for="user in userList" :key="user.id">
        <div>
          <span>{{ user.name }}</span>
          <span>{{ user.email }}</span>
          <span>{{ user.phoneNumber }}</span>
        </div>
        <div>
          <button @click="openModal(user)">Редактировать</button>
        </div>
        <div>
          <button @click="openTodoModal(user)">TODO-лист</button>
        </div>
      </li>
    </ul>
    <TaskList @save="onEditUserTasks" v-if="selectedUser" :tasks="selectedUser.tasks"></TaskList>
    <UserModal @save="onEditUser" v-model:is-open="isOpen" :user="selectedUser"></UserModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createUserList, Task, User } from '../facture';
import UserModal from './UserModal.vue';
import TaskList from './TaskList.vue';

export default defineComponent({
  components: {
    UserModal,
    TaskList
  },

  name: 'UserList',
  data() {
    return {
      userList: [] as User[],
      selectedUser: null as User | null,
      selectedTodoUser: null as User | null,
      isOpen: false
    };
  },
  created() {
    this.userList = createUserList();
  },
  methods: {
    openModal(user: User) {
      this.selectedUser = user;
      this.isOpen = true;
    },

    openTodoModal(user: User) {
      this.selectedUser = user;
    },

    onEditUser(user: User) {
      const userIndex = this.userList.findIndex(item => item.id === user.id);
      this.userList.splice(userIndex, 1, user);
    },

    onEditUserTasks(tasks: Task[]) {
      if (!this.selectedUser) {
        return;
      }
      this.selectedUser.tasks = tasks;
      const userIndex = this.userList.findIndex(item => item.id === this.selectedUser?.id);
      this.userList.splice(userIndex, 1, this.selectedUser);
      this.selectedUser = null;
    }
  }
});
</script>

<style scoped lang="scss">
  .user-list {
    &__list {
      list-style-type: none;
    }

    &__list-item {
      display: grid;
      grid-template-columns: 600px 100px 100px;
      grid-gap: 40px;
    }

    &__edit {
      background: aqua;
    }
  }

  .completed-task {
    text-decoration: line-through;
  }
</style>
