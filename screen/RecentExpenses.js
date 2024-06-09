import { Text } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense-context';
import { getDateMinus } from '../utils/utils';

function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  const recentExpenses = expenseCtx.expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinus(today, 7);

    return item.date > date7DaysAgo;
  });

  return (
    <>
      <ExpensesOutput period='Last 7 Days' expenses={recentExpenses} />
    </>
  );
}

export default RecentExpenses;
