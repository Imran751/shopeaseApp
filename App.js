import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/LoginScreen/Login';
import { ClerkProvider } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_ZnJlc2gtZm93bC03MC5jbGVyay5hY2NvdW50cy5kZXYk'>
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </View>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
