import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChanged() {}

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
              onChangeText: amountChanged,
            }}
          />
          <Input
            label={'Date'}
            style={styles.rowInput}
            textInputConfig={{
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
              onChangeText: () => {},
            }}
          />
        </View>
        <Input
          label={'Title'}
          textInputConfig={{
            multiline: true,
          }}
        />
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
});
