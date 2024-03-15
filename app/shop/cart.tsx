import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cart = () => {
  return (
    <View>
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Cart</Text>
      <Image
        source={require('../../assets/images/app/cart.jpg')}
        className='w-[350px] h-[230px] absolute right-[-120px] rotate-[-116deg]'
      />
      <ScrollView className='p-4 '>
        <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4'>
            <View className='flex-row'>
                <Image
                source={require('../../assets/images/app/model.png')}
                className='w-[110px] h-[150px]'
                /> 
                <View className='mt-8'>
                    <Text className='text-[20px]'>Plant name</Text>
                    <Text className='text-[16px]'>150DA</Text>
                </View>
             </View>
             <View className='flex-row gap-2'>
                <Text>add</Text>
                <Text>0</Text>
                <Text>minus</Text>
             </View>
        </View>
        <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4'>
            <View className='flex-row'>
                <Image
                source={require('../../assets/images/app/model.png')}
                className='w-[110px] h-[150px]'
                /> 
                <View className='mt-8'>
                    <Text className='text-[20px]'>Plant name</Text>
                    <Text className='text-[16px]'>150DA</Text>
                </View>
             </View>
             <View className='flex-row gap-2'>
                <Text>add</Text>
                <Text>0</Text>
                <Text>minus</Text>
             </View>
        </View>
        <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4'>
            <View className='flex-row'>
                <Image
                source={require('../../assets/images/app/model.png')}
                className='w-[110px] h-[150px]'
                /> 
                <View className='mt-8'>
                    <Text className='text-[20px]'>Plant name</Text>
                    <Text className='text-[16px]'>150DA</Text>
                </View>
             </View>
             <View className='flex-row gap-2'>
                <Text>add</Text>
                <Text>0</Text>
                <Text>minus</Text>
             </View>
        </View>
        <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4'>
            <View className='flex-row'>
                <Image
                source={require('../../assets/images/app/model.png')}
                className='w-[110px] h-[150px]'
                /> 
                <View className='mt-8'>
                    <Text className='text-[20px]'>Plant name</Text>
                    <Text className='text-[16px]'>150DA</Text>
                </View>
             </View>
             <View className='flex-row gap-2'>
                <Text>add</Text>
                <Text>0</Text>
                <Text>minus</Text>
             </View>
        </View>

        <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4'>
            <View className='flex-row'>
                <Image
                source={require('../../assets/images/app/model.png')}
                className='w-[110px] h-[150px]'
                /> 
                <View className='mt-8'>
                    <Text className='text-[20px]'>Plant name</Text>
                    <Text className='text-[16px]'>150DA</Text>
                </View>
             </View>
             <View className='flex-row gap-2'>
                <Text>add</Text>
                <Text>0</Text>
                <Text>minus</Text>
             </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default cart

const styles = StyleSheet.create({})