import { View, StyleSheet } from 'react-native';
import Splash from '@/components/Splash';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});