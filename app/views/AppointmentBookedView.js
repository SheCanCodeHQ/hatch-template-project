import React from 'react'
import { View, StyleSheet } from 'react-native'

import HeaderText from 'app/components/HeaderText'

class AppointmentBookedView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <HeaderText>Appointment Booked</HeaderText>
        <NormalText>1100hrs @ Westminster Clinic</NormalText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default AppointmentBookedView
