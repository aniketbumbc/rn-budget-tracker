import { useContext } from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { ExpenseContext } from '../store/expense-context';

function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <>
      <ExpensesOutput
        period='Total'
        expenses={expenseCtx.expenses}
        fallbackText={'Oppps!!! No expenses register found'}
      />
    </>
  );
}

export default AllExpenses;
