import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React , {useEffect,useState} from 'react'
import { router } from 'expo-router';
import axiosInstance from '@/utils/axios';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

type Props = {}

const MyStore = (props: Props) => {
  const [ismoved, setismoved] = React.useState(false);
  const [plants, setPlants] = useState<any>(null)
  async function getPlants(){
    const {data} = await axiosInstance.get('/plantBySeller');
    setPlants(data.plants);
    console.log(data)
  }
  useEffect(()=>{
    getPlants()
  },[]);
  
  const list = [1,1,1,1];
  const [refreshing, setrefreshing] = useState(false);
  function handleRefresh(){
    setrefreshing(true);
    getPlants();
    setrefreshing(false);
  }
  return (
    <View className='bg-white h-[100vh]'>
      <Text className='text-[40px] ml-[25px] pt-6  mb-6'>MyStore</Text>
        <View>
        <FlatList
        className='h-[450px]' 
          data={plants}
          renderItem={({item}:any)=>(
            <View  className='flex-row gap-3 justify-between items-center border-b border-[#B2AFAF] mx-3 pb-2'>
              <View className='flex-row items-center gap-2'>
                <Image
                source={{uri:item.image.url}}
                className='w-[80px] h-[100px]'
                />
                <View >
                    <Text className='text-[20px] pb-6'>{item.name}</Text>
                    <Text>{item.quantity} pieces</Text>
                </View>
              </View>
              <View className='flex-col items-end '>
                <TouchableOpacity  onPress={()=>router.push({pathname:'/store/editPlant',params:{id:item._id}})} >
                  <FontAwesome5 name="cog" size={28} color="#009245" />
                </TouchableOpacity>
                <Text className='text-[20px] text-[#009245] mt-4  '>{item.price} DA</Text>
              </View>
              {ismoved && <View className='h-full w-5 bg-[#009245] '></View>}
          </View>

          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          />
         <TouchableOpacity onPress={()=>router.push('/store/addPlant')} className='flex-row justify-center mt-4 '>
          <Ionicons name="add-circle-outline" size={40} color="#009245" />
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default MyStore

const styles = StyleSheet.create({})