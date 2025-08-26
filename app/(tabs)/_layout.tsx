import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout(){
  return (
    <Tabs
    screenOptions={{
      tabBarLabelStyle: {
        fontFamily: "Arial",
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: "#333",
        height: 60,
      },
      tabBarInactiveTintColor: "#f0f0f0",
      tabBarActiveTintColor: "#e0e0e0",
    }}
    >
    <Tabs.Screen
      name="Dashboard"
      options={{
        title: "Home",
        tabBarIcon: () => (
          <Image 
          source={require('../../assets/images/icon.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
        ),
        headerShown: false,
      }}/>
    <Tabs.Screen
      name="Inventory"
      options={{
        title: "My Items",
        tabBarIcon: () => (
          <Image 
          source={require('../../assets/images/icon.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
        ),
        headerShown: false,
      }}/>
    <Tabs.Screen
      name="Profiles"
      options={{
        title: "Profiles",
        tabBarIcon: () => (
          <Image 
          source={require('../../assets/images/icon.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
        ),
        headerShown: false,
      }}/>
      <Tabs.Screen
      name="Settings"
      options={{
        title: "Settings",
        tabBarIcon: () => (
          <Image 
          source={require('../../assets/images/icon.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
        ),
        headerShown: false,
      }}/>

    </Tabs>
  )
}