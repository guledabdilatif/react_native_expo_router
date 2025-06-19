import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';


export default function _layout() {
    const router = useRouter();
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'red',

                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    title: 'home',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => router.push('/login')}
                            style={{
                                backgroundColor: 'red',
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                                borderRadius: 6,
                                marginRight: 10,
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name='about'
                options={{
                    title: 'About Page',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name='[missing]'
                options={{
                    title: '404 Page',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name='login'
                options={{
                    title: 'login Page',
                    headerTitleAlign: "left",
                    presentation: 'modal'
                }}

            />

        </Stack>
    )
}