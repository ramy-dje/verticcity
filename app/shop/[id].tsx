import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Comment from '@/components/Comment'
import axiosInstance from '@/utils/axios';
import { useLocalSearchParams } from 'expo-router';
import * as expoSecureStore from 'expo-secure-store';
import CustomButton from '@/components/Button';
import Drawer from 'expo-router/drawer';
import { AntDesign } from '@expo/vector-icons';


const BlogComment = ({firstName,lastName,comment,image,commentId,id}:any)=>{
  async function likeArticleComment(){
    const {data} = await axiosInstance.put(`like_comment/${id}`,{commentId})
    console.log(data)
  }
  return (
    <View className='w-full border-b border-[#B2AFAF] mb-4 pb-2'>
      <View className='flex-row justify-between '>
        <View className='flex-row gap-1'>
          {//<Image source={{uri:image}} className='w-[21px] h-[21px] bg-slate-600 rounded-full'/>
          }<Text className='text-[14px] font-semibold'>{firstName} {lastName}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" onPress={likeArticleComment}/>
        
      </View>
      <Text className='text-[16px]'>
        {comment}
        
      </Text>
    </View>
  )
}

const AddBlogComment = ({setisCommenting,id}:any)=>{
  const [review, setreview] = useState<string>('')
  const [user, setuser] = useState<any>({})
  async function getUser(){
    const userInJson : any = await expoSecureStore.getItemAsync('user');
    console.log(userInJson)
    setuser(JSON.parse(userInJson));
    
  }
  useEffect(()=>{
    getUser()
  },[])
  async function sendComment() {
    const {data} = await axiosInstance.put(`plant_review/${id}`,{review});
    setisCommenting(false);
  }
  return (
    <View className='w-full border-b border-[#B2AFAF] mb-4 pb-2'>
      <View className='flex-row justify-between gap-1'>
        <View className='flex-row gap-1'>
          <View className='w-[21px] h-[21px] bg-slate-600 rounded-full'></View>
          <Text className='text-[14px] font-semibold'>{user && user.firstName +" "+user?.lastName}</Text>
        </View>
        <AntDesign name="hearto" size={18} color="black" />
        
      </View>
      <TextInput className='text-[16px] ' onChangeText={(e:any)=>setreview(e )} multiline placeholder='add your comment here'/>
     <View className='flex-row justify-end w-full'>
        <TouchableOpacity className='h-[30px] w-[70px] rounded-[4px] bg-[#009245] flex justify-center items-center z-20' onPress={sendComment} >
          <Text className='text-[14px] text-white font-bold'>send</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}


const plantDetails = () => {
  const {id} = useLocalSearchParams();
  const [plant, setPlant] = useState<any>({})
  const [isCommenting, setisCommenting] = useState<boolean>(false);
  const [isLiked, setisLiked] = useState(false)
  const [isAddedToCart, setisAddedToCart] = useState(false)
  async function getPlant(){
    const {data} = await axiosInstance.get(`/plant/${id}`);
    setPlant(data.plant);
  }
  useEffect(()=>{
    getPlant()
    
  },[]);

  const addToCart = async (id:any,ownerId:any,name:string,image:string,quantity:number,price:number) => {
    try {
      
      const existingCart = await getCart();
      let updatedCart: any = [];
  
      if (existingCart) {
        const existingProduct = existingCart.find((item:any) => item.id === id);
        if (existingProduct) {
          // Product already exists, update quantity
          updatedCart = existingCart.map((item:any) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Product does not exist, add to cart
          updatedCart = [...existingCart, {ownerId,price,name,id,image,quantity: 1 }];
        }
      } else {
        updatedCart = [{ownerId,price,image,name,id,quantity: 1 }];
      }
      setisAddedToCart(true);
      await saveCart(updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
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
  const getCart = async (): Promise<any> => {
    try {
      const cartData = await expoSecureStore.getItemAsync('cartData');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error getting cart:', error);
      return [];
    }
  };
  
  return (
    <ScrollView className='bg-white'>
      
      <View className='p-4 w-full'>
        <View className='flex-row justify-between items-center w-full '>
          <View className='w-7/12'>
            <Text className='text-[32px]'>{plant && plant.name}</Text>
            <Text className='text-[13px] mt-8'>{plant && plant.owner?.firstName+' '+plant.owner?.lastName}</Text>
            <Text className='text-[13px]'>seller location{plant && plant?.location}</Text>
          </View>
        <Image
          source={{uri:plant && plant.image?.url}}
          className='w-[150px] h-[150px]  z-20 '
          />     
        </View>
        <View className='mt-8 flex-row justify-between items-center'>
          <Text className='text-[28px]'>{plant && plant.price}DA</Text>
          <TouchableOpacity className='p-2 rounded-lg bg-[#009245]' onPress={()=>addToCart(id,plant.owner._id,plant.name,plant.image.url,plant.image,plant.price)}>
            <Text className='text-white text-[18px]'>{isAddedToCart ? 'is added': 'add to cart'}</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-between items-center mt-6'>
          <Text className='text-[24px]'>Description</Text>
          <View className='flex-row items-baseline gap-1'>
            <Text className='text-[#009245]'>1k</Text>
            <TouchableOpacity onPress={()=>setisLiked((e)=>!e)} className='border-[#009245] border rounded-full p-1'>
              {isLiked ? <AntDesign name="heart" size={20} color="#009245" /> : <AntDesign name="hearto" size={20} color="#009245" /> }
            </TouchableOpacity>
          </View> 
        </View>
        <Text className='text-[15px]'>
          {plant && plant.description}
        </Text>
        <Text className='text-[24px] my-3'>Images</Text>
        <View className='flex-row gap-2'>
          {
            plant && plant.images?.map((e:any,i:number)=>(
              <Image
              key={i}
              source={{uri:e.url}}
              className='w-[80px] h-[80px]  '
              />
            ))
          }
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className='text-[24px] my-3'>Reviews</Text>
          <TouchableOpacity onPress={()=>setisCommenting(false)}>
            <Image
              source={require('../../assets/icons/addComment.png')}
              className='w-[23px] h-[23px]  mt-1 '
            />
          </TouchableOpacity>
        </View>
        <View className=''>
        {
          isCommenting && (
            <View>
                <AddBlogComment id={id} setisCommenting={()=>setisCommenting(false)}/> 
            </View>
          )
        }
        {
          plant && plant.reviews?.map((e:any,i:any)=><BlogComment key={i} id={id} commentId={e._id} image={''} firstName={e.userId.lastName} lastName={e.userId.lastName} comment={e.review} />)
        }
          
        </View>
      </View>
      
    </ScrollView>
  )
}

export default plantDetails

const styles = StyleSheet.create({})