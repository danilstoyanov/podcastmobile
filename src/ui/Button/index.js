import { FastField } from 'formik';
import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import theme from '../../theme';

// Component	ElementType<any>	button
// after	ReactNode
// align	AlignType
// before	ReactNode
// getRootRef	Ref<HTMLElement>
// href	string
// mode	"primary" | "secondary" | "tertiary" | "outline" | "commerce" | "destructive" | "overlay_primary" | "overlay_secondary" | "overlay_outline"	primary
// size	"m" | "l" | "xl"	m
// stopPropagation	boolean	true
// stretched	boolean	false
// target	string

export const Button = (props) => {
  const {
    title = 'кнопка',
    type,
    onPress,
    style,
    disabled = false,
    after,
    before,
    getRootRef,
    href,
    size,
  } = props;

  // const buttonStyle = {
  //   ...styles.general,
  //   ...(size ? styles.size[size] : styles.size.medium),
  //   ...(type ? styles.type[type] : styles.type.base)
  // }

  const buttonStyleSheet = StyleSheet.create({
    general: buttonStyleTheme.general,
    size: size ? buttonStyleTheme.size[size] : buttonStyleTheme.size.medium,
    type: type ? buttonStyleTheme.type[type] : buttonStyleTheme.type.base,
  });

  const buttonStyle = {
    ...buttonStyleSheet.general,
    ...buttonStyleSheet.size,
    ...buttonStyleSheet.type,
  };

  const textStyleSheet = StyleSheet.create({
    type: type ? commonStyleTheme.type[type] : commonStyleTheme.type.base,
  });

  const textStyle = {
    ...textStyleSheet.type,
  };

  return (
    <Pressable
      style={{...buttonStyle, ...(style ? style : {})}}
      onPress={() => {
        if (type === 'disabled') {
          return;
        }

        onPress();
      }}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const buttonStyleTheme = {
  general: {
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  size: {
    medium: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      height: 36,
    },
  },

  type: {
    base: {
      backgroundColor: theme.color.baseColor,
    },
    disabled: {
      backgroundColor: theme.color.baseColor,
      opacity: 0.5,
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#3F8AE0',
      color: '#3F8AE0',
    },
  },
};

const commonStyleTheme = {
  type: {
    disabled: {
      color: '#FFFFFF',
    },
    base: {
      fontSize: 15,
      fontWeight: '500',
      color: '#fff',
    },
    outlined: {
      fontSize: 15,
      fontWeight: '500',
      color: '#3F8AE0',
    },
  },
};
