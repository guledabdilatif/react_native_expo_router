import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'


export default function missing() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'red', marginBottom: 20 }}>
        404 - Page Not Found
      </Text>
      <Button title="Go Home" onPress={() => router.replace('/')} />
    </View>
  )
}