

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
export default function TabsLayout() {
    return (

        <Tabs screenOptions={{

            headerShown: false,
            tabBarActiveTintColor: 'blue'
        }}>

            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => {
                    return focused
                        ?
                        <Entypo name="home" size={24} color={color} />
                        :
                        <AntDesign name="home" size={24} color="black" />

                },
            }} />
            <Tabs.Screen name="about" options={{
                title: "about",
                tabBarIcon: ({ color, focused }) => {
                    return focused
                        ?
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                        :
                        <FontAwesome5 name="user" size={24} color={color} />

                },
            }} />
            <Tabs.Screen name="contacts" options={{
                title: "contacts",
                tabBarIcon: ({ color, focused }) => {
                    return focused
                        ?
                        <MaterialCommunityIcons name="contacts" size={24} color={color} />
                        :
                        <MaterialCommunityIcons name="contacts-outline" size={24} color="black" />

                },
            }} />
            <Tabs.Screen name="skills" options={{
                title: "skills",
                tabBarIcon: ({ color, focused }) => {
                    return focused
                        ?
                        <Ionicons name="settings" size={24} color={color} />
                        :
                        <Ionicons name="settings-outline" size={24} color={color} />

                },
            }} />
            <Tabs.Screen name="projects" options={{
                title: "projects",
                tabBarIcon: ({ color, focused }) => {
                    return focused
                        ?
                        <FontAwesome name="folder-open" size={24} color={color} />
                        :
                        <FontAwesome name="folder-open-o" size={24} color={color} />
                },
            }} />


        </Tabs>
    )
}
