import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <TouchableOpacity onPress={()=> router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Settings