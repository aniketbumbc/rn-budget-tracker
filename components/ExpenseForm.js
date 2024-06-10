import { View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChanged() {}

  return (
    <>
      <View>
        <Input
          label={'Amount'}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChanged,
          }}
        />
        <Input
          label={'Date'}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
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
