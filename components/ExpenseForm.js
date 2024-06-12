import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import Button from './UI/Button';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    title: '',
    amount: '',
    date: '',
  });

  function inputChangedHandler(inputIdentifier, enterAmount) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enterAmount,
      };
    });
  }

  function confirmHandler() {}

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Your Expenses</Text>
        <View style={styles.rowContainer}>
          <Input
            label={'Amount'}
            style={styles.rowInput}
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: inputChangedHandler.bind(this, 'amount'),
              value: inputValues.amount,
            }}
          />
          <Input
            label={'Date'}
            style={styles.rowInput}
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, 'date'),
              value: inputValues.date,
            }}
          />
        </View>
        <Input
          label={'Title'}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, 'title'),
            value: inputValues.title,
          }}
        />
        <View style={styles.buttonContainer}>
          <Button mode={'flat'} onPress={onCancel} style={styles.buttonStyle}>
            Cancel
          </Button>
          <Button onPress={onSubmit} style={styles.buttonStyle}>
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
});
