import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { io } from 'socket.io-client'

type Props = {}

const _layout = (props: Props) => {
  const socketIO = io('http://192.168.1.5:8000',{ transports: ["websocket"] });
  React.useEffect(()=>{
    socketIO.on('connection',()=>{
      console.log('socket')
    })   
  },[])
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
        headerShadowVisible:false,
        headerTitle:''
      }}
      />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})