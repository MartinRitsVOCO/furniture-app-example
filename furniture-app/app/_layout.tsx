import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import Colors from '@/constants/colors';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'DM-Sans': require('@/assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
    'DM-Sans-Italic': require('@/assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf'),
  });
  
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: Colors.background }
    }}>
      <Stack.Screen name="index" options={{title: 'Start'}} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  }
})