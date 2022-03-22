import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Contact"
                onPress={() => navigation.navigate('Contact')}
            />
            <Button
                title="Go to Detail"
                onPress={() => navigation.navigate('Detail', {id:5})}
            />
        </View>
    )
}

export default HomeScreen