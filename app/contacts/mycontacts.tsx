import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'

const mycontacts = () => {
  return (
    <ScrollView className='bg-white'>
      <Text className='text-[40px] ml-[25px] mt-8 mb-6'>My contacts</Text>
      <ScrollView className='px-2'>
        <TouchableOpacity onPress={()=>router.push('/contacts/sdsd')} className='flex-row justify-between items-baseline border-b border-[#B2AFAF] pb-2 mt-4'>
            <View className='gap-1 flex-row gap-1'>
                <View className='w-[56px] h-[62px] bg-slate-500 rounded-md'></View>
                <View>
                    <Text className='text-[20px]'>name</Text>
                    <Text className='text-[16px] text-[#B2AFAF]'>last message sent</Text>
                </View>
            </View>
            <Text className='text-[16px] text-[#B2AFAF]'>16:47</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </ScrollView>
  )
}

export default mycontacts

const styles = StyleSheet.create({})