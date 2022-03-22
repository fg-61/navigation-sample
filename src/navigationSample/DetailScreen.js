import React from 'react'
import { View, Text } from 'react-native'

const DetailScreen = ({route, navigation}) => {

    const { id } = route.params;

    console.log('ID', id);

    return (
        <View>
          <Text>{id}</Text>
        </View>
    )
}

export default DetailScreen