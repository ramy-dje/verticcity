import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';
import * as expoSecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
  
  function CustomDrawerContent(props:any) {
    const [name, setname] = useState('')
    const [image, setimage] = useState('')
    async function getUser(){
      const userInJson : any = await expoSecureStore.getItemAsync('user');
      !userInJson && router.push('/(auth)/login')
      const parsedUser = JSON.parse(userInJson);
      setname(parsedUser.firstName+" "+parsedUser.lastName)
      setimage(parsedUser.avatar.url)
    }
    async function logout() {
      console.log('logged out')
      await expoSecureStore.deleteItemAsync('user');
      await expoSecureStore.deleteItemAsync('refreshToken');
      await expoSecureStore.deleteItemAsync('accessToken');
      router.push('/(auth)/login')
      
    }
    useEffect(()=>{
      getUser();
    },[])
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{backgroundColor:'white'}}>
          <View className='flex-col justify-between h-screen pb-12 pt-3'>
            <View >
              <View className='flex-row items-center gap-2 mx-2  border-b border-[#B2AFAF] pb-2 mb-2 '>
                {image &&<Image source={{uri:image}} className='w-[58px] h-[65px] bg-slate-800 rounded-md'/>}
                <Text className='text-[24px]'>{name && name}</Text>
              </View>
              <DrawerItemList {...props} />
            </View> 
            <DrawerItem icon={({color,size})=><MaterialIcons name="logout" size={size} color={color} />} labelStyle={{color:'black'}} label='logout' onPress={logout} />
          </View> 
        </DrawerContentScrollView>
    );
  }
export default CustomDrawerContent;