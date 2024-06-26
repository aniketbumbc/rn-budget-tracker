import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManagedExpense from './screen/ManagedExpenses';
import RecentExpenses from './screen/RecentExpenses';
import AllExpenses from './screen/AllExpenses';
import { GlobalStyles } from './constant/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expense-context';
import { EvilIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function ExpensesOverview() {
  useEffect(() => {
    premissionHandler();

    Notifications.getExpoPushTokenAsync({
      projectId: '01c1ed6b-9afb-44e4-8b7e-973e45bfdf2c',
    }).then((pushTokenData) => {});

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const userName = notification.request.content.data.userName;
      }
    );

    const responseSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {}
    );

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);

  const premissionHandler = async () => {
    const settings = await Notifications.getPermissionsAsync();
    const isGranted = settings.granted;

    if (!isGranted) {
      const request = await Notifications.requestPermissionsAsync();

      if (request.granted) {
        Alert.alert(
          'You have granted permissions',
          'You can now receive notifications'
        );
      } else {
        Alert.alert(
          'You did not grant permissions',
          'You will be unable to receive notifications'
        );

        return;
      }
    }
  };

  async function schedulePushNotification() {
    premissionHandler();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Setup your budget',
        body: 'Keep track your budget',
        data: { userName: 'bunny' },
      },
      trigger: { seconds: 2 },
    });
  }

  function sendPushNotification() {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: '',
        title: 'Test send for device',
        body: 'This is test',
      }),
    });
  }

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => {
          return (
            <>
              <View style={styles.IconContainer}>
                <View>
                  <IconButton
                    icon='add'
                    size={24}
                    color={tintColor}
                    onPress={() => {
                      navigation.navigate('ManageExpense');
                    }}
                  />
                </View>
                <View>
                  <EvilIcons
                    name='bell'
                    size={30}
                    color={tintColor}
                    onPress={schedulePushNotification}
                  />
                </View>
              </View>
            </>
          );
        },
      })}
    >
      <BottomTabs.Screen
        name='RecentExpense'
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen
              name='ExpenseOverview'
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ManageExpense'
              component={ManagedExpense}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14,
  },
});
