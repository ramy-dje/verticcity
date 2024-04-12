import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const _layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen 
      name='mycontacts'
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen 
      name='[recieverId]'
      options={{
      }}
      />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})