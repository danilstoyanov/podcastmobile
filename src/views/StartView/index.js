import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {useHistory} from 'react-router-dom';

import {Button} from '../../ui/Button';

import theme from '../../theme';

export const StartView = (props) => {
  const history = useHistory();

  const titleContent = 'Добавьте первый подкаст';

  const textContent =
    'Добавляйте, редактируйте и делитесь\nподкастами Вашего сообщества.';

  const onCreatePress = () => {
    history.push('/new');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.icon} source={require('./add-icon.png')} />

        <Text style={styles.title}>{titleContent}</Text>

        <Text style={styles.text}>{textContent}</Text>

        <Button title="Добавить подкаст" onPress={onCreatePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  icon: {
    marginBottom: 16,
  },
  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 24,
    color: '#818C99',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
    textAlign: 'center',
  },
});
