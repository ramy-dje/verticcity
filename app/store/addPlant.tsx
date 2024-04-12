import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axiosInstance from '@/utils/axios';

type Props = {}

const PlantCreate= (props: Props) => {
    const [image, setImage] = useState<any>();
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('')
    const [quantity, setquantity] = useState('')
    const [images, setimages] = useState<any>([]);
    const [buttonText, setbuttonText] = useState('create')
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
          return response;
        };
        
    
        if (!result.canceled) {
          return convertImageToBase64(result.assets[0]?.uri);
          
        }else{
            return 'no result'
        }
        
        
      };

      const pickImages = async () => {
        let result : any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        const convertImageToBase64 = async (uri : any) => {
          const response = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
          setimages([...images,`data:image/jpeg;base64,${response}`]);
          return response;
        };
        
    
        if (!result.canceled) {
          return convertImageToBase64(result.assets[0]?.uri);
          
        }else{
            return 'no result'
        }
        
        
      };


      async function createPlant(){
        setbuttonText('is creating')
        const {data} = await axiosInstance.post('/plant',{name, description, price, images, quantity,image })
        console.log(data);
        if(data.plant){
            setbuttonText('created')
        }
      }
     

  return (
    <ScrollView >
      <Text className='text-[40px] ml-[25px] mt-16 mb-6'>Create Plant</Text>
      <View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Primary image</Text>
                </View>
                <View onTouchEnd={pickImage} className='w-[140px] h-[140px] rounded-lg ml-8 mt-2 bg-[#D9D9D9]'>
                {image && <Image source={{ uri: image }} className='w-full h-full rounded-lg' />}  
                </View>
                
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Name</Text>
                </View>
                <TextInput multiline value={name} onChangeText={(e)=>setname(e)} placeholder='what is name of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Price</Text>
                </View>
                <TextInput multiline value={price} keyboardType='numeric' onChangeText={(e)=>setprice(e)} placeholder='what is the price of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Quantity</Text>
                </View>
                <TextInput multiline value={quantity} keyboardType='numeric' onChangeText={(e)=>setquantity(e)} placeholder='what is the quantity of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>Description</Text>
                </View>
                <TextInput multiline value={description} onChangeText={(e)=>setdescription(e)} placeholder='what is the description of the plant' className='ml-8 mt-2 text-[18px]'/>
            </View>
            <View className='w-full px-3 mb-3'>
                <View className='flex-row gap-2 items-center'>
                    <View className='w-4 h-4 bg-black rounded-full'></View>
                    <Text className='text-[24px]'>images</Text>
                </View>
                <ScrollView horizontal className='flex-row gap-2 mt-2 h-[90px]'>
                    {images && images.map((e:any)=><Image source={{uri:e}} className='w-[80px] h-[80px] bg-red-500'/>)}
                    
                    <View className='w-[80px] h-[80px] flex-row items-center' onTouchEnd={pickImages}>
                        <Text>add</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View className='w-full flex-row justify-center mb-16'>
            <CustomButton handleClick={createPlant} text={buttonText}/>
        </View>
     
    </ScrollView>
  )
}

export default PlantCreate

