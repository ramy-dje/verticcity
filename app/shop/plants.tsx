import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import PlantsRow from '@/components/plantsRow'
import Slider from '@/components/Slider'
import { router,  } from 'expo-router'
import axiosInstance from '@/utils/axios'
import Drawer from 'expo-router/drawer'
import { AntDesign } from '@expo/vector-icons';

type IPlant = {
  name : string,
  id : any,
  price : number,
  image:string
}
const Plant = ({id,name,price,image}:IPlant)=>{
  return(
    <TouchableOpacity className='relative h-[165px]  flex items-center m-3 w-[140px] ' onPress={()=> router.push(`/shop/${id}`)}>
      <Image
        source={{uri:image}}
        className='w-[110px] h-[110px]  '
      />
      <Text className='text-[18px] absolute left-0 bottom-6'>{name}</Text>
      <Text className='text-[#009245] text-[16px] absolute right-0 bottom-0'>{price}DA</Text>
    </TouchableOpacity>
  )
}

const Plants = () => {
  const [plants, setPlants] = useState<any>(null);
  const [name, setname] = useState('')
  async function getPlants(){
    const {data} = await axiosInstance.get('/plants');

    setPlants(data.plants);
  }
  async function getPlantsByName(name:string){
    const {data} = await axiosInstance.get(`/plantByName/${name}`);
    setPlants(data.plants);
    console.log(data.plants);
  }
  useEffect(()=>{
    getPlants()
  },[]);
  return (
    <ScrollView className='bg-white px-3'>
      
      <View className='mt-16'>
        <TextInput onChangeText={(e)=>setname(e)} className='border-2 border-[#009245] text-[16px] p-2 rounded-full relative'/>
        <TouchableOpacity onPress={()=>getPlantsByName(name)} className='bg-[#009245] w-[40px] h-[40px] rounded-full absolute right-1 top-1 flex items-center justify-center'>
          <AntDesign name="search1" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <Text className='text-[24px] mt-5'>New plants</Text>
      <View className='flex-row flex-wrap   pb-16 justify-center w-full'>
        {
          plants && plants.map((e:any,i:number)=>(
          <Plant image={e.image.url} id={e._id}  name={e.name} price={e.price} key={i}/>
          ))
        }

      </View>






     
    </ScrollView>
  )
}

export default Plants

const styles = StyleSheet.create({})