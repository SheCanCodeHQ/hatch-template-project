import React from 'react'
import { View, StyleSheet, Alert, Button } from 'react-native'

import HeaderText from 'app/components/HeaderText'
import NormalText from 'app/components/NormalText'
import TimePicker from 'app/components/TimePicker'

class BookAppointmentView extends React.Component {
  static navigationOptions = {
    title: 'Book an Appointment'
  }
  constructor(){
    super()
    this.state = {
      startTime: '09:00hrs',
      endTime: '17:00hrs'
    }
  }
  render(){
    const { startTime, endTime } = this.state
    return (
      <View style={styles.container}>
        <HeaderText>Westminster Clinic</HeaderText>
        <NormalText>
          Notify me if there are available appointments between:
        </NormalText>
        <TimePicker
          selectedValue={startTime}
          onValueChange={this.onValueChange('startTime')}
        />
        <NormalText>
          and
        </NormalText>
        <TimePicker
          selectedValue={endTime}
          onValueChange={this.onValueChange('endTime')}
        />
        <Button
          onPress={this.notifyMe}
          title="Notify Me"
        />
      </View>
    )
  }
  onValueChange = (field) => newVal => this.setState({ [field]: newVal })
  notifyMe = () => {
    Alert.alert("You're on the waitlist", "We'll notify you if there's an available slot")
    this.props.navigation.goBack()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  }
})

export default BookAppointmentView
