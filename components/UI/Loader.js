import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constant/styles';

function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' />
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
