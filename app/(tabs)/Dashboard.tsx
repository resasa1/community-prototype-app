import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
export default function dashboard() {
  return (
    <View>
      <Text>dashboard</Text>
      <TouchableOpacity onPress={()=> router.push('/')}>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}