import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const myPurshases = (props: Props) => {
  return (
    <View className='w-full'>
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>myPurshases</Text>
      <ScrollView className=''>
        <View className='flex-row gap-3 justify-between border-b border-[#B2AFAF] mx-3 pb-2'>
            <View className='flex-row items-center gap-2'>
              <Image
              source={require('../assets/images/app/model.png')}
              className='w-[80px] h-[100px]'
              />
              <View>
                  <Text className='text-[20px] mb-2'>Plant name</Text>
                  <Text className='mb-1'>seller name</Text>
                  <Text>quantity</Text>
              </View>
            </View>
            <View className='flex-col py-4 justify-between'>
              <Text className='text-[20px] text-[#009245] pt-1'>1500DA</Text>
              <Text className='text-[#B2AFAF] text-[13px]'>26/7/2023</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default myPurshases

const styles = StyleSheet.create({})