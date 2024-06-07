import { View, StyleSheet, FlatList, Text } from 'react-native';
import { GlobalStyles } from '../../constant/styles';

function ExpensesSummary({ period, expenses }) {
  const totalSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.period}> {period} </Text>
        <Text style={styles.sum}> $ {totalSum.toFixed(2)}</Text>
      </View>
    </>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 16,
    fontWeight: '500',
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
