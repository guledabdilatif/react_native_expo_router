import { Text, View } from 'react-native'

export default function home() {
  return (
    <View style={{
      flex:1, 
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center'}}>
      <Text
      style={{fontSize:24}}
      >This is home page</Text>
    </View>
  )
}