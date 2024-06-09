import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/styles';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, period }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary period={period} expenses={expenses} />
        <ExpensesList expenses={expenses} />
      </View>
    </>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
