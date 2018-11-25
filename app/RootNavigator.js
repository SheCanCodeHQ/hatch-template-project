import { createStackNavigator } from 'react-navigation'

import RootView from 'app/views/RootView'
import BookAppointmentView from 'app/views/BookAppointmentView'
import AppointmentBookedView from 'app/views/AppointmentBookedView'

const RootNavigator = createStackNavigator({
  RootView: {
    screen: RootView,
  },
  BookAppointmentView: {
    screen: BookAppointmentView,
  },
  AppointmentBookedView: {
    screen: AppointmentBookedView
  }
}, {
  intialRouteName: 'RootView'
})

export default RootNavigator
