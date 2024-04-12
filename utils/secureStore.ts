import * as SecureStore from 'expo-secure-store';

export async function saveInStore(key : string,value:any){
    await SecureStore.setItemAsync(key, value);
}

export async function getFromStore(key : string){
    let result = await SecureStore.getItemAsync(key);
    return result
}