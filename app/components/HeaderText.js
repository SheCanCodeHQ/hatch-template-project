import React from 'react'
import { StyleSheet, Text } from 'react-native'

class HeaderText extends React.Component {
  render(){
    return (
      <Text {...this.props} style={styles.headerText} />
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16
  }
})

export default HeaderText
