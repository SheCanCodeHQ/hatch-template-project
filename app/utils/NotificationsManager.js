import { Notifications } from 'expo'

import _ from 'lodash'

const defaultNotif = {
  ios: {
    sound: true,
  },
  android: {
    channelId: 'default',
    icon: '',
  }
}

const defaultChannel = {
  name: 'Clinic Appointments',
  sound: true,
  priority: 'high',
  vibrate: true,
  badge: true
}

const createDefaultChannel = () => {
  Notifications.createChannelAndroidAsync('default', defaultChannel)
}

const scheduleAppointmentConfirmationPN = () => {
  const appointmentConfirmationNotif = _.merge({
    title: 'Can you make it?',
    body: "Looks like you're still some ways away. Please confirm you can still make your appointment."
  }, defaultNotif)

  Notifications.scheduleLocalNotificationAsync(appointmentConfirmationNotif, {
    time: (new Date()).getTime() + 3000
  })
}

const scheduleAvailableAppointment = () => {
  const availableAppointmentNotif = _.merge({
    title: 'Available Appointment @ 0900hrs',
    body: 'Snap up this slot now!',
    data: {
      availableAppointment: true
    }
  }, defaultNotif)

  Notifications.scheduleLocalNotificationAsync(availableAppointmentNotif, {
    time: (new Date()).getTime() + 3000
  })
}

export default {
  createDefaultChannel,
  scheduleAppointmentConfirmationPN,
  scheduleAvailableAppointment
}