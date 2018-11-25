import React from 'react'
import { StyleSheet, Text } from 'react-native'

class NormalText extends React.Component {
  render(){
    return (
      <Text {...this.props} style={styles.normalText} />
    )
  }
}

const styles = StyleSheet.create({
  normalText: {
    fontSize: 14
  }
})

export default NormalText
