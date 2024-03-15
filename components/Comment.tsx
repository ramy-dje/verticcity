import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Comment = () => {
  return (
    <View className='border-b border-[#B2AFAF] pb-2 mt-4'>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row gap-1 items-center'>
            <View className='w-[24] h-[24] bg-slate-600 rounded-full'></View>
            <Text>client name</Text>
        </View>
        <Text>* * * * *</Text>
      </View>
      <Text>some commment here writen y some some body hhhhhh</Text>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({})