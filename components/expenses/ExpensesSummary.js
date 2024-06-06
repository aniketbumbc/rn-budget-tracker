import { View, StyleSheet, FlatList } from 'react-native';

function ExpensesSummary() {
  return (
    <>
      <View>
        <Text> Last 7 Days </Text>
        <Text> $ 177.90</Text>
        <FlatList />
      </View>
    </>
  );
}

export default ExpensesSummary;
