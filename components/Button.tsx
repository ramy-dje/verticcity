import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native'
import React from 'react'

type ButtonType ={
  text : string,
  handleClick : ()=>void
}
const CustomButton = ({text,handleClick}:ButtonType )=> {
  return (
    <TouchableOpacity className='h-[60px] w-[90%] rounded-[13px] bg-[#009245] flex justify-center items-center z-20' onPress={handleClick} >
        <Text className='text-[30px] text-white font-bold'>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

