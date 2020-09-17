import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Radio = (props) => {
  const { label, radio_props, onPress, wrapperStyle } = props

  return (
    <View style={{ ...styles.radio, ...(wrapperStyle ? wrapperStyle : {})}}>
      <Text style={styles.radioLabel}>{label}</Text>

      <RadioForm
        initial={0}
        radio_props={radio_props}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  radio: {

  },
  radioInput: {
    height: 44,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: "#D8E2EE",
    borderRadius: 10,
    backgroundColor: "#F2F3F5",
    color: "#000000"
  },

  radioInputText: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 20,
  },

  radioLabel: {
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 18,
    color: "#6D7885"
  },
})
