import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { ToastProvider } from 'react-native-toastier';
import ToastView from './src';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ToastProvider>
        <ToastView />
      </ToastProvider>
    </SafeAreaView>
  );
}

export default App;
