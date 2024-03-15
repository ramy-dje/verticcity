import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View className='relative'>
      <Image
        source={require('../../assets/images/app/login.png')}
        className='w-[390px] h-[250px] absolute right-[-150px] rotate-[-17deg]'
      />
      <Text className='text-[40px] ml-[42px] mt-24 mb-6'>Login</Text>
      <View className='flex flex-col items-center '>
        <CustomTextInput 
        handleChange={(e:any)=>setEmail(e.target.value)} 
        label='email' 
        placeholder='holder' 
        value={email}
        />
        <CustomTextInput 
        handleChange={(e:any)=>setPassword(e.target.value)}
        label='password' 
        placeholder='holder' 
        value={password} 
        isPassword={true}
        />
        <CustomButton
        text='Login'
        handleClick={()=>console.log('21212')}  
        />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})