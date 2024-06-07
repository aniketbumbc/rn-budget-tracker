import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constant/styles';
import { getFormatDate } from '../utils/utils';

function ExpenseItem({ title, amount, date }) {
  return (
    <>
      <Pressable>
        <View style={styles.itemContainer}>
          <View>
            <Text style={[styles.title, styles.textBase]}>{title}</Text>
            <Text style={styles.textBase}>{getFormatDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOpacity: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },

  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },

  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
