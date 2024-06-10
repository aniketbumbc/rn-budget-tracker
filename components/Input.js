import { Text, TextInput, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constant/styles';

function Input({ label, textInputConfig, style }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  labelText: {
    fontSize: 16,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 20,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 150,
    textAlignVertical: 'top',
  },
});
