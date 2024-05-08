import { Image, StyleSheet, Text, View ,SafeAreaView ,KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react';
import CustomeTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'
import { Link } from 'expo-router'
import {router} from 'expo-router'
import axiosInstance from '@/utils/axios';
import axios from 'axios';
import { saveInStore } from '@/utils/secureStore';

type IUser = {
  firstName : string,
  lastName : string,
  age : number ,
  email : string,
  password : string,
  location : string
}

const Signup = () => {
  const [user,setuser] = useState<IUser>({
    firstName : '',
    lastName : '',
    age : 16 ,
    email : '',
    password : '',
    location : ''

  })
  const [errorMessage, seterrorMessage] = useState('');
  
  async function signup(){
    
    const {data} = await axios.post('https://server-2wfe.onrender.com/signup',{user})
      if(data){
        const {token} = data ;
        console.log(token);
        console.log('token')
        saveInStore('jwt',token)
        router.push("/confirme")
      }

      
      
    

  }
  return (
    <ScrollView className=' bg-white pt-12'>
      <View className='relative h-screen flex'>
        <Image
          source={require('../../assets/images/app/signup.png')}
          className='w-[390px] h-[250px] absolute left-0 bottom-0 '
        />
        <Text className='text-[40px] ml-[42px] mt-12 mb-6'>Sign up</Text>
        <KeyboardAvoidingView className='flex flex-col items-center '>
          <CustomeTextInput 
            handleChange={(text)=>setuser({...user,firstName :text})} 
            label='first name' 
            placeholder='what is your first name ?' 
            value={user.firstName}
          />
          <CustomeTextInput 
          handleChange={(text)=>setuser({...user,lastName :text})}
          label='last name' 
          placeholder='what is your last name ?' 
          value={user.lastName}
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setuser({...user,age :e})} 
          label='age' 
          placeholder='how old are you ?' 
          value={user.age}
          isNumber
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setuser({...user,email :e})}
          label='email' 
          placeholder='what is your email address ?' 
          value={user.email}
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setuser({...user,password :e})}
          label='password' 
          placeholder='what is your password ?' 
          value={user.password} 
          isPassword={true}
          />
          <CustomButton
          text='Signup'
          handleClick={signup}  
          />
          <Text className='mt-3'>you already have an account ? <Link href='/login' className='text-[#009245]  '>login</Link></Text>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({})