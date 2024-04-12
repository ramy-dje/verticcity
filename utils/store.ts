import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

const CART_KEY = 'cartData';

type IProduct = {
  id: number,
  name: string,
  quantity: number,
  image : string
}


export const addToCart = async (id:any,name:string,image:string,quantity:number) => {
  console.log('conee ')
  try {
    
    const existingCart = await getCart();
    let updatedCart: IProduct[] = [];

    if (existingCart) {
      const existingProduct = existingCart.find((item:any) => item.id === id);
      if (existingProduct) {
        // Product already exists, update quantity
        updatedCart = existingCart.map((item:any) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Product does not exist, add to cart
        updatedCart = [...existingCart, { name,id,image,quantity: 1 }];
      }
    } else {
      updatedCart = [{image,name,id,quantity: 1 }];
    }
    console.log('saved')
    await saveCart(updatedCart);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = async (productId: number) => {
  try {
    const existingCart = await getCart();
    if (existingCart) {
      const updatedCart = existingCart.filter((item:any) => item.id !== productId);
      await saveCart(updatedCart);
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};

export const updateQuantity = async (productId: number, newQuantity: number) => {
  try {
    const existingCart = await getCart();
    if (existingCart) {
      const updatedCart = existingCart.map((item:any) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      await saveCart(updatedCart);
    }
  } catch (error) {
    console.error('Error updating quantity:', error);
  }
};

export const clearCart = async () => {
  try {
    await SecureStore.deleteItemAsync(CART_KEY);
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
};

export const getCart = async (): Promise<any> => {
  try {
    const cartData = await SecureStore.getItemAsync('cartData');
    console.log(cartData)
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error getting cart:', error);
    return [];
  }
};
const saveCart = async (cart: IProduct[]) => {
  try {
    const jsonValue = JSON.stringify(cart);
    await SecureStore.setItemAsync(CART_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};