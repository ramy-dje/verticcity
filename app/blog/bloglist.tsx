import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import axiosInstance from '@/utils/axios'
import { FontAwesome5, Octicons } from '@expo/vector-icons'
import { router } from 'expo-router'

type BlogArticleType = {
  id? : any,
  title : string,
  image : any ,
  spicialisteName : string,
  spicialisteImage? : string,
  passedTime? : string,
}

const BlogArticle = ({id,title,spicialisteName,spicialisteImage,passedTime,image}:BlogArticleType) =>
{
return (
  <TouchableOpacity className='w-screen px-2 mb-8' onPress={()=> router.push(`/blog/${id}`)}>
    <View className='flex justify-between flex-row '>
          <View className='w-8/12 relative'>
              <Text className='font-bold text-[20px] mr-1'>{title}</Text>
              <View className='flex-row items-center gap-5 absolute bottom-0 right-1'>
                <Octicons name="comment" size={24} color="black" />
                <FontAwesome5 name="heart" size={24} color="black" />
              </View>
          </View>
          <Image
            source={{ uri: image.url }} className='h-full w-4/12 h-[110px]  bg-slate-600 rounded-sm'/>
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

const Blog = () => {
  const [blogList, setblogList] = useState([]);

  async function getBlogs() {
    const {data} = await axiosInstance.get('articles')
    setblogList(data.articles)
  }

  useEffect(()=>{
    getBlogs();
  },[])
  
  return (
    <ScrollView className='bg-white'>
       <Text className='text-[40px] ml-[25px] mt-6 mb-6'> Articles </Text>
       <View>
          {
            blogList.map((e:any,i:number)=>(
              <BlogArticle key={i} image={e.image} id={e._id} title={e.title} spicialisteName={e.creatorId.lastName}/>
            ))
          }  
       </View>
    </ScrollView>
  )
}

export default Blog

const styles = StyleSheet.create({})