import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Details = (props: Props) => {
  return (
    <ScrollView className='px-3'>
      <View className='flex-row gap-2 mt-16'>
        <View className='rounded-lg bg-slate-700 w-[150px] h-[150px]'></View>
        <View className='pt-6'>
            <Text className='text-[20px]'>speacialiste name</Text>
            <Text className='text-[#B2AFAF]'>specialite</Text>
        </View>
      </View>
      <Text className='text-[20px] mt-5 mb-1'>Description</Text>
      <Text>
        here the specialist can say something about  his personality or
        the services he can offer to the cllients here the specialist can say something
        about  his personality or the services he can offer to the cllients
      </Text>
      <Text className='text-[20px] mt-5 mb-1'>studies</Text>
      <Text>some deplomats</Text>
      <Text className='text-[20px] mt-5 mb-1'>profestional experience</Text>
      <Text>profestional specialist have</Text>
      <Text className='text-[20px] mt-5 mb-1'>projects</Text>
      <View className='pl-2 w-full pb-8'>
        <View className='flex-row justify-between w-full'>
          <Text className='text-[18px]'>project 1</Text>
          <View className='flex-row gap-12'>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </View>
        </View>
        <Text className='text-[18px] mt-2'>project name</Text>
        <Text>project name</Text>
        <Text className='text-[18px] mt-2'>project description</Text>
        <Text>project description</Text>
        <Text className='text-[18px] mt-2'>images</Text>
        <View className='w-full h-[200px] bg-slate-600'></View>
        <ScrollView horizontal className='mt-3 '>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
        </ScrollView>
        <Text className='text-[18px] mt-2'>project duration</Text>
        <Text>project duration</Text>
        <Text className='text-[18px] mt-2'>project position</Text>
        <Text>project position</Text>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})