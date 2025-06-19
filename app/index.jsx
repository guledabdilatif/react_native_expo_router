import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Button, View } from 'react-native'

export default function index() {
    return (
        <View
            style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                flex:1
            }}
        >
            <StatusBar style='dark'/>
            {/* <Link href='/about' asChild>
            <Button title='go to about page'/>
            </Link> */}
            {/* <Link href='/login' asChild>
            <Button title='go to login page'/>
            </Link> */}
            <Link href='/home' asChild>
            <Button title='go to tab one'/>
            </Link>


        </View>
    )
}