import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const notifications = () => {
  return (
    <View>
        <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Notifications</Text>
        <ScrollView className='px-2'>
            <View className='flex items-center text-[#B2AFAF] '>
                <Text className='z-40 bg-white px-2 text-[#B2AFAF]'>16:55</Text>
            </View>
            <View className='border-b border-[#B2AFAF] mt-2'>
                <Text className='text-[16px]'>this is some kind of exmale of the notifications page</Text>
                <View className='flex-row w-full justify-end'>
                    <Text className='text-[#B2AFAF] text-[11px]'>6 hours ago</Text>
                </View>
            </View>
        </ScrollView>
        
    </View>
  )
}

export default notifications

const styles = StyleSheet.create({})