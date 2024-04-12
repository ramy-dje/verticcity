import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomeTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'
import axios from 'axios'
import { getFromStore } from '@/utils/secureStore'
import * as expoSecureStore from 'expo-secure-store'

type Props = {}

const ConfirmeAccount = (props: Props) => {
    const [activationCode, setactivationCode] = useState<number>();
    async function confirme(){
      const jwt = await expoSecureStore.getItemAsync('jwt')
      const {data} = await axios.post('http://192.168.1.6:8000/active',{activationCode},{headers:{  'jwt':`Bearer ${jwt}`} as any })
      const {user} = data;
      const {accessToken} = data ;
      const {refreshToken} = data ;
      const userInJson =  JSON.stringify(user);
      await expoSecureStore.setItemAsync('refreshToken', refreshToken);
      await expoSecureStore.setItemAsync('accessToken',accessToken);
      await expoSecureStore.setItemAsync('user',userInJson);
      //await expoSecureStore.deleteItemAsync('jwt');
    }
    return (
    <View className='relative h-full bg-white'>
        <Text className='text-[40px] ml-[42px] mt-28 '>Confirmation</Text>
        <View className='flex-col items-center'>
            <Text className=' mb-1 mt-8 '>enter the code sent tou your email to activate your account</Text>
            <CustomeTextInput
            handleChange={(e:any)=>setactivationCode(e)}
            label=''
            placeholder='*******'
            value={activationCode}
            isNumber
            />
            <CustomButton
            text='confirme'
            handleClick={confirme}  
            />
        </View>
        <Image
          source={require('../../assets/images/app/signup.png')}
          className='w-[390px] h-[250px] absolute left-0 bottom-0 '
        />
    </View>
  )
}

export default ConfirmeAccount

const styles = StyleSheet.create({})