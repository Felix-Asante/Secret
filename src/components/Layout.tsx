import {SafeAreaView, StatusBar} from 'react-native';
import React, {ReactNode} from 'react';
import {theme} from '../theme';

interface Props {
  children: ReactNode;
}
export default function Layout({children}: Props) {
  return (
    <SafeAreaView className="bg-green flex-1">
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.green}
      />
      {children}
    </SafeAreaView>
  );
}
