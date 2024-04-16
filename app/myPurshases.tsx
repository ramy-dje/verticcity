import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axios'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const PurshasedItem = ({image,name,quantity,price,seller}:any)=>{
  console.log('plant name'+image)
  return(
    <View className='flex-row gap-3 justify-between border-b border-[#B2AFAF] mx-3 pb-2'>
        <View className='flex-row items-center gap-2'>
          <Image
          source={{uri:image}}
          className='w-[80px] h-[100px]'
          />
          <View>
              <Text className='text-[20px] mb-2'>{name}</Text>
              <Text className='mb-1'>{seller}</Text>
              <Text>{quantity} pieces</Text>
          </View>
        </View>
        <View className='flex-col py-4 justify-center'>
          <Text className=' text-[20px] text-[#009245] rounded-lg p-1'>{price} DA</Text>
        </View>
    </View>
  )
}

const myPurshases = (props: Props) => {
  const [purshases, setpurshases] = useState([])
  async function getPurshases() {
    const {data} = await axiosInstance.get('purchase')
    setpurshases(data.purchases)
    console.log(data.purchases.purchases)
  }
  useEffect(()=>{
    getPurshases();
  },[])
  const navigation : any = useNavigation();
  return (
    <View className='w-full h-full bg-white relative'>
      <Image className='w-[250px] h-[390px] absolute top-0 z-0 right-0' source={require('../assets/images/app/myPurshases.png')}/>
      <TouchableOpacity onPress={()=>navigation.openDrawer()} className='top-12 left-3'>
        <Ionicons name="menu-sharp" size={24} color="#009245" />
      </TouchableOpacity>
      <Text className='text-[40px] ml-[25px] mt-20 mb-6 z-20 '>myPurshases</Text>
      <ScrollView className=''>
        {
          purshases && purshases.map((purchase:any)=>(
            <View>
              <Text className='text-[#B2AFAF] text-[15px] ml-4 mt-4 text-center'>{moment(purchase.date).format('YYYY-MM-DD')}</Text>
              {
                purchase.purchases.map((e:any,i:number)=>(
                   <PurshasedItem key={i} seller={e.sellerId.firstName+' '+e.sellerId.lastName} image={e.plantId.image.url} name={e.plantId.name} quantity={e.quantity} price={e.price}/>    
                ))
              }
              
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default myPurshases

const styles = StyleSheet.create({})