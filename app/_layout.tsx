import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import CustomDrawerContent from '@/components/CustomeDrawer'
import {router, useNavigation, usePathname} from 'expo-router'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
type Props = {}

const _layout = (props: Props) => {
  const pathName = usePathname();
  const navigation : any = useNavigation();
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
          drawerIcon:({ color, size })=><MaterialCommunityIcons name="storefront-outline" size={size} color={color}  />,
          title : 'store',
          headerTitle:'',
          headerShown:pathName == '/shop/plants',
          headerShadowVisible:false,
          headerTintColor:'#009245',
          
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
          drawerIcon:({size,color})=><MaterialCommunityIcons name="form-select" size={size} color={color} />,
          title:'blogs',
          headerTitle:'',
          headerTintColor:'#009245',
          headerShown:pathName == '/blog/bloglist',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='specialist'
        options={{
          title:'specialists',
          drawerIcon:({size,color})=><MaterialCommunityIcons name="account-tie-outline" size={size} color={color} />,
          headerTitle:'',
          headerTintColor:'#009245',
          headerShown:pathName == '/specialist/search',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='contacts'
        options={{
          title:'my contacts',
          drawerIcon:({size,color})=><Feather name="users" size={size} color={color} />,
          headerTitle:'',
          headerTintColor:'#009245',
          headerShown:pathName == '/contacts/mycontacts',
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='userAccount'
        options={{
          title :'my account',
          drawerIcon:({size,color})=><MaterialCommunityIcons name="account-cog-outline" size={size} color={color} />,
          headerTitle:'',
          headerTintColor:'#009245',
          headerShown:true,
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='myPurshases'
        options={{
          headerTitle:'',
          drawerIcon:({size,color})=><MaterialCommunityIcons name="cart-check" size={size} color={color} />,
          title:'my purshases',
          headerShown:false,
          headerShadowVisible:false
        }}
        />
        <Drawer.Screen 
        name='notifications'
        options={{
          headerShown:false,
          drawerIcon:({size,color})=><Feather name="bell" size={size} color={color} />,
          headerTitle:'',
          //drawerItemStyle: { display: 'none' },
        }}
        />
      
    </Drawer>
  )
}

export default _layout

const styles = StyleSheet.create({})