import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import PlantsRow from '@/components/plantsRow'

const plants = () => {
  return (
    <ScrollView className='bg-white relative pl-4'>
      <View className='absolute right-4 top-16'>
        <Text>Search</Text>
      </View>
      <Text className='text-[24px] mt-28'>Today's selection</Text>
      <View className='flex justify-center '>
        <LinearGradient
          colors={['#009245', '#6BF555']}
          className='w-[90%] h-[150px] rounded-l-lg rounded-tr-[126] rounded-br-[56] mt-4 pt-6 p-3 pr-24 relative'
          start={{ x: 0, y: 0}}
          end={{x: 0.7, y: 0.7}}
          >
            <Text className='text-[24px] text-white   '>Plant name</Text>
            <Text className='text-white text-[13px]'>smal describtion about this amazing plant in order to convince some buddy to buy it</Text>
            <Text className='text-[24px] text-white absolute bottom-4 left-3'>150DA</Text>
            <Image
            source={require('../../assets/images/app/model.png')}
            className='w-[200px] h-[184px] absolute right-[-60px] bottom-0 '
            />
          </LinearGradient>
      </View>
      <View>
        <PlantsRow />
        
      </View>

    </ScrollView>
  )
}

export default plants

const styles = StyleSheet.create({})