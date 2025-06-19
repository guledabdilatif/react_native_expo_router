import { Text, View } from 'react-native'

export default function About() {
  return (
    <View style={{
      flex:1, 
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center'}}>
      <Text
      style={{fontSize:24}}
      >This is about page</Text>
    </View>
  )
}