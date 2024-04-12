import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const projectsList = (props: Props) => {
  return (
    <View className='h-screen'>
       <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Projects list </Text>
       <View className='flex-col gap-4 px-3 z-20'>
            <View className='border-b border-[#B2AFAF] pb-2'>
                <Text className='text-[20px] mb-2'>project name</Text>
                <Text className='text-[14px]'>
                    here is some description about the project to hive 
                    some informations about it here is some description
                    about the project to hive some informations about it    
                </Text>
            </View>
       </View>
       <Image
            source={require('../../assets/images/app/projectsList.png')}
            className='w-[450px] h-[380px] absolute left-0 bottom-[-50px] rotate-[10deg] z-0' 
        />
    </View>
  )
}

export default projectsList

const styles = StyleSheet.create({})