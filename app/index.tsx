import { View, Text , SafeAreaView, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Plants from './shop/plants'
import Cart from './cart'
import SearchSpeacilits from './specialist/search'
import { Redirect } from 'expo-router'
import * as expoSecureStore from 'expo-secure-store'

const index = () => {
  const [user, setuser] = useState('')
  async function getUser(){
    const userInJson : any = await expoSecureStore.getItemAsync('user');
    setuser(userInJson)
    
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    
    <View className='min-h-full w-full relative'>
      {
        user ? <Redirect href='/shop/plants'/> : <Redirect href='/(auth)/login'/>
      }

    </View>

  )
}

export default index