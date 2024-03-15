import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

type Props = {}

const createBlogArticle = (props: Props) => {
    const [image, setImage] = useState<any>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]?.uri);
    }
  };
  return (
    <ScrollView>
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Publish Article</Text>
      <View className='w-full px-3'>
        <View className='flex-row gap-2 items-center'>
            <View className='w-4 h-4 bg-black rounded-full'></View>
            <Text className='text-[24px]'>Title</Text>
        </View>
        <TextInput multiline placeholder='what is the title of the article ?' className='ml-8 text-[18px]'/>
      </View>
      <View className='w-full px-3'>
        <View className='flex-row gap-2 items-center'>
            <View className='w-4 h-4 bg-black rounded-full'></View>
            <Text className='text-[24px]'>Image</Text>
        </View>
        <View onTouchEnd={pickImage} className='w-full h-[350px] bg-red-500'>
        {image && <Image source={{ uri: image }} className='w-full h-full' />}  
        </View>
     
        
      </View>
      <View className='w-full px-3'>
        <View className='flex-row gap-2 items-center'>
            <View className='w-4 h-4 bg-black rounded-full'></View>
            <Text className='text-[24px]'>Content</Text>
        </View>
        <TextInput multiline placeholder='what is the content of the article ?' className='ml-8 text-[18px]'/>
      </View>
  
    </ScrollView>
  )
}

export default createBlogArticle

const styles = StyleSheet.create({})