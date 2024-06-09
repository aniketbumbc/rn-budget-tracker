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
    title: 'A pair of bags',
    amount: 150.99,
    date: new Date('2022-01-11'),
  },
  {
    id: 'e3',
    title: 'A pair of Rackets',
    amount: 199.99,
    date: new Date('2022-02-20'),
  },

  {
    id: 'e4',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e5',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e6',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e7',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e8',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e9',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e10',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e11',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
];

const ExpenseContext = createContext({
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

function expensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, dummyData);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
}

export default expensesContextProvider;
