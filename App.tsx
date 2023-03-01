import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigators/BottomNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default App;
