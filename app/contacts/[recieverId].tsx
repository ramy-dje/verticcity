import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomeTextInput from '@/components/TextInput'
import { useLocalSearchParams } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import axiosInstance from '@/utils/axios'
import { io } from "socket.io-client";

const Messages = () => {
    

    const {recieverId,firstName,lastName,avatar} : any = useLocalSearchParams();
    const [content, setcontent] = useState<string>("");
    const [messages, setmessages] = useState<any>([])
    async function sendMessage(receiverId : string, content:string) {
        setmessages((e:any)=>[...e,{receiverId,content}])
        const {data} = await axiosInstance.post('/message',{receiverId:recieverId,content});
        console.log(data)

    }
    async function getConversation() {
        const receiverId = recieverId;
        const {data} = await axiosInstance.get(`/conversation/${receiverId}`)
        setmessages(data.messages);
    }

    
    useEffect(()=>{
        
        getConversation(); 
        
    },[]);
  return (
    
    <ScrollView className='w-full bg-white'>
        
        <View className='pl-[20px] pt-6 pb-6 flex-row items-center gap-1'>
            <Image source={{uri:avatar}} className='w-[56px] h-[62px] rounded-md' />
            <Text className='text-[20px]'>{firstName + ' ' + lastName}</Text>
        </View>
        
        <ScrollView className='px-4 h-[465px] mb-3'>
            <View className='flex items-center text-[#B2AFAF] relative '>
                {<Text className='z-40  px-2'></Text>}
                <View className='h-[1px] w-full bg-[#B2AFAF] absolute top-2'></View>
            </View>
            {
                messages && messages.map((msg:any,i:number)=>(
                    <View key={i} className={`w-full pb-2 flex-row ${msg.receiverId  == recieverId ? 'justify-end':'justify-start'}`}>
                        <Text className={`text-[15px] p-1  my-1 text-white rounded-lg ${msg.receiverId  == recieverId? 'bg-[#009245] rounded-br-none':' border border-[#009245] text-[#009245] rounded-bl-none'} max-w-3/5`}>{msg.content}</Text>
                    </View>
                ))
            }
        </ScrollView>
       
        <View className='h-[65px] bg-[#009245] w-full rounded-t-lg p-2 flex-row justify-between items-center  '>
            <TextInput 
            placeholder='enter your message here' 
            onChangeText={(e)=>setcontent(e)}
            className='rounded-md w-10/12 h-full my-2 bg-white'/>
            <TouchableOpacity onPress={()=>sendMessage(recieverId,content)}>
                <Feather name="send" size={45} color="white" />
            </TouchableOpacity>
        </View>
        
        
    </ScrollView>
  )
}

export default Messages

const styles = StyleSheet.create({})