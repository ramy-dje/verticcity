import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '@/components/Button';

type Props = {}

const PlantEdit = (props: Props) => {
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
    <ScrollView >
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>PlantEdit</Text>
      <View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Primary image</Text>
                </View>
                <View onTouchEnd={pickImage} className='w-[140px] h-[140px] ml-8 mt-2 bg-red-500'>
                {image && <Image source={{ uri: image }} className='w-full h-full' />}  
                </View>
                
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Name</Text>
                </View>
                <TextInput multiline placeholder='what is name of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Price</Text>
                </View>
                <TextInput multiline placeholder='what is the price of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Description</Text>
                </View>
                <TextInput multiline placeholder='what is the price of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>images</Text>
                </View>
                <ScrollView horizontal className='flex-row gap-2 mt-2 h-[90px]'>
                    <View className='w-[80px] h-[80px] bg-red-500'></View>
                    <View className='w-[80px] h-[80px] bg-red-500'></View>
                    <View className='w-[80px] h-[80px] bg-red-500'></View>
                    <View className='w-[80px] h-[80px] flex-row items-center'>
                        <Text>add</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View className='w-full flex-row justify-center mb-11'>
            <CustomButton handleClick={()=>{}} text='Apply changes'/>
        </View>
     
    </ScrollView>
  )
}

export default PlantEdit

const styles = StyleSheet.create({})