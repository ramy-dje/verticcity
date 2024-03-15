import { Image, StyleSheet, Text, View ,SafeAreaView ,KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useState } from 'react'
import CustomeTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'


const Signup = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<number>(18);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <ScrollView >
      <View className='relative h-screen flex'>
        <Image
          source={require('../../assets/images/app/signup.png')}
          className='w-[390px] h-[250px] absolute left-0 bottom-0 '
        />
        <Text className='text-[40px] ml-[42px] mt-12 mb-6'>Signup</Text>
        <KeyboardAvoidingView className='flex flex-col items-center '>
          <CustomeTextInput 
            handleChange={(e:any)=>setFirstName(e.target.value)} 
            label='first name' 
            placeholder='what is your first name ?' 
            value={firstName}
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setLastName(e.target.value)} 
          label='last name' 
          placeholder='what is your last name ?' 
          value={lastName}
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setAge(e.target.value)} 
          label='age' 
          placeholder='how old are you ?' 
          value={age}
          isNumber
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setEmail(e.target.value)} 
          label='email' 
          placeholder='what is your email address ?' 
          value={email}
          />
          <CustomeTextInput 
          handleChange={(e:any)=>setPassword(e.target.value)}
          label='password' 
          placeholder='what is your password ?' 
          value={password} 
          isPassword={true}
          />
          <CustomButton
          text='Signup'
          handleClick={()=>console.log('21212')}  
          />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({})