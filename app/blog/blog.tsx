import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlogArticle from '@/components/BlogArticle'

const Blog = () => {
  return (
    <ScrollView className='bg-white'>
       <Text className='text-[40px] ml-[25px] mt-16 mb-6'> Articles </Text>
       <View>
          <BlogArticle id={1} title='here is the title of the test blog of the test blog' spicialisteName='some weird name'/>
          
       </View>
    </ScrollView>
  )
}

export default Blog

const styles = StyleSheet.create({})