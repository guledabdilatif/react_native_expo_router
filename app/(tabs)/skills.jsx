import { Text, View } from 'react-native'

export default function skills() {
  return (
    <View style={{
      flex:1, 
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center'}}>
      <Text
      style={{fontSize:24}}
      >This is Skills Page</Text>
    </View>
  )
}