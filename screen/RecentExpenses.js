import { Text } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function RecentExpenses() {
  return (
    <>
      <ExpensesOutput period='Last 7 Days' />
    </>
  );
}

export default RecentExpenses;
