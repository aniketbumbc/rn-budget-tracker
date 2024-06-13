import { useLayoutEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import Loader from '../components/UI/Loader';
import { GlobalStyles } from '../constant/styles';
import { ExpenseContext } from '../store/expense-context';
import {
  deleteExpense,
  postExpenseData,
  updateExpense,
} from '../utils/service';

function ManagedExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpenseContext);
  const [loading, setLoading] = useState(false);

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpenses = expenseCtx.expenses.find(
    (expense) => expense.id === editExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setLoading(true);
    await deleteExpense(editExpenseId);
    expenseCtx.deleteExpense(editExpenseId);
    setLoading(false);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    setLoading(true);
    if (isEditing) {
      expenseCtx.updateExpense(editExpenseId, expenseData);
      await updateExpense(editExpenseId, expenseData);
    } else {
      const id = await postExpenseData(expenseData);
      expenseCtx.addExpense({ ...expenseData, id: id });
    }
    setLoading(false);
    navigation.goBack();
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.container}>
        <ExpenseForm
          onCancel={cancelHandler}
          submitButtonLabel={isEditing ? 'Update' : 'Add'}
          onSubmit={confirmHandler}
          selectedExpenses={selectedExpenses}
        />

        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon='trash'
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    </>
  );
}

export default ManagedExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
