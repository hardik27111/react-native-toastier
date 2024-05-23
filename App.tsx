import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ToastProvider, { ToastService } from './src/context/ToastProvider';

const Example = () => {
  return (

    <TouchableOpacity onPress={() => { ToastService.show({ message: 'test message'}) }} >
      <Text>Show Toast</Text>
    </TouchableOpacity>

  )
}

function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ToastProvider>
        <Example />
      </ToastProvider>
    </SafeAreaView>

  );
}

export default App;
