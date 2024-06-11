import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constant/styles';
import { ExpenseContext } from '../store/expense-context';

function ManagedExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpenseContext);

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editExpenseId, {
        title: 'test!!!!',
        amount: 299.22,
        date: new Date(),
      });
    } else {
      expenseCtx.addExpense({
        title: 'test-new-add',
        amount: 99.22,
        date: new Date(),
      });
    }

    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <ExpenseForm />
        <View style={styles.buttonContainer}>
          <Button
            mode={'flat'}
            onPress={cancelHandler}
            style={styles.buttonStyle}
          >
            Cancel
          </Button>
          <Button onPress={confirmHandler} style={styles.buttonStyle}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </View>
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
