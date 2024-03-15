import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/Button'

type Props = {}

const MyAccount = (props: Props) => {
  return (
    <ScrollView>
        <Text className='text-[40px] ml-[25px] mt-16 mb-6'>MyAccount</Text>
        <View className='w-full flex-row justify-center mb-4'>
                <View className='h-[145px] w-[145px] bg-[#D9D9D9] rounded flex-row justify-center items-center'>
                    <Text>change image</Text>
                </View>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>First name</Text>
            </View>
            <TextInput multiline placeholder='what is your first name' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>Last name</Text>
            </View>
            <TextInput multiline placeholder='what is your last name' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>birthday</Text>
            </View>
            <TextInput multiline placeholder='what is your birthday' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>phone numbre</Text>
            </View>
            <TextInput multiline placeholder='what is your phone numbre' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>email</Text>
            </View>
            <TextInput multiline placeholder='what is your email' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>Password</Text>
            </View>
            <TextInput multiline placeholder='what is your password' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full flex-row justify-center mb-8'>
            <CustomButton handleClick={()=>{}} text='update account'/>
        </View>
    </ScrollView>
  )
}

export default MyAccount

const styles = StyleSheet.create({})