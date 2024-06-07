import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const dummyData = [
  {
    id: 'e1',
    title: 'A pair of shoes',
    amount: 66.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    title: 'A pair of bags',
    amount: 150.99,
    date: new Date('2022-01-11'),
  },
  {
    id: 'e3',
    title: 'A pair of Rackets',
    amount: 199.99,
    date: new Date('2022-02-20'),
  },

  {
    id: 'e4',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e5',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e6',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e7',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e8',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e9',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
  {
    id: 'e10',
    title: 'A pair of Book',
    amount: 19.99,
    date: new Date('2022-04-20'),
  },
  {
    id: 'e11',
    title: 'Iphone',
    amount: 1299.99,
    date: new Date('2022-05-01'),
  },
];

function ExpensesOutput({ expenses, period }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary period={period} expenses={dummyData} />
        <ExpensesList expenses={dummyData} />
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
