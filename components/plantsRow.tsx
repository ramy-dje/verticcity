import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const PlantsRow = () => {
  return (
    <View>
      <Text className='text-[24px] mt-8'>Category 1</Text>
      <ScrollView horizontal>
        <TouchableOpacity className='relative h-[180px] mr-6' onPress={()=> router.push('/shop/1')}>
            <Image
              source={require('../assets/images/app/model.png')}
              className='w-[130px] h-[130px]  '
            />
            <Text className='text-[20px] absolute left-0 bottom-6'>Plant name</Text>
            <Text className='text-[#009245] text-[20px] absolute right-0 bottom-0'>1500DA</Text>
        </TouchableOpacity>
        
        
       </ScrollView>
    </View>
  )
}

export default PlantsRow

const styles = StyleSheet.create({})