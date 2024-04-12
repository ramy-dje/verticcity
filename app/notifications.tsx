import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axios'
import moment from 'moment'

const Notifications = () => {
    const [notifications, setnotifications] = useState<any>([])
    async function getNotification() {
        const {data} = await axiosInstance.get('notifications');
        setnotifications(data.notifications)
    }
    useEffect(()=>{
        getNotification()
    },[])
  return (
    <View className='bg-white h-screen pb-16'>
        <Text className='text-[40px] pl-[25px] pt-6 mb-6  '>Notifications</Text>
        <ScrollView className='px-2 '>
           {
            notifications && notifications.map((e:any,i:number)=>(
                <View key={i} className='mb-4'>
                     {/*<View className='flex items-center text-[#B2AFAF] '>
                        <Text className='z-40 bg-white px-2 text-[#B2AFAF]'>16:55</Text>
            </View>*/}
                    <View className='border-b border-[#B2AFAF] mt-2'>
                        <Text className='text-[16px]'>{e.content}</Text>
                        <View className='flex-row w-full justify-end'>
                            <Text className='text-[#B2AFAF] text-[11px]'>{moment(e.createdAt).fromNow()}</Text>
                        </View>
                    </View>
                </View>
            ))
           }
        </ScrollView>
        
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})