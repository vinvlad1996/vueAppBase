<template>
  <div class="user-modal">
    <div class="user-modal__modal-overlay" v-if="isOpen" @click="closeModal"></div>
    <div class="user-modal__modal-content" v-if="isOpen" :style="{ background }">
      <h3>Редактирование пользователя</h3>
      <form @submit.prevent="saveUser">
        <div>
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="editedUser.name" required />
        </div>
        <div class="name">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="editedUser.email" required />
        </div>
        <div>
          <label for="phoneNumber">Номер телефона:</label>
          <input type="text" id="phoneNumber" v-model="editedUser.phoneNumber" required />
        </div>
        <div class="buttons">
          <button type="submit">Сохранить</button>
          <button class="close-button" @click="closeModal">Закрыть</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '../facture';

export default defineComponent({
  name: 'UserModal',
  props: {
    user: {
      type: Object as () => User,
      required: true
    },
    background: {
      type: String,
      default: '#fff'
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editedUser: { ...this.user } as User
    };
  },
  watch: {
    user(newValue: User) {
      this.editedUser = { ...newValue };
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:is-open', false);
    },
    saveUser() {
      this.$emit('save', this.editedUser);
      this.closeModal();
    },
    cancelEdit() {
      this.editedUser = { ...this.user };
      this.closeModal();
    }
  }
});
</script>

<style scoped lang="scss">
.user-modal {
  &__modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  &__modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    z-index: 1000;

    h3 {
      margin-top: 0;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;

      label {
        font-weight: bold;
      }

      input {
        width: 100%;
        padding: 5px;
      }

      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 20px;
      }
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 10px;
      background-color: #ccc;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
