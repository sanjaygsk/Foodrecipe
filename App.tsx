import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/Navigation/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
        <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
