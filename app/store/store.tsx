import { Image, PanResponder, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const MyStore = (props: Props) => {
  const [ismoved, setismoved] = React.useState(false);
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx < -150) {
          // Swipe left detected, do something
          setismoved(true);
        }
      },
      onPanResponderRelease: () => {
        // Reset any necessary state
      },
    })
  ).current;
  const list = [1,1,1,1]
  return (
    <View className='bg-white h-screen'>
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>MyStore</Text>
      <ScrollView className=''>
        <View {...panResponder.panHandlers} className='flex-row gap-3 justify-between items-center border-b border-[#B2AFAF] mx-3 pb-2'>
            <View className='flex-row items-center gap-2'>
              <Image
              source={require('../../assets/images/app/model.png')}
              className='w-[80px] h-[100px]'
              />
              <View >
                  <Text className='text-[20px] pb-6'>Plant name</Text>
                  <Text>quantity</Text>
              </View>
            </View>
            <View className='flex-col  '>
              <Text className='text-[20px] text-[#009245] pt-2 pb-6'>settings</Text>
              <Text className='text-[20px] text-[#009245]  '>1500DA</Text>
            </View>
            {ismoved && <View className='h-full w-5 bg-[#009245] '></View>}
        </View>
        <View className='flex-row justify-center mt-5 '>
          <Text className='text-[20px]'>Add</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyStore

const styles = StyleSheet.create({})