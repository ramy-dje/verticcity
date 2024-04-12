import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Comment from '@/components/Comment'
type Props = {}

const OrganisationDetails = (props: Props) => {
  return (
    <ScrollView className='px-3'>
      <View className='w-full flex-col items-center mt-16'>
        <View className='w-[100px] h-[100px] bg-slate-600'></View>
        <Text className='text-[28px]'>organisme name</Text>
        <Text className='text-[#B2AFAF]'>position</Text>
      </View>
      <View className='flex-row justify-between items-center mb-1 mt-6'>
        <Text className='text-[24px]'>admins</Text>
        <Text>icon</Text>
      </View>
      <View className='flex-row gap-1'>
        <View className='w-[30px] h-[30px] bg-slate-600 '></View>
        <View className='w-[30px] h-[30px] bg-slate-600 '></View>
        <View className='w-[30px] h-[30px] bg-slate-600 '></View>
        <View className='w-[30px] h-[30px] bg-slate-600 '></View>
      </View>
      <View className='flex-row justify-between items-center mb-1 mt-4'>
        <Text className='text-[24px]'>projects</Text>
        <Text>icon</Text>
      </View>
     <View className='pl-2 pt-1'>
        <View className=' flex-row justify-between pb-2'>
            <View className='flex-row gap-2 items-center'>
                <View className='rounded-lg w-[70px] h-[70px] bg-slate-500'></View>
                <Text className='text-[20px]'>project name</Text>
            </View>
            <View className='flex-row gap-2 items-center'>
                <Text>1.5k</Text>
                <Text>icon</Text>
            </View>
        </View>
        <Text>
        here is some description about the project to hive 
        some informations about it here is some description
        about the project to hive some informations about it
        </Text>
        <Text className='text-[20px] mb-1 mt-4'>Reviews</Text>
        <Comment />
        <Comment />
        <Comment />
     </View>
    </ScrollView>
  )
}

export default OrganisationDetails

const styles = StyleSheet.create({})