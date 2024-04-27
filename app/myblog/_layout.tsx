import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const _layout = (props: Props) => {
  return (
    <Stack> 
      <Stack.Screen 
      name='blogs' 
      options={{headerShown:false}} 
      />
      <Stack.Screen 
      name='createBlog' 
      options={{headerTitle:'',headerShadowVisible:false,headerTintColor:'#009245',}}
      />
      <Stack.Screen 
      name='editBlog' 
      options={{headerTitle:'',headerShadowVisible:false,headerTintColor:'#009245',}}
      />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})