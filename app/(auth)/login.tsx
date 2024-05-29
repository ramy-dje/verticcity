import { Image, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import axios from 'axios'
import * as expoSecureStore from 'expo-secure-store'

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  async function login(){
    setisLoading(true)
    const {data} =await axios.post('https://server-2wfe.onrender.com/login',{email,password});
    console.log(data)
    if(data.success){
      const {user} = data;
      const {accessToken} = data ;
      const {refreshToken} = data ;
      const userInJson =  JSON.stringify(user);
      await expoSecureStore.setItemAsync('refreshToken', refreshToken);
      await expoSecureStore.setItemAsync('accessToken',accessToken);
      await expoSecureStore.setItemAsync('user',userInJson);
      router.push("/shop/plants")
    }else{
      seterrorMessage(data.message)
    }
    setisLoading(false)
  } 
  return (
    <View className='relative bg-white h-full pt-4'>
      <Image
        source={require('../../assets/images/app/login.png')}
        className='w-[390px] h-[250px] absolute right-[-150px] rotate-[-17deg]'
      />
      <Text className='text-[40px] ml-[42px] mt-24 mb-6'>Login</Text>
      <View className='flex flex-col items-center '>
        <CustomTextInput 
        handleChange={(e:any)=>setEmail(e)} 
        label='email' 
        placeholder='what is your email address?' 
        value={email}
        />
        <CustomTextInput 
        handleChange={(e:any)=>setPassword(e)}
        label='password' 
        placeholder='what is your password ?' 
        value={password} 
        isPassword={true}
        />
        {isLoading?
        <ActivityIndicator className='' color={'#009245'}/>
        :
        <CustomButton
        text='Login'
        handleClick={login}  
        />}
        {errorMessage && <Text className='mt-3 text-red-700'>{errorMessage} </Text>}
      
        <Text className='mt-3'>you don't have an account ? <Link href='/Signup' className='text-[#009245]'>Sign up</Link></Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})