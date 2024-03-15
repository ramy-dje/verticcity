import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomeTextInput from '@/components/TextInput'
import CustomButton from '@/components/Button'

type Props = {}

const makeComplaint = (props: Props) => {
  return (
    <View className='h-screen w-full relative'>
        <Text className='text-[40px] ml-[25px] mt-16 mb-6'>make complaint</Text>
        <View className='flex-col items-center'>
            <CustomeTextInput label='title' handleChange={()=>{}} placeholder='entre the title of the problem' value={'sd'} />
            <CustomeTextInput label='desciprtion' handleChange={()=>{}} placeholder='entre the description' value={'sd'} />
            <CustomeTextInput label='position'  handleChange={()=>{}} placeholder='entre the position of the problem' value={'fh'} />
            <View className='h-16'></View>
            <CustomButton text='send problem' handleClick={()=>{}}/>
            
        </View>  
        <Image
          source={require('../../assets/images/app/problem.png')}
          className='w-[370px] h-[180px] absolute left-0 bottom-16 rotate-[-25deg] z-0'
        />
    </View>
  )
}

export default makeComplaint

const styles = StyleSheet.create({})