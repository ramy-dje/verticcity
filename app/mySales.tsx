import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import axiosInstance from '@/utils/axios'
import { useNavigation } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'
import moment from 'moment'
import { AntDesign } from '@expo/vector-icons'

type Props = {}

const mySales = (props: Props) => {
  const [sales, setsales] = useState<any>([])
  async function confirmeSale(purchaseId:any,orderPosition:number) {
    const {data} = await axiosInstance.put('confirmPurchase',{purchaseId,orderPosition})
    console.log(data)
    getsales();
 
  }
  async function refuseSale(purchaseId:any,orderId:any) {
    const {data} = await axiosInstance.put('purchase_delete',{purchaseId,orderId})
    console.log(data)
    getsales();
  
  }
  async function getsales() {
    const {data} = await axiosInstance.get('purchase_seller')
    setsales(data.sales)
  }
  useEffect(()=>{
    getsales();
  },[])
  const navigation : any = useNavigation();
  const [refreshing, setrefreshing] = useState(false);
  function handleRefresh(){
    setrefreshing(true);
    getsales();
    setrefreshing(false);
  }
  return (
    <View className='bg-white pb-36'>
      <Text className='text-[40px] ml-[25px] mt-6 mb-6'>mySales</Text>
      
      <FlatList 
          data={sales}
          renderItem={({item}:any)=>(

            <View>
            <Text className='text-[#B2AFAF] text-[15px] ml-4 mt-4 text-center'>{moment(item.date).format('YYYY-MM-DD')}</Text>
            {
              item.purchases.map((e:any,i:number)=>(
                <SaleCard key={i} refuseSale={refuseSale} orderId={e._id} confirmeSale={confirmeSale} purchaseId={item._id} orderPosition={i} confirmed={e.confirmed} client={item.clientId.firstName+' '+item.clientId.lastName} image={e.plantId.image.url} name={e.plantId.name} quantity={e.quantity} price={e.price}/>    
              ))
            }
        </View>
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        />
        
          
         
        
    </View>
  )
}

export default mySales

function SaleCard({image,name,quantity,price,client,confirmed,confirmeSale,purchaseId,orderPosition,orderId,refuseSale}:any) {
  return (
    <View className='flex-row gap-3 justify-between border-b border-[#B2AFAF] mx-3 pb-2'>
        <View className='flex-row items-center gap-2'>
          <Image
          source={{uri:image}}
          className='w-[80px] h-[100px]'
          />
          <View>
              <Text className='text-[20px] mb-2'>{name}</Text>
              <Text className='mb-1'>{client}</Text>
              <Text>{quantity} pieces</Text>
          </View>
        </View>
        <View className='flex-col py-1 justify-between items-end '>
          {!confirmed && <View className='flex-row gap-4 p-1'>
           <TouchableOpacity onPress={()=>confirmeSale(purchaseId,orderPosition)}><AntDesign name="checkcircleo" size={24} color="green" /></TouchableOpacity>
            <TouchableOpacity  onPress={()=>refuseSale(purchaseId,orderId)} ><AntDesign name="closecircleo" size={24} color="red" /></TouchableOpacity>
          </View>}
          <Text className=' text-[20px] text-[#009245] rounded-lg p-1'>{price} DA</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({})