import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomeTextInput from '@/components/TextInput'

const messages = () => {
    const messages = [
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'notme',
            reciever : 'me',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'notme',
            reciever : 'me',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'notme',
            reciever : 'me',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
        {
            sender : 'me',
            reciever : 'notme',
            message : 'some message here'
        },
    ]
  return (
    
    <ScrollView className='w-full bg-white'>
        
        <View className='pl-[20px] pt-16 pb-6 flex-row items-center gap-1'>
            <View className='w-[56px] h-[62px] bg-slate-500 rounded-md'></View>
            <Text className='text-[20px]'>name</Text>
        </View>
        
        <ScrollView className='px-4 h-[465px] mb-3'>
            <View className='flex items-center text-[#B2AFAF] relative '>
                <Text className='z-40 bg-white px-2'>16:55</Text>
                <View className='h-[1px] w-full bg-[#B2AFAF] absolute top-2'></View>
            </View>
            {
                messages.map((msg,i)=>(
                    <View className={`w-full pb-2 flex-row ${msg.sender  == 'me' ? 'justify-end':'justify-start'}`}>
                        <Text key={i} className='text-[15px] p-1 bg-[#009245] my-1 text-white rounded-lg rounded-br-none w-3/5'>{msg.message}</Text>
                    </View>
                ))
            }
        </ScrollView>
       
        <View className='h-[65px] bg-[#009245] w-full rounded-t-lg p-2 flex-row justify-between items-center  '>
            <TextInput placeholder='enter your message here' className='rounded-md w-10/12 h-full my-2 bg-white'/>
            <Text>send</Text>
        </View>
        
        
    </ScrollView>
  )
}

export default messages

const styles = StyleSheet.create({})