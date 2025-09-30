import { View, StyleSheet, StatusBar } from 'react-native';
import Splash from '@/components/Splash';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});