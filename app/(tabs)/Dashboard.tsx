import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventRenders from '../components/EventRenders'

export default function dashboard() {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontWeight: 'bold' }}>UPCOMING EVENTS</Text>
      <EventRenders />
      <Text>dashboard</Text>
      <TouchableOpacity onPress={()=> router.push('/')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})