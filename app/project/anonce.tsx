import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/Button'

type DataFieldType = {
    fieldName : string ,
    placeholder : string
}
type ProjectAnonceType = {

}

const DataField = ({fieldName,placeholder}:DataFieldType)=>{
    return(
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>{fieldName}</Text>
            </View>
            <TextInput multiline placeholder={placeholder} className='ml-8 mt-2 text-[18px]'/>
        </View>
    )
}
const AnonceProject = () => {
  return (
    <ScrollView className='relative'> 
        <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Anonce project </Text>
        <View className='flex-col items-center px-3 mb-16'>
            <DataField fieldName='project name' placeholder='what is the project name ?'/>
            <DataField fieldName='project type' placeholder='is the project paid or volenteer ?'/>
            <DataField fieldName='project price' placeholder='what is the project price ?'/>
            <DataField fieldName='date of begining' placeholder='when will the project begin ?'/>
            <DataField fieldName='estimated duration' placeholder='how long you thing the project will take ?'/>
            <DataField fieldName='description' placeholder='what are the details of the project ?'/>
            <View className='h-16'></View>
            <CustomButton handleClick={()=>{}} text='publish project'/>
        </View>
        <Image
            source={require('../../assets/images/app/projectAnonce.png')}
            className='w-[220px] h-[280px] absolute bottom-0 right-0'
        />
    </ScrollView>
  )
}

export default AnonceProject

const styles = StyleSheet.create({})