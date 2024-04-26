import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import CustomButton from '@/components/Button'
import * as ImagePicker from 'expo-image-picker';
import axiosInstance from '@/utils/axios';
import * as expoSecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import { useLocalSearchParams } from 'expo-router';

type Props = {}

const MyAccount = (props: Props) => {
    const {id} = useLocalSearchParams();
    const [image, setImage] = useState<string>('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [birthday, setbirthday] = useState<any>(null);
    const [location, setlocation] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [user, setuser] = useState<any>({})
    const pickImage = async () => {
        let result : any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        const convertImageToBase64 = async (uri : any) => {
          const response = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
          setImage(`data:image/jpeg;base64,${response}`);
        };
        
    
        if (!result.canceled) {
          convertImageToBase64(result.assets[0]?.uri);
        }
        
      };

      async function getUser(){
        const userInJson : any = await expoSecureStore.getItemAsync('user');
        console.log(userInJson)
        const parsedUser = JSON.parse(userInJson);
        setImage(parsedUser.avatar.url)
        setFirstName(parsedUser.firstName)
        setlastName(parsedUser.lastName)
        setemail(parsedUser.email)
        setpassword(parsedUser.password)
        setbirthday(parsedUser.birthday)
        setphoneNumber(parsedUser.phoneNumber)
      }
      async function updateUser() {
        const {data} = await axiosInstance.put("user_information",{firstName,lastName,email,password,location,phoneNumber})
        await axiosInstance.put("user_avatar",{avatar:image})  
        const userInJson =  JSON.stringify(data.user);
        await expoSecureStore.setItemAsync('user',userInJson);
        console.log(data);
    }
    useEffect(()=>{
        getUser()
    },[])

  return (
    <ScrollView className='bg-white relative'>
        <Text className='text-[40px] ml-[25px] mt-6 mb-6'>MyAccount</Text>
        <Image className='w-[220px] z-0 h-[470px] transform  absolute bottom-0 z-0 right-0' source={require('../assets/images/app/myAccount.png')}/>
     
        <View className='w-full flex-row justify-center mb-4'>
                <View onTouchEnd={pickImage} className='h-[145px] w-[145px] bg-[#D9D9D9] rounded flex-row justify-center items-center'>
                {image ? <Image source={{ uri: image }} className='w-full h-full rounded' /> :<Text>choose image</Text>}  
                </View>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>First name</Text>
            </View>
            <TextInput value={firstName} onChangeText={(e)=>setFirstName(e)} multiline placeholder='what is your first name' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>Last name</Text>
            </View>
            <TextInput value={lastName} onChangeText={(e)=>setlastName(e)} multiline placeholder='what is your last name' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>age</Text>
            </View>
            <TextInput multiline placeholder='what is your birthday' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>phone numbre</Text>
            </View>
            <TextInput value={phoneNumber} onChangeText={(e)=>setphoneNumber(e)} multiline placeholder='what is your phone numbre' className='ml-8 mt-2 text-[18px]'/>
        </View>
        <View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>email</Text>
            </View>
            <TextInput value={email} onChangeText={(e)=>setemail(e)} multiline placeholder='what is your email' className='ml-8 mt-2 text-[18px]'/>
        </View>
        {/*<View className='w-full px-3 mb-3'>
            <View className='flex-row gap-2 items-center'>
                <View className='w-4 h-4 bg-black rounded-full'></View>
                <Text className='text-[24px]'>Password</Text>
            </View>
            <TextInput value={password} onChangeText={(e)=>setpassword(e)} multiline placeholder='what is your password' className='ml-8 mt-2 text-[18px]'/>
        </View>*/}
        <View className='w-full flex-row justify-center mb-16'>
            <CustomButton handleClick={()=>{updateUser()}} text='update account'/>
        </View>
    </ScrollView>
  )
}

export default MyAccount

const styles = StyleSheet.create({})