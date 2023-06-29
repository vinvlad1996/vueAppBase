<template>
  <div class="user-modal">
    <div
      class="user-modal__modal-overlay"
      v-if="isOpen"
      @click="closeModal"
    />
    <div
      class="user-modal__modal-content"
      v-if="isOpen"
      :style="{ background }"
    >
      <ul>
        <li
          v-for="task in tasks"
          :key="task.id"
        >
          <label class="task-item">
            <input
              type="checkbox"
              :value="task.id"
              v-model="checkedTodo"
              class="task-checkbox"
            />
            <span
              class="task-description"
              :class="{ completed: isTaskCompleted(task.id) }"
            >
              {{ task.description }}
            </span>
          </label>
        </li>
      </ul>
      <button
        @click="onSave"
        class="save-button"
      >Сохранить</button>
      <button
        class="close-button"
        @click="closeModal"
      >
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../facture';

export default defineComponent({
  name: 'TaskList',
  data() {
    return {
      checkedTodo: [] as number[]
    }
  },
  props: {
    tasks: {
      type: Array as () => Task[],
      required: true
    },
    background: {
      type: String,
      default: '#2b3a4f'
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSave() {
      const newTasks = this.tasks.map(item => ({
        ...item,
        completed: this.isTaskCompleted(item.id)
      }));
      this.$emit('save', newTasks);
    },

    closeModal() {
      this.$emit('update:is-open', false);
    },

    isTaskCompleted(id: number) {
      return this.checkedTodo.includes(id);
    }
  },

  created() {
    this.checkedTodo = this.tasks.map(item => {
      if (item.completed) {
        return item.id;
      }
    })
    .filter(item => item !== undefined) as number[];
  }
});
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}

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
    font-family: 'Roboto', sans-serif;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 34px 20px 20px;
    z-index: 1000;
    border-radius: 20px;
  }

  ul {
    padding: 0;
    list-style-type: none;

    li {
      .task-item {
        display: flex;
        align-items: center;
        gap: 10px;

        &.completed {
          .task-description {
            text-decoration: line-through;
          }
        }
      }
    }
  }

  .task-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }

  .task-checkbox:checked {
    background-color: #007bff;
    border-color: #007bff;
  }

  .task-checkbox:checked::before {
    content: '\2713';
    display: block;
    width: 10px;
    height: 10px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 10px;
  }

  .task-description {
    flex: 1;
  }

  .completed {
    text-decoration: line-through;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: rgb(33 48 69);
    border: none;
    border-radius: 5px;
    color: rgb(199, 54, 22);
    cursor: pointer;

    &:hover {
      color: rgb(33 48 69);
      background-color: rgb(199, 54, 22);
      transition: 0.5s;
    }
  }

  .save-button {
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
}
</style>
