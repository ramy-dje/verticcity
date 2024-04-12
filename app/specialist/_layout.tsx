import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const _layout = (props: Props) => {
  return (
    <Stack >
        <Stack.Screen name='search' options={{headerShown:false}} />
        <Stack.Screen name='[id]' options={{headerShown:true}} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})