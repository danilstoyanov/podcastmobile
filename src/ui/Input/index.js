import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

export const Input = (props) => {
  const {
    label,
    wrapperStyle,
    inputStyle,
    placeholder,
    value,
    onChangeText,
  } = props;

  return (
    <View
      style={{
        ...styles.field,
        ...(wrapperStyle ? wrapperStyle : {}),
      }}>
      <Text style={styles.fieldLabel}>{label}</Text>

      <TextInput
        {...props}
        style={{
          ...styles.fieldInput,
          ...(inputStyle ? inputStyle : {}),
        }}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {},
  fieldInput: {
    height: 44,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#D8E2EE',
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: '#F2F3F5',
    color: '#000000',
  },
  fieldLabel: {
    marginBottom: 2,
    fontSize: 14,
    lineHeight: 18,
    color: '#6D7885',
  },
});
