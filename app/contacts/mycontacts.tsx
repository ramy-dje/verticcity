import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import axiosInstance from '@/utils/axios'


const mycontacts = () => {
  const [contacts, setcontacts] = useState([]);
  async function getContacts() {
    const {data} = await axiosInstance.get('getContacts')
    setcontacts(data);
    console.log(data)
  }
  useEffect(()=>{
    getContacts();
  },[]);
  return (
    <View className='bg-white relative h-screen'>
      <Image className='w-[310px] z-0 h-[310px] transform  absolute bottom-4 z-0 right-0' source={require('../../assets/images/app/contacts.png')}/>
      <Text className='text-[40px] ml-[25px] mt-8 mb-6'>My contacts</Text>
      <ScrollView className='px-2 z-20'>
        <TouchableOpacity onPress={()=>router.push('/contacts/sdsd')} className='flex-row justify-between items-baseline border-b border-[#B2AFAF] pb-2 mt-4'>
            <View className='gap-1 flex-row gap-1'>
                <View className='w-[56px] h-[62px] bg-slate-500 rounded-md'></View>
                <View>
                    <Text className='text-[20px]'>name</Text>
                    <Text className='text-[16px] text-[#B2AFAF]'>last message sent</Text>
                </View>
            </View>
            <Text className='text-[16px] text-[#B2AFAF]'>16:47</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  )
}

export default mycontacts

const styles = StyleSheet.create({})