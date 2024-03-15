import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Comment from '@/components/Comment'

const plantDetails = () => {
  return (
    <ScrollView className='p-4'>
      <View className='flex-row justify-between items-center'>
        <View className=''>
          <Text className='text-[32px]'>Plant name</Text>
          <Text className='text-[13px] mt-8'>seller name</Text>
          <Text className='text-[13px]'>seller location</Text>
        </View>
      <Image
            source={require('../../assets/images/app/model.png')}
            className='w-[150px] h-[150px]  '
        />     
      </View>
      <View className='flex-row justify-between items-center mt-3'>
        <Text className='text-[24px]'>Description</Text>
        <Text>icon</Text>
      </View>
      <Text className='text-[15px]'>
        some description about this beautiful lant some description about this beautiful lant  some description about this beautiful lant some description about this beautiful lant some description about this beautiful lant  some description about this beautiful lant some description about this beautiful lant some description about this beautiful lant  some description about this beautiful lant 
      </Text>
      <Text className='text-[24px] my-3'>Images</Text>
      <View className='flex-row gap-2'>
        <Image
              source={require('../../assets/images/app/model.png')}
              className='w-[80px] h-[80px]  '
        />
          <Image
              source={require('../../assets/images/app/model.png')}
              className='w-[80px] h-[80px]  '
         />   

       <Image
              source={require('../../assets/images/app/model.png')}
              className='w-[80px] h-[80px]  '
        />
      </View>
      <View className='flex-row justify-between items-center'>
        <Text className='text-[24px] my-3'>Reviews</Text>
        <Text>icon</Text> 
      </View>
      <View className='pb-4'>
        <Comment /> 
        <Comment /> 
        <Comment />  
      </View> 
    </ScrollView>
  )
}

export default plantDetails

const styles = StyleSheet.create({})