import { createContext, useReducer } from 'react';

export const dummyData = [
  {
    id: 'e1',
    title: 'A pair of shoes',
    amount: 66.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    title: 'A pair of bags-e',
    amount: 150.99,
    date: new Date('2022-01-11'),
  },
  {
    id: 'e3',
    title: 'A pair of Rackets-e',
    amount: 199.99,
    date: new Date('2022-02-20'),
  },

  {
    id: 'e4',
    title: 'A pair of Book-d',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e5',
    title: 'Iphone-d',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e6',
    title: 'A pair of Book-c',
    amount: 19.99,
    date: new Date('2024-06-06'),
  },
  {
    id: 'e7',
    title: 'Iphone-c',
    amount: 1299.99,
    date: new Date('2024-06-06'),
  },
  {
    id: 'e8',
    title: 'A pair of Book-b',
    amount: 19.99,
    date: new Date('2024-06-05'),
  },
  {
    id: 'e9',
    title: 'Iphone-b',
    amount: 1299.99,
    date: new Date('2024-06-07'),
  },
  {
    id: 'e10',
    title: 'A pair of Book-a',
    amount: 19.99,
    date: new Date('2024-06-05'),
  },
  {
    id: 'e11',
    title: 'Iphone-a',
    amount: 1299.99,
    date: new Date('2024-06-06'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updateIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpenseItem = state[updateIndex];
      const updatedItem = { ...updatableExpenseItem, ...action.payload.data };
      const updateState = [...state];
      updateState[updateIndex] = updatedItem;
      return updateState;
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, dummyData);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: { id: id } });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
