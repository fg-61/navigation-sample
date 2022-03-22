import React from 'react'
import { View, Text, Button } from 'react-native'

const ContactScreen = ({navigation}) => {

    return (
        <View>
            <Text>Contact Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ContactScreen