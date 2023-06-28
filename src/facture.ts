export type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  tasks: Task[];
  payments: Payment[];
};

export type Task = {
  id: number;
  description: string;
  completed: boolean;
};

export type Payment = {
  id: number;
  name: string;
  amount: string;
};

export function createUserList(): User[] {
  const userList: User[] = [
    {
      id: 1,
      name: 'Иван Иванов',
      email: 'ivan@example.com',
      phoneNumber: '1234567890',
      tasks: [
        { id: 1, description: 'Задача 1', completed: false },
        { id: 2, description: 'Задача 2', completed: true },
        { id: 3, description: 'Задача 3', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 1', amount: '12000$' },
        { id: 2, name: 'Платеж 2', amount: '100$' },
        { id: 3, name: 'Платеж 3', amount: '550$' }
      ]
    },
    {
      id: 2,
      name: 'Петр Петров',
      email: 'petr@example.com',
      phoneNumber: '9876543210',
      tasks: [
        { id: 4, description: 'Задача 4', completed: false },
        { id: 5, description: 'Задача 5', completed: true }
      ],
      payments: [
        { id: 1, name: 'Платеж 4', amount: '1430$' },
        { id: 2, name: 'Платеж 5', amount: '20$' },
        { id: 3, name: 'Платеж 6', amount: '280$' }
      ]
    },
    {
      id: 3,
      name: 'Анна Сидорова',
      email: 'anna@example.com',
      phoneNumber: '5555555555',
      tasks: [
        { id: 6, description: 'Задача 6', completed: true },
        { id: 7, description: 'Задача 7', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 7', amount: '100$' },
        { id: 2, name: 'Платеж 8', amount: '920$' },
      ]
    },
    {
      id: 4,
      name: 'Алексей Козлов',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 8', completed: true },
        { id: 9, description: 'Задача 9', completed: true },
        { id: 10, description: 'Задача 10', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 9', amount: '19000$' }
      ]
    },
    {
      id: 5,
      name: 'Дмитрий Степанов',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 11', completed: true },
        { id: 9, description: 'Задача 12', completed: true },
        { id: 10, description: 'Задача 13', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 10', amount: '1310$' },
        { id: 2, name: 'Платеж 11', amount: '1090$' },
        { id: 3, name: 'Платеж 12', amount: '12020$' }
      ]
    },
    {
      id: 6,
      name: 'Сергей Ларин',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 14', completed: true },
        { id: 9, description: 'Задача 15', completed: true },
        { id: 10, description: 'Задача 16', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 13', amount: '12900$' },
        { id: 2, name: 'Платеж 14', amount: '199$' }
      ]
    },
    {
      id: 7,
      name: 'Владимир Спиридонов',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 17', completed: true },
      ],
      payments: [
        { id: 1, name: 'Платеж 15', amount: '18.99$' },
        { id: 2, name: 'Платеж 16', amount: '1230$' },
        { id: 3, name: 'Платеж 17', amount: '9800$' }
      ]
    },
    {
      id: 8,
      name: 'Александр Наумов',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 18', completed: true },
        { id: 9, description: 'Задача 19', completed: true }
      ],
      payments: [
        { id: 1, name: 'Платеж 18', amount: '760$' },
        { id: 2, name: 'Платеж 19', amount: '1300$' }
      ]
    },
    {
      id: 9,
      name: 'Ольга Гаврилова',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 20', completed: true },
        { id: 9, description: 'Задача 21', completed: true }
      ],
      payments: [
        { id: 1, name: 'Платеж 20', amount: '17600$' }
      ]
    },
    {
      id: 10,
      name: 'Ростислав Михайлов',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 22', completed: true },
        { id: 9, description: 'Задача 23', completed: true },
        { id: 10, description: 'Задача 24', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 21', amount: '15000$' },
        { id: 2, name: 'Платеж 22', amount: '100$' },
        { id: 3, name: 'Платеж 23', amount: '1200$' }
      ]
    },
    {
      id: 11,
      name: 'Ксения Владимирова',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 25', completed: true },
        { id: 9, description: 'Задача 26', completed: true },
        { id: 10, description: 'Задача 27', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 24', amount: '10$' },
        { id: 2, name: 'Платеж 25', amount: '12320$' },
        { id: 3, name: 'Платеж 26', amount: '10990$' }
      ]
    },
    {
      id: 12,
      name: 'Илья Боруткин',
      email: 'alex@example.com',
      phoneNumber: '1231231234',
      tasks: [
        { id: 8, description: 'Задача 28', completed: true },
        { id: 9, description: 'Задача 29', completed: true },
        { id: 10, description: 'Задача 30', completed: false }
      ],
      payments: [
        { id: 1, name: 'Платеж 27', amount: '1299$' }
      ]
    }
  ];
  return userList;
}

export function createPaymentList(): Payment[] {
  const userList = createUserList();
  const paymentList: Payment[] = [];

  for (const user of userList) {
    paymentList.push(...user.payments);
  }

  return paymentList;
}
