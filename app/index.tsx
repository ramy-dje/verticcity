import { View, Text , SafeAreaView, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Plants from './shop/plants'
import Cart from './cart'
import SearchSpeacilits from './specialist/search'
import { Redirect, router } from 'expo-router'
import * as expoSecureStore from 'expo-secure-store'
import {jwtDecode, JwtPayload} from 'jwt-decode';

const {decode} = require('base-64');


const index = () => {
  const [token, settoken] = useState('');
  
  function isTokenValid(token: string): boolean {
    if (!token) {
      return false; // Token is not provided or is empty
    }
  
    try {
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        return false; // Token format is invalid
      }
  
      const payload: JwtPayload = JSON.parse(decode(tokenParts[1]));
      const expirationTime = payload.exp! * 1000; // Convert expiration time to milliseconds
  
      return Date.now() < expirationTime; // Check if current time is before token expiration
    } catch (error) {
      console.error('Error decoding token:', error);
      return false; // Error decoding token
    }
  }

  async function getToken(){
    const Token : string | any = await expoSecureStore.getItemAsync('refreshToken');
    console.log(Token)
    settoken(Token) 
    router.push(isTokenValid(Token) ? '/shop/plants':'/(auth)/login')
  }
  useEffect(()=>{
    getToken()
    
  },[])
  return (
         <Redirect href={token ?'/shop/plants':'/(auth)/login'}/> 
  )
}

export default index