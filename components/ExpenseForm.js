import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { GlobalStyles } from '../constant/styles';
import Input from './Input';
import Button from './UI/Button';

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  selectedExpenses,
}) {
  const [inputValues, setInputValues] = useState({
    title: {
      value: selectedExpenses ? selectedExpenses.title : '',
      isValid: true,
    },
    amount: {
      value: selectedExpenses ? selectedExpenses.amount.toString() : '',
      isValid: true,
    },

    date: {
      value: selectedExpenses
        ? selectedExpenses.date.toISOString().slice(0, 10)
        : '',
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enterAmount) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: enterAmount, isValid: true },
      };
    });
  }

  function confirmHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      title: inputValues.title.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const titleIsValid = expenseData.title.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      // Alert.alert('Invalid input, please check yor input');

      setInputValues((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          title: { value: currentInputs.title.value, isValid: titleIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const isFormInvalid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.title.isValid;

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Your Expenses</Text>
        <View style={styles.rowContainer}>
          <Input
            label={'Amount'}
            style={styles.rowInput}
            invalid={!inputValues.amount.isValid}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: inputChangedHandler.bind(this, 'amount'),
              value: inputValues.amount.value,
            }}
          />
          <Input
            label={'Date'}
            style={styles.rowInput}
            invalid={!inputValues.date.isValid}
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, 'date'),
              value: inputValues.date.value,
            }}
          />
        </View>
        <Input
          label={'Title'}
          invalid={!inputValues.title.isValid}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'title'),
            value: inputValues.title.value,
          }}
        />

        {isFormInvalid && (
          <Text style={styles.errorText}>
            {' '}
            Invalid input, Please check enter data
          </Text>
        )}

        <View style={styles.buttonContainer}>
          <Button mode={'flat'} onPress={onCancel} style={styles.buttonStyle}>
            Cancel
          </Button>
          <Button onPress={confirmHandler} style={styles.buttonStyle}>
            {submitButtonLabel}
          </Button>
        </View>
      </View>
    </>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rowInput: {
    flex: 1,
  },
  formContainer: {
    marginTop: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
