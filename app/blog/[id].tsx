import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const BlogComment = ()=>{
  return (
    <View className='w-full border-b border-[#B2AFAF] mb-4 pb-2'>
      <View className='flex-row justify-between '>
        <View className='flex-row gap-1'>
          <View className='w-[21px] h-[21px] bg-slate-600 rounded-full'></View>
          <Text className='text-[14px] font-semibold'>user name</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" />
        
      </View>
      <Text className='text-[16px]'>
        some description about this beautiful lant some description about this beautiful lant
        
      </Text>
    </View>
  )
}

const blogDetails = () => {
  return (
    <ScrollView className='bg-white min-h-screen w-screen'>
      <View className='w-full h-[300px] bg-slate-500 relative'>
        <View className='absolute text-white bottom-2 right-2'>
          <AntDesign className='' name="hearto" size={24} color="white" />
        </View>
      </View>
      <View className='p-2'>
        <Text className='text-[30px] font-bold mb-2'>here is the title of the article created by the speacialiste</Text>
        <Text className='text-[15px] mb-2'>
          some description about this beautiful lant some description about this beautiful lant
          some description about this beautiful lant some description about this beautiful lant
          some description about this beautiful lant  some description about this beautiful lant
          some description about this beautiful lant some description about this beautiful lant
          some description about this beautiful lant 
         </Text>
         <View className='flex-row items-center justify-between mb-2'>
           <View className='flex-row items-center gap-1'>
              <View className='w-[43px] h-[43px] bg-slate-600 rounded-full'></View>
              <Text>speacialiste name</Text>
           </View>
           <Text>6h</Text>
         </View>
         <View className='flex-row  items-center justify-between my-3'>
            <Text className='text-[24px] font-semibold'>reviews</Text>
            <Image
              source={require('../../assets/icons/addComment.png')}
              className='w-[23px] h-[23px]  mt-1 '
            />
         </View>
         <View >
          <BlogComment />
          <BlogComment />
          <BlogComment />

         </View>


      </View>
    </ScrollView>
  )
}

export default blogDetails

const styles = StyleSheet.create({})