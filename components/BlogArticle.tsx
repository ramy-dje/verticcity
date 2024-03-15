import { Image, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons'

type BlogArticleType = {
    id? : any,
    title : string,
    spicialisteName : string,
    spicialisteImage? : string,
    passedTime? : string,
}

const BlogArticle = ({id,title,spicialisteName,spicialisteImage,passedTime}:BlogArticleType) =>
{
  return (
    <TouchableOpacity className='w-screen px-2 mb-8' onPress={()=> router.push('/blog/1')}>
      <View className='flex justify-between flex-row '>
            <View className='w-8/12 relative'>
                <Text className='font-bold text-[20px] mr-1'>{title}</Text>
                <View className='flex-row items-center gap-5 absolute bottom-0 right-1'>
                  <Octicons name="comment" size={24} color="black" />
                  <FontAwesome5 name="heart" size={24} color="black" />
                </View>
            </View>
            <View className='h-full w-4/12 h-[110px]  bg-slate-600 rounded-sm'></View>
      </View>
      <View className='flex-row justify-between items-center mx-1 pb-2 border-b border-[#B2AFAF]'>
        <View className='flex-row items-center gap-1'>
            <View className='w-[21px] h-[21px]  bg-slate-600 rounded-full '></View>
            <Text className='text-[12px]'>{spicialisteName}</Text>
        </View>
        
        <Text className='text-[#B2AFAF] text-[12px]'>6h</Text>
      </View>
     

    </TouchableOpacity>
  )
}

export default BlogArticle

const styles = StyleSheet.create({})