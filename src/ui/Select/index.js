import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export const Select = (props) => {
  const { label, wrapperStyle, items, onValueChange, placeholder } = props

  return (
    <View style={{ ...styles.field, ...(wrapperStyle ? wrapperStyle : {})}}>
      <Text style={styles.selectLabel}>{label}</Text>

      <RNPickerSelect
        Icon={() => {
          return <Image style={styles.selectIcon} source={require('./icon-bottom.png')} />;
        }}
        placeholder={{ label: placeholder }}
        style={
          {
            viewContainer: styles.selectInput,
            placeholder: styles.selectInputText,
          }
        }
        textInputProps={{
          style: styles.selectInputText,
        }}
        onValueChange={onValueChange}
        items={items}
      />
    </View>
  )
}

// chevron?: ViewStyle;
// chevronActive?: ViewStyle;
// chevronContainer?: ViewStyle;
// chevronDown?: ViewStyle;
// chevronUp?: ViewStyle;
// done?: TextStyle;
// doneDepressed?: TextStyle;
// headlessAndroidContainer?: ViewStyle;
// headlessAndroidPicker?: ViewStyle;
// iconContainer?: ViewStyle;
// inputAndroid?: TextStyle;
// inputAndroidContainer?: ViewStyle;
// inputIOS?: TextStyle;
// inputIOSContainer?: ViewStyle;
// modalViewBottom?: ViewStyle;
// modalViewMiddle?: ViewStyle;
// modalViewTop?: ViewStyle;
// placeholder?: TextStyle;
// viewContainer?: ViewStyle;



const styles = StyleSheet.create({
  select: {

  },
  selectInput: {
    height: 44,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: "#D8E2EE",
    borderRadius: 10,
    backgroundColor: "#F2F3F5",
    color: "#000000"
  },

  selectInputText: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 20,
  },

  selectLabel: {
    marginBottom: 2,
    fontSize: 14,
    lineHeight: 18,
    color: "#6D7885"
  },

  selectIcon: {
    marginTop: 16,
    marginRight: 8,
    width: 12,
    height: 8
  }
})
