import { StyleSheet, Text, TextInput, View  } from 'react-native'
import React from 'react'


type TextInputType = {
    label : string,
    value : string | any,
    handleChange : (e:any)=>void,
    placeholder : string,
    isPassword? : boolean,
    isNumber? : boolean,


}
const CustomeTextInput = ({label,value,handleChange,placeholder,isPassword,isNumber}:TextInputType) => {
  return (
    <View className='mt-2 relative  w-[90%]'>
        <Text className='absolute z-[200] left-2 bg-white p-1 top-[-13px] text-[16px]'>
            {label}
        </Text>
        <TextInput 
        className={`p-2 z-0 border border-black rounded-[13px] p-4 mb-4 text-[16px]`}
        secureTextEntry={isPassword} 
        value={value} 
        onChange={handleChange} 
        placeholder={placeholder}
        keyboardType={isNumber ? 'numeric' : 'default'}
        multiline  
        />
    </View>
   
  )
}

export default CustomeTextInput

