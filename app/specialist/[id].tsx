import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axiosInstance from '@/utils/axios'
import CustomButton from '@/components/Button'

type Props = {}

const Details = (props: Props) => {
  const {id} = useLocalSearchParams();
  const [specialist, setspecialist] = useState<any>({});
  async function getSpecialist() {
    const {data} = await axiosInstance.get(`/specialiste/${id}`);
    setspecialist(data.specialiste)
    console.log(data)
  }
  async function addContact() {
    const idSpecialist = specialist.user._id;
    const {data} = await axiosInstance.put('add_user_contact',{idSpecialist})
    console.log(id)
  }
  useEffect(()=>{
    getSpecialist();
  },[])
  return (
    <ScrollView className='px-3 bg-white'>
      <View className='flex-row gap-2 mt-4'>
        <Image  source={{uri:specialist && specialist.user?.avatar.url}} className='rounded-lg bg-slate-700 w-[150px] h-[150px]'/>
        <View className='pt-6'>
            <Text className='text-[20px]'>{specialist && specialist.user?.firstName+' '+specialist.user?.lastName}</Text>
            <Text className='text-[#B2AFAF]'>{specialist && specialist.specialite}</Text>
        </View>
      </View>
      <Text className='text-[20px] mt-5 mb-1'>Description</Text>
      <Text>
      {specialist && specialist.description}
      </Text>
      <Text className='text-[20px] mt-5 mb-1'>studies</Text>
      <Text>{specialist && specialist.studies}</Text>
      <Text className='text-[20px] mt-5 mb-1'>profestional experience</Text>
      <Text>{specialist && specialist.profestionalExp}</Text>
      <Text className='text-[20px] mt-5 mb-1'>projects</Text>
      <View className='pl-2 w-full pb-8'>
        <View className='flex-row justify-between w-full'>
          <Text className='text-[18px]'>project 1</Text>
          <View className='flex-row gap-12'>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </View>
        </View>
        <Text className='text-[18px] mt-2'>project name</Text>
        <Text>project name</Text>
        <Text className='text-[18px] mt-2'>project description</Text>
        <Text>project description</Text>
        <Text className='text-[18px] mt-2'>images</Text>
        <View className='w-full h-[200px] bg-slate-600'></View>
        <ScrollView horizontal className='mt-3 '>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
          <View className='w-[100px] h-[100px] bg-slate-500 mr-3'></View>
        </ScrollView>
        <Text className='text-[18px] mt-2'>project duration</Text>
        <Text>project duration</Text>
        <Text className='text-[18px] mt-2'>project position</Text>
        <Text>project position</Text>
        <View className='w-screen mt-8'>
          <CustomButton text='add contact' handleClick={()=>{addContact()}}/>
        </View>
        
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})