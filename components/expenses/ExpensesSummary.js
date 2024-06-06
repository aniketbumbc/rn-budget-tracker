import { View, StyleSheet, FlatList, Text } from 'react-native';

function ExpensesSummary({ period, expenses }) {
  console.log('summary', expenses);
  const totalSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <>
      <View>
        <Text> {period} </Text>
        <Text> $ {totalSum.toFixed(2)}</Text>
        <FlatList />
      </View>
    </>
  );
}

export default ExpensesSummary;
