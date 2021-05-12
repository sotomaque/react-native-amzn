import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
};

export default App;
