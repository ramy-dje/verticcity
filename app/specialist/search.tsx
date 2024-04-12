import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import { router } from 'expo-router'
import axiosInstance from '@/utils/axios'

type Props = {}
const SpecialisteCard = ({name,specialite,hourlyPrice,id,image}:any)=>{
    return(
        <TouchableOpacity onPress={()=>router.push(`/specialist/${id}`)} className='border w-[150px] h-[200px] rounded-lg mx-2 mb-5'>
            <Image source={{uri:image}} className='bg-slate-500 w-full h-1/2' />
            <View className='px-2 pt-1 flex-col justify-between h-1/2'>
                <View>
                    <Text className='text-[15px]'>{name}</Text>
                    <Text className='text-[15px] text-[#B2AFAF]'>{specialite}</Text>
                </View>
                <View className='flex-row justify-between pb-1'>
                    <Text className='text-[#009245]'>see more...</Text>
                    <Text className='text-[16px]'>{hourlyPrice}DA</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}
const SearchSpeacilits = () => {
  const [specialistList, setspecialistList] = useState([]);
  async function getSpecialist() {
    const {data} = await axiosInstance.get('/specialistes');
    setspecialistList(data.specialistes)
  }
  useEffect(()=>{
    getSpecialist();
  },[])
  return (
    <ScrollView className='bg-white'>
      <Text className='text-[40px] ml-[25px] mt-6 mb-6'>Specialistes</Text>
      <View>
        <TextInput className='border-2 border-[#009245] mx-3 text-[16px] p-2 rounded-full relative'/>
        <View className='bg-[#009245] w-[40px] h-[40px] rounded-full absolute right-4 top-1'></View>
      </View>
      <View className='px-3 py-8 flex-row justify-center flex-wrap'>
        {
          specialistList && specialistList.map((e:any,i:number)=><SpecialisteCard image={e.user.avatar?.url} id={e._id} name='amine dje' specialite='engeneer' hourlyPrice='2539' key={i}/>)
        }      
      </View>
    </ScrollView>
  )
}

export default SearchSpeacilits;

const styles = StyleSheet.create({})