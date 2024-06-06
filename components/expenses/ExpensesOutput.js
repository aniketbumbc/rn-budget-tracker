import { View, StyleSheet } from 'react-native';
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
];

function ExpensesOutput({ expenses, period }) {
  return (
    <>
      <View>
        <ExpensesSummary period={period} expenses={dummyData} />
        <ExpensesList expenses={dummyData} />
      </View>
    </>
  );
}

export default ExpensesOutput;
