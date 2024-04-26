import { View, Text , SafeAreaView, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Plants from './shop/plants'
import Cart from './cart'
import SearchSpeacilits from './specialist/search'
import { Redirect, router } from 'expo-router'
import * as expoSecureStore from 'expo-secure-store'

const index = () => {
  const [user, setuser] = useState('')
  async function getUser(){
    const userInJson : any = await expoSecureStore.getItemAsync('user');
    setuser(userInJson) 
    router.push(userInJson ? '/shop/plants':'/(auth)/login')
  }
  useEffect(()=>{
    getUser()
    
  },[user])
  return (
         <Redirect href={user ?'/shop/plants':'/(auth)/login'}/> 
  )
}

export default index