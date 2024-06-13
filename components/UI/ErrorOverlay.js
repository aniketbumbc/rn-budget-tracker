import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/styles';
import Button from './Button';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.testStyle, styles.title]}> An error occurred</Text>
      <Text style={styles.testStyle}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  testStyle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
