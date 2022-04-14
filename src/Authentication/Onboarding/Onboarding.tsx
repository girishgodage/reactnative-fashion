import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Onboarding