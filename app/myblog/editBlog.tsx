import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View,KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '@/components/Button';
import axiosInstance from '@/utils/axios';
import * as expoSecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import { useLocalSearchParams } from 'expo-router';

type Props = {}


const editBlogArticle = (props: Props) => {
  const {id} = useLocalSearchParams();
  const [image, setImage] = useState<any>();
  const [isUpdatedImage, setIsUpdatedImage] = useState<any>(false)
  const [title, settitle] = useState<string>('');
  const [content, setcontent] = useState<string>('');
  const [buttonText, setbuttonText] = useState('edit')

  async function getArticle(id:any){
    const {data} = await axiosInstance.get(`article/${id}`)
    console.log(data);
    setImage(data.article.image.url);
    settitle(data.article.title);
    setcontent(data.article.content)
  }

  async function editArticle(){
    setbuttonText('editing')
      const {data} = await axiosInstance.put(`article/${id}`,{image:isUpdatedImage?image:null,content,title},{headers:{'Content-Type':'application/json'}});
      if(data.success){
        setbuttonText('edited')
      }
      console.log(data)
      const {accessToken} = data ;
      const {refreshToken} = data ;
      await expoSecureStore.setItemAsync('refreshToken', refreshToken);
      await expoSecureStore.setItemAsync('accessToken',accessToken); 
      
  }

   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result : any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    const convertImageToBase64 = async (uri : any) => {
      const response = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      setIsUpdatedImage(true);
      setImage(`data:image/jpeg;base64,${response}`);
    };
    

    if (!result.canceled) {
      convertImageToBase64(result.assets[0]?.uri);
    }
    
  };
  useEffect(()=>{
    getArticle(id);
  },[])
  return (
    <ScrollView className='bg-white' >
      <Text className='text-[40px] ml-[25px] mt-6 mb-6'>Edit Article</Text>
      
      <View className='w-full px-3'>
        <View className='flex-row gap-2 items-center'>
            <View className='w-4 h-4 bg-black rounded-full'></View>
            <Text className='text-[24px]'>Title</Text>
        </View>
        <TextInput multiline placeholder='what is the title of the article ?' value={title} onChangeText={(e:any)=>settitle(e)} className='ml-8 text-[18px]'/>
      </View>
      <View className='w-full px-3'>
        <View className='flex-row gap-2 items-center'>
            <View className='w-4 h-4 bg-black rounded-full'></View>
            <Text className='text-[24px]'>Image</Text>
        </View>
        <View onTouchEnd={pickImage} className='w-full h-[300px] bg-slate-500'>
        {image && <Image source={{ uri: image }} className='w-full h-full' />}  
        </View>
     
        
      </View>
      <KeyboardAvoidingView className='pb-16 '>
        <View className='px-3 min-h-[300px]'>
          <View className='flex-row gap-2 items-center'>
              <View className='w-4 h-4 bg-black rounded-full'></View>
              <Text className='text-[24px]'>Content</Text>
          </View>
          <TextInput multiline placeholder='what is the content of the article ?' value={content} onChangeText={(e:any)=>setcontent(e)} className='ml-8 text-[18px]'/>
        </View>
      </KeyboardAvoidingView>
      <View className='flex items-center mb-16'>
        <CustomButton text={buttonText} handleClick={editArticle}/>
      </View>
    </ScrollView>
  )
  
}

export default editBlogArticle

const styles = StyleSheet.create({})