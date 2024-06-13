import axios from 'axios';

const firebaseUrl =
  'https://react-native-budget-trac-38529-default-rtdb.firebaseio.com/';

export async function postExpenseData(expenseData) {
  const response = await axios.post(firebaseUrl + 'expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function getExpenseData() {
  const response = await axios.get(firebaseUrl + 'expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const tempObj = {
      id: key,
      amount: response.data[key].amount,
      title: response.data[key].title,
      date: new Date(response.data[key].date),
    };

    expenses.push(tempObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(firebaseUrl + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(firebaseUrl + `/expenses/${id}.json`);
}
