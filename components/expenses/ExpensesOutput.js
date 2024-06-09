import { View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constant/styles';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, period, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary period={period} expenses={expenses} />
        {content}
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

  infoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 32,
  },
});
