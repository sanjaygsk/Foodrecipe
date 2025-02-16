import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = (props: any) => {
  return (
    <View className='flex-1 justify-center items-center flex'>
        <ActivityIndicator {...props} />
    </View>
  )
}

export default Loading