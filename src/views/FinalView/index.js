import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {useHistory} from 'react-router-native';

import {Button} from '../../ui/Button';

import checkIcon from './check-icon.png';

export const FinalView = ({postData}) => {
  const history = useHistory();

  const handlePublishPress = () => {
    history.push('/');
  };

  return (
    <View style={generalStyle.wrapper}>
      <View style={generalStyle.content}>
        <Image source={checkIcon} style={generalStyle.checkIcon} />
        <Text style={generalStyle.title}> Подкаст добавлен </Text>
        <Text style={generalStyle.description}>
          Расскажите своим подписчикам о подкасте чтобы получить больше
          слушателей.
        </Text>
        <Button
          title="Опубликовать подкаст"
          type="base"
          onPress={handlePublishPress}
          style={generalStyle.publishButton}
        />
      </View>
    </View>
  );
};

const generalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    width: 300,
    fontSize: 16,
    textAlign: 'center',
    color: '#818C99',
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
  },
  checkIcon: {
    width: 48,
    height: 48,
    marginBottom: 16,
  },
});
