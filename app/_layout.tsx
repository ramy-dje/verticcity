import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import CustomDrawerContent from '@/components/CustomeDrawer'
import {router, usePathname} from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
type Props = {}

const _layout = (props: Props) => {
  const pathName = usePathname();
  return (
    <Drawer 
    
    drawerContent={CustomDrawerContent} 
    initialRouteName='shop'
    screenOptions={{
      drawerLabelStyle:{fontSize:16},
      drawerInactiveTintColor:'black',
      drawerActiveBackgroundColor:'#009245',
      drawerActiveTintColor:'white',
      
    }}
    >
        <Drawer.Screen 
        name='(auth)/login'
        options={{
            headerShown:false,
            drawerItemStyle: { display: 'none' ,}
          }}
        />
         <Drawer.Screen 
        name='(auth)/Signup'
        options={{
          headerShown:false,
          drawerItemStyle: { display: 'none' }
        }}
        />
        <Drawer.Screen 
        name='(auth)/confirme'
        options={{
          headerShown:false,
          drawerItemStyle: { display: 'none' }
        }}
        />
        <Drawer.Screen 
        name='index'
        options={{
          drawerItemStyle: { display: 'none' },
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='store'
        options={{
          drawerItemStyle: { display: 'none' },
        }}
        />
        <Drawer.Screen 
        name='myblog'
        options={{
          drawerItemStyle: { display: 'none' },
        }}
        />
        <Drawer.Screen 
        name='mySales'
        options={{
          drawerItemStyle: { display: 'none' },
        }}
        />
        <Drawer.Screen 
        name='cart'
        options={{
          headerShown:false,
          drawerItemStyle: { display: 'none' },
        }}
        />
        <Drawer.Screen 
        name='shop'
        options={{
          title : 'store',
          headerTitle:'',
          headerShown:pathName == '/shop/plants',
          headerShadowVisible:false,
          headerRight:()=>(
            <TouchableOpacity className='pr-3' onPress={()=>router.push('/cart')}>
              <AntDesign name="shoppingcart" size={24} color="#009245" />
            </TouchableOpacity>
          )
        }}
        />
         <Drawer.Screen 
        name='blog'
        options={{
          title:'blogs',
          headerTitle:'',
          headerShown:pathName == '/blog/bloglist',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='specialist'
        options={{
          title:'specialists',
          headerTitle:'',
          headerShown:pathName == '/specialist/search',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='contacts'
        options={{
          title:'my contacts',
          headerTitle:'',
          headerShown:pathName == '/contacts/mycontacts',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='userAccount'
        options={{
          title :'my account',
          headerTitle:'',
          headerShown:true,
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='myPurshases'
        options={{
          headerTitle:'',
          title:'my purshases',
          headerShown:true,
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='notifications'
        options={{
          headerShown:true,
          headerTitle:'',
          //drawerItemStyle: { display: 'none' },
        }}
        />
      
    </Drawer>
  )
}

export default _layout

const styles = StyleSheet.create({})