import {  Text, View ,FlatList} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'


const Slider = () => {
    const links : any = [
        {
            name : 'login',
            direction : '/auth/login' 
        },
        {
            name : 'signup',
            direction : '/auth/Signup' 
        },
        {
            name : 'blog',
            direction : '/blog/blog' 
        },
        {
            name : 'shop',
            direction : '/shop/plants' 
        },
        {
            name : 'cart',
            direction : '/shop/cart' 
        },
        {
            name : 'my contacts',
            direction : '/contacts/mycontacts' 
        },
        {
            name : 'messages',
            direction : '/contacts/messages' 
        },
        {
            name : 'notifications',
            direction : '/notifications' 
        },
    ]
   const [sliderOpened, setsliderOpened] = useState(false);
  return (
    sliderOpened ? (
    <View className='w-full h-screen bg-red-700' onTouchEnd={()=>setsliderOpened(false)}>
        <LinearGradient
        colors={['#009245', '#6BF555']}
        className='w-3/5 h-screen absolute right-0 p-4 z-10'
        >
            {
                links.map((link:any,i:number)=>(
                    <Link key={i} className='text-white text-xl ' href={link.direction}>{link.name}</Link>
                ))
            }
        
        </LinearGradient>
    </View>
   
    ):(
        <Text className='absolute right-0' onPress={()=>setsliderOpened(true)}>open meeeeeeeeeeeeeeeee</Text>
    )

      

  )
}

export default Slider
