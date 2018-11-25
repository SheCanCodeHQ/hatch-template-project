import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

import HeaderText from 'app/components/HeaderText'
import NotificationsManager from 'app/utils/NotificationsManager'

class RootView extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  constructor(){
    super()
  }
  componentDidMount(){
    NotificationsManager.createDefaultChannel()
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderText>Root</HeaderText>
        <Button
          onPress={this.gotoBookAppointmentView}
          title="Book Appointment"
          style={styles.button}
        />
        <Button
          onPress={NotificationsManager.scheduleAppointmentConfirmationPN}
          title="Appointment Confirmation PN"
          style={styles.button}
        />
        <Button
          onPress={NotificationsManager.scheduleAvailableAppointment}
          title="Available Appointment PN"
          style={styles.button}
        />
      </View>
    )
  }
  gotoBookAppointmentView = () => this.props.navigation.navigate('BookAppointmentView')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 30
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
})

export default RootView
