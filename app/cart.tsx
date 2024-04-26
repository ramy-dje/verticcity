import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View ,FlatList, VirtualizedList} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as expoSecureStore from 'expo-secure-store'
import CustomButton from '@/components/Button'
import { useNavigation } from 'expo-router'
import axiosInstance from '@/utils/axios'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

type ICartItem = {
  name : string,
  id : any,
  price : number,
  image : any,
  quantity : number,
  setcart : any
}
export const getCart = async (): Promise<any> => {
  try {
    const cartData = await expoSecureStore.getItemAsync('cartData');
    console.log(cartData)
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error getting cart:', error);
    return [];
  }
};
const saveCart = async (cart: any) => {
  try {
    const jsonValue = JSON.stringify(cart);
    await expoSecureStore.setItemAsync('cartData', jsonValue);
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};
const deleteFromCart = async (id:any,setcart:any) => {
  try {
    console.log('delete')
    const existingCart = await getCart();
    let updatedCart: any = existingCart.filter((item:any)=>item.id != id);
    setcart(existingCart.filter((item:any)=>item.id != id))
    await saveCart(updatedCart);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}
const CartItem = ({id,image,name,price,quantity,setcart}:ICartItem)=>{
  
  const updateQuantity = async (productId: number, newQuantity: number) => {
    try {
      const existingCart = await getCart();
      if (existingCart) {
        const updatedCart = existingCart.map((item:any) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setcart(updatedCart)
        console.log(updatedCart)
        await saveCart(updatedCart);
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };
  
  return(
    <View className='flex-row items-baseline border-b border-[#B2AFAF] mt-4 w-full pb-1 relative'>
      <TouchableOpacity onPress={()=>deleteFromCart(id,setcart)} className='absolute top-0 right-1'>
        <AntDesign name="delete" size={26} color="#009245" />
      </TouchableOpacity>
      <View className='flex-row '>
          <Image
          source={{uri:image && image}}
          className='w-[110px] h-[150px]'
          /> 
          <View className='mt-8 ml-3'>
              <Text className='text-[20px]'>{name}</Text>
              <Text className='text-[16px]'>{price} DA</Text>
          </View>
     </View>
      <View className='flex-row gap-3  absolute bottom-1 right-3'>
        <TouchableOpacity onPress={()=>updateQuantity(id,quantity+1)}>
          <MaterialIcons name="add" size={24} color="#009245" />
        </TouchableOpacity>
        <Text>{quantity} </Text>
        <TouchableOpacity onPress={()=>updateQuantity(id,quantity-1)}>
          <AntDesign name="minus" size={24} color="#009245" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Cart = () => {
  const [cart, setcart] = useState<any>([]);
  const [isConfirmed, setisConfirmed] = useState(false);
  const [refreshing, setrefreshing] = useState(false)
  const getCart = async (): Promise<any> => {
    try {
      const cartData : any = await expoSecureStore.getItemAsync('cartData');
      const parsedCart = JSON.parse(cartData);
      console.log(cartData)
      setcart(parsedCart)
    } catch (error) {
      console.error('Error getting cart:', error);
      return [];
    }
  };
  useEffect(()=>{
    getCart()
  },[])
  const navigation : any = useNavigation();
  
  const makePurshase = async ()=>{
    try{
      const purchases = cart.map((e:any)=>({
        plantId:e.id,
        quantity : e.quantity
      }))
      setisConfirmed(true);
      const {data} = await axiosInstance.post('/purchase',{purchases});
      console.log(data)
      if(data.success){
        await expoSecureStore.deleteItemAsync('cartData');
        setcart([]);
        
      }
    }catch(e:any){
      console.error('Error getting cart:', e);
    }
  }
  function handleRefresh(){
    setrefreshing(true);
    getCart();
    setrefreshing(false);
  }

  return (
    <View className='bg-white'>
      <TouchableOpacity className=' rounded-full ml-4 mt-12' onPress={()=>navigation.openDrawer()}>
        <Ionicons name="menu-sharp" size={24} color="#009245" />
      </TouchableOpacity>
      <Text className='text-[40px] ml-[25px] mt-8 mb-6'>Cart</Text>
      <Image
        source={require('../assets/images/app/cart.jpg')}
        className='w-[350px] h-[230px] absolute top-0 right-[-120px] rotate-[-116deg]'
      />
      <View  className='p-4 h-5/6'>
        {
          cart && <FlatList 
          data={cart}
          renderItem={({item})=>(
            <CartItem setcart={setcart} id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} />
          )}
          keyExtractor={(e)=>e.id}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          />
          /*cart && cart.map((e:any,i:number)=>(
            <CartItem setcart={setcart} id={e.id} image={e.image} name={e.name} price={e.price} quantity={e.quantity} key={i} />
          ))*/
        }
        <View className='w-full flex-col items-center pt-8'>
        <CustomButton handleClick={()=>makePurshase()} text={isConfirmed ? 'confirmed' : 'confirme purshase'} />
        <TouchableOpacity 
        className='h-[60px] w-[90%] rounded-[13px] mt-3 border-2 border-[#009245]  flex justify-center items-center z-20'
        onPress={()=>{}}
        >
          <Text className='text-[30px] text-[#009245] font-bold'>continue shopping</Text>
        </TouchableOpacity>
      </View>
        <View className='h-32 w-full '></View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})