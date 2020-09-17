import React from 'react';
import { StyleSheet, Text } from 'react-native';


export const Text = (props) => {
  return <Text style={style.text} {...props}>{children}</Text>
};

const style = StyleSheet.create({
  text: {}
})
