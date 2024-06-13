import { createContext, useReducer } from 'react';

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const invertOrder = action.payload.reverse();
      return invertOrder;

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
  const [expenseState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: 'SET', payload: expenses });
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
    setExpenses: setExpenses,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
