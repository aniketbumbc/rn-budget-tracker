import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpenseContext } from '../store/expense-context';
import { getDateMinus } from '../utils/utils';
import { getExpenseData } from '../utils/service';
import Loader from '../components/UI/Loader';

function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExpense() {
      setLoading(true);
      const expenses = await getExpenseData();
      expenseCtx.setExpenses(expenses);
      setLoading(false);
    }

    getExpense();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const recentExpenses = expenseCtx.expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinus(today, 7);

    return item.date > date7DaysAgo;
  });

  return (
    <>
      <ExpensesOutput
        period='Last 7 Days'
        expenses={recentExpenses}
        fallbackText={'No expenses register yet. Please add expense'}
      />
    </>
  );
}

export default RecentExpenses;
