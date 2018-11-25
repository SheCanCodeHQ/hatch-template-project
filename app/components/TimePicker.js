import React from 'react'
import { Picker, StyleSheet } from 'react-native'

import _ from 'lodash'

class TimePicker extends React.Component {
  render(){
    const { selectedValue, style, onValueChange } = this.props

    const pickerItems = _.fill(Array(18), 0).map((v,i) => {
      const hour = Math.floor(i / 2)
      if(i % 2 === 0){
        const label = `${_.padStart(hour + 9, 2, 0)}:00hrs`
        return <Picker.Item key={i} label={label} value={label} />
      } else {
        const label = `${_.padStart(hour + 9, 2, 0)}:30hrs`
        return <Picker.Item key={i} label={label} value={label} />
      }
      
    })

    return (
      <Picker
        selectedValue={selectedValue}
        style={[styles.picker, style]}
        onValueChange={onValueChange}>
        {pickerItems}
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
  }
})

export default TimePicker
