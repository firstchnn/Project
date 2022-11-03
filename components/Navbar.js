import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Navbar =() => {
  return (
    <View style={styles.navbar}>
        <Text style={styles.text}>Navbar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    navbar: {
        height:60,
        padding:15,
        backgroundColor: 'grey',
    },
    text: {
        color: 'black',
        fontSize: 24,
        textAlight:'Center',
    }

})

export default Navbar