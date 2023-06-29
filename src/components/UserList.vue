<template>
  <div class="user-list-container">
    <ul class="user-list__list">
      <li
        class="user-list__list-item"
        v-for="user in userList"
        :key="user.id"
      >
        <div class="user-list__list-item-content">
          <div class="user-list__list-item-content_name">{{ user.name }}</div>
          <div class="user-list__list-item-content_email">{{ user.email }}</div>
          <div class="user-list__list-item-content_phone">{{ user.phoneNumber }}</div>
        </div>
        <div>
          <button
            @click="openModal(user)"
            class="user-list__button"
          >
            Редактировать
          </button>
        </div>
        <div>
          <button
            @click="openTodoModal(user)"
            class="user-list__button"
          >
            TODO-лист
          </button>
        </div>
      </li>
    </ul>
    <TaskList
      @save="onEditUserTasks"
      v-if="isTodoModalOpen"
      :tasks="selectedUser.tasks"
    />
    <UserModal
      @save="onEditUser"
      v-model:is-open="isEditModalOpen"
      :user="selectedUser"
    />
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
      isEditModalOpen: false,
      isTodoModalOpen: false
    };
  },
  created() {
    this.userList = createUserList();
  },
  methods: {
    openModal(user: User) {
      this.selectedUser = user;
      this.isEditModalOpen = true;
    },

    openTodoModal(user: User) {
      this.selectedUser = user;
      this.isTodoModalOpen = true;
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  .user-list {
    &__list {
      list-style-type: none;
      padding: 0;
    }

    &__list-item {
      display: grid;
      grid-template-columns: 560px 120px 120px;
      grid-gap: 40px;
      margin-bottom: 20px;
    }

    &__list-item-content {
      color: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    &__button {
        font-family: 'Roboto', sans-serif;
        background-color: rgb(33 48 69);
        color: rgb(220 220 0);
        border-radius: 0.75rem;
        padding: 8px 16px;
        border: none;

        &:hover {
          color: rgb(33 48 69);
          background-color: rgb(220 220 0);
          transition: 0.5s;
        }
    }

    @media(max-width: 960px) {
        &__list-item-content_email,
        &__list-item-content_phone {
          display: none;
        }

        &__list-item {
          grid-template-columns: 100px 100px 100px;
        }

        &__list-item-content {
          grid-template-columns: 100px;
        }
      }

      @media(max-width: 430px) {
        &__list-item {
          grid-template-columns: 70px 100px 100px;
          grid-gap: 30px;
        }

        &__list-item-content {
          grid-template-columns: 70px;
          font-size: 13px;
        }
      }
  }

  .completed-task {
    text-decoration: line-through;
  }
</style>
