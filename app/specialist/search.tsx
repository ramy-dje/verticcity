import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type Props = {}
const SpecialisteCard = ()=>{
    return(
        <View className='border w-[150px] h-[200px] rounded-lg mx-2 mb-5'>
            <View className='bg-slate-500 w-full h-1/2'></View>
            <View className='px-2 pt-1 flex-col justify-between h-1/2'>
                <View>
                    <Text className='text-[15px]'>speacialiste name</Text>
                    <Text className='text-[15px] text-[#B2AFAF]'>specialite</Text>
                </View>
                <View className='flex-row justify-between pb-1'>
                    <Text className='text-[#009245]'>see more...</Text>
                    <Text className='text-[16px]'>1500DA</Text>
                </View>
            </View>
            
        </View>
    )
}
const search = (props: Props) => {
  return (
    <ScrollView>
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Specialistes</Text>
      <View>
        <TextInput className='border-2 border-[#009245] mx-3 text-[16px] p-2 rounded-full relative'/>
        <View className='bg-[#009245] w-[40px] h-[40px] rounded-full absolute right-4 top-1'></View>
      </View>
      <View className='px-3 py-8 flex-row justify-center flex-wrap'>
            <SpecialisteCard />
            <SpecialisteCard />
            <SpecialisteCard />
            <SpecialisteCard />
            <SpecialisteCard />
            <SpecialisteCard />
      </View>
    </ScrollView>
  )
}

export default search

const styles = StyleSheet.create({})