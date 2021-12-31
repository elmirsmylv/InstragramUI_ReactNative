import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
}
