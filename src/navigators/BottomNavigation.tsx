/* eslint-disable react/no-unstable-nested-components */
import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AllPasswords from '../screens/AllPasswords';
import {theme} from '../theme';
import {Text, View} from 'react-native';
import Icon from '../components/Icon';
import PasswordGenerator from '../screens/PasswordGenerator';
import Account from '../screens/Account';
import AddNewPassword from '../screens/AddNewPassword';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.green,
    height: 60,
  },
  title: '',
  tabBarStyle: {
    height: 90,
    paddingVertical: 20,
  },
};
interface TabBarIconProps {
  focused: boolean;
  icon: JSX.Element | ReactNode;
  label: string;
}
const TabBarIcon = ({focused, icon, label}: TabBarIconProps) => (
  <>
    {icon}
    <Text
      className={`${focused ? 'text-green' : 'text-gray'} font-semibold mt-1 `}>
      {label}
    </Text>
  </>
);
export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              label="Home"
              focused={focused}
              icon={
                <Icon
                  size={20}
                  color={focused ? theme.colors.green : theme.colors.gray}
                  icon={'home'}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="AllPassword"
        component={AllPasswords}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <TabBarIcon
              label="Passwords"
              focused={focused}
              icon={
                <Icon
                  size={23}
                  color={focused ? theme.colors.green : theme.colors.gray}
                  icon={'lock'}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddNewPassword"
        component={AddNewPassword}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View className="w-11 h-11 rounded-full bg-blue ml-3 ">
              <View className="w-full h-full p-3 flex flex-col  justify-center align-center">
                <Icon color={theme.colors.light} icon={'plus'} />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tools"
        component={PasswordGenerator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              label="Tools"
              focused={focused}
              icon={
                <Icon
                  size={24}
                  color={focused ? theme.colors.green : theme.colors.gray}
                  icon={'codepen'}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              label="Account"
              focused={focused}
              icon={
                <Icon
                  size={24}
                  color={focused ? theme.colors.green : theme.colors.gray}
                  icon={'user'}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
