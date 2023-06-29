<template>
  <div class="task-list">
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
    <button @click="onSave">Сохранить</button>
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

.task-list {

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
}
</style>
