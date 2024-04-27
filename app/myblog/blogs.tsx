import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axios'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const myblogs = (props: Props) => {
  const [articles, setArticles] = useState<any>([])
  async function getArticles(){
    const {data} = await axiosInstance.get('/articleByWriter');
    setArticles(data.articles);
    console.log(data.articles);
  }
  useEffect(()=>{
    getArticles()
  },[]);
  return (
    <View className='w-full h-full bg-white'>
      <Text className='text-[40px] ml-[25px] mt-6 mb-6'>My blogs</Text>
      <FlatList
      className='p-3 h-[450px]' 
      data={articles}
      renderItem={({item}:any)=>(

          <TouchableOpacity onPress={()=>router.push({pathname:'/myblog/editBlog',params:{id:item._id}})} className='flex gap-3 flex-row border-b border-[#B2AFAF] pb-2 mb-4 w-full'>
            <Image source={{uri:item.image.url}}  className='h-[80px] w-[60px] rounded-lg bg-gray-500 '/>
            <View>
              <Text className='text-[20px]'>{item.title}</Text>
            </View>
          </TouchableOpacity>
      )}
      />
       <TouchableOpacity onPress={()=>router.push('/myblog/createBlog')} className='flex-row justify-center mt-4 '>
        <Ionicons name="add-circle-outline" size={40} color="#009245" />
      </TouchableOpacity>
      
    </View>
  )
}

export default myblogs

const styles = StyleSheet.create({})