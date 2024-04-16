import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState , useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import axiosInstance from '@/utils/axios';
import * as expoSecureStore from 'expo-secure-store'
import Drawer from 'expo-router/drawer';

const BlogComment = ({firstName,lastName,comment,image,commentId,id}:any)=>{
  async function likeArticleComment(){
    const {data} = await axiosInstance.put(`like_comment/${id}`,{commentId})
    console.log(data)
  }
  return (
    <View className='w-full border-b border-[#B2AFAF] mb-4 pb-2'>
      <View className='flex-row justify-between '>
        <View className='flex-row gap-1'>
          {//<Image source={{uri:image}} className='w-[21px] h-[21px] bg-slate-600 rounded-full'/>
          }<Text className='text-[14px] font-semibold'>{firstName} {lastName}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" onPress={likeArticleComment}/>
        
      </View>
      <Text className='text-[16px]'>
        {comment}
        
      </Text>
    </View>
  )
}

const AddBlogComment = ({setisCommenting,id}:any)=>{
  const [comment, setcomment] = useState<string>('')
  const [user, setuser] = useState<any>({})
  async function getUser(){
    const userInJson : any = await expoSecureStore.getItemAsync('user');
    setuser(JSON.parse(userInJson));
    console.log(user)
  }
  useEffect(()=>{
    getUser()
  },[])
  async function sendComment() {
    const {data} = await axiosInstance.put(`comment_article/${id}`,{comment});
    setisCommenting(false);
  }
  return (
    <View className='w-full border-b border-[#B2AFAF] mb-4 pb-2'>
      <View className='flex-row justify-between '>
        <View className='flex-row gap-1'>
          <View className='w-[21px] h-[21px] bg-slate-600 rounded-full'></View>
          <Text className='text-[14px] font-semibold'>{user && user.firstName +" "+user?.lastName}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" />
        
      </View>
      <TextInput className='text-[16px] ' onChangeText={(e:any)=>setcomment(e )} multiline placeholder='add your comment here'/>
     <View className='flex-row justify-end w-full'>
        <TouchableOpacity className='h-[30px] w-[70px] rounded-[4px] bg-[#009245] flex justify-center items-center z-20' onPress={sendComment} >
          <Text className='text-[14px] text-white font-bold'>send</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

const blogDetails = () => {
  const [isCommenting, setisCommenting] = useState<boolean>(false);
  const [blog, setblog] = useState<any>(null);
  const {id} = useLocalSearchParams();
  const [isLiked, setisLiked] = useState(false);
  async function getBlog(id:any) {
    const {data} = await axiosInstance.get(`article/${id}`);
    setblog(data.article);
    console.log(data.article)
    
  }
  async function likeArticle(){
    setisLiked((e)=>!e)
    const {data} = await axiosInstance.put(`like_article/${id}`)
  }

  useEffect(()=>{
    getBlog(id);
  },[])
  return (
    <ScrollView className='bg-white max-h-fit w-screen '>
      <View className='relative'>
        <TouchableOpacity onPress={()=>router.back()} className='absolute z-20 top-12 left-2 bg-white p-1 rounded-full'>
          <AntDesign name="arrowleft" size={20} color="#009245" />
        </TouchableOpacity>
        <Image source={{uri :blog && blog.image?.url}} className='w-full h-[300px] z-1 '/>
        <View className='absolute text-white bottom-2 right-2 z-20'>
          {isLiked ? 
          <TouchableOpacity className='p-1 bg-black rounded-full' onPress={()=>{setisLiked((e)=>!e)}}><AntDesign className='' name="heart" size={24} color="white" /></TouchableOpacity>
          : 
          <TouchableOpacity className='p-1 bg-black rounded-full' onPress={likeArticle}><AntDesign className='' name="hearto" size={24} color="white" /></TouchableOpacity>
          }
        </View>
      </View>
      <KeyboardAvoidingView  className='p-2'>
        {<Text className='text-[30px] font-bold mb-2'>{blog &&  blog.title}</Text>}
        <Text className='text-[15px] mb-2'>
          {blog &&  blog.content} 
         </Text>
         <View className='flex-row items-center justify-between mb-2'>
           <View className='flex-row items-center gap-1'>
              {<Image source={{uri : blog && blog.creatorId.avatar.url}} className='w-[43px] h-[43px] bg-slate-600 rounded-full'/>
              }<Text>{blog && blog.creatorId.lastName +' '+ blog.creatorId.firstName }</Text>
           </View>
           <Text>6h</Text>
         </View>
         <View className='flex-row  items-center justify-between my-3'>
            <Text className='text-[24px] font-semibold'>reviews</Text>
            <TouchableOpacity onPress={()=>setisCommenting((e)=>!e)}>
            <Image
              source={require('../../assets/icons/addComment.png')}
              className='w-[23px] h-[23px]  mt-1 '
            />
            </TouchableOpacity>
         </View>
         <View >
          {
            isCommenting && (
              <View>
                 <AddBlogComment id={id} setisCommenting={()=>setisCommenting(false)}/> 
              </View>
            )
          }
          {
            blog && blog.comments.map((e:any,i:any)=><BlogComment key={i} id={id} commentId={e._id} image={''} firstName={e.userId.lastName} lastName={e.userId.lastName} comment={e.comment} />)
          }

         </View>


      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default blogDetails

const styles = StyleSheet.create({})