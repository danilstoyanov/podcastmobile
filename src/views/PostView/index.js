import React from 'react';

import {
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {useHistory} from 'react-router-native';

import {Button} from '../../ui/Button';

import playIcon from './play-icon.png';

export const PostView = ({postData}) => {
  const history = useHistory();

  const {title, description, cover, audio} = postData;

  const timecodes = [
    {
      id: 'first',
      time: '01:25',
      description: 'Первый таймкод',
    },
    {
      id: 'second',
      time: '06:35',
      description: 'Второй таймкод',
    },
    {
      id: 'third',
      time: '10:25',
      description: 'Третий таймкод',
    },
  ];

  const handlePublishButtonPress = () => {
    history.push('/final');
  };

  return (
    <ScrollView style={post.wrapper}>
      <View
        style={{...section.wrapper, flexDirection: 'row', marginBottom: 12}}>
        <View style={coverStyle.cover}>
          <Pressable style={coverStyle.coverImageButton}>
            <Image style={coverStyle.coverPlayIcon} source={playIcon} />
          </Pressable>
          <ImageBackground
            style={coverStyle.coverImage}
            source={cover ? {uri: cover} : null}
          />
        </View>

        <View>
          <Text style={generalStyle.title}>{title}</Text>
          <Text style={generalStyle.author}>Имя Автора</Text>
          <Text style={generalStyle.duration}>Длительность: 20:24</Text>
        </View>
      </View>

      <View style={{...section.wrapper, marginBottom: 18}}>
        <Text style={{...section.title, marginBottom: 8}}>Описание</Text>
        <Text style={section.content}>{description}</Text>
      </View>

      <View
        style={{
          ...section.wrapper,
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        }}>
        <Text style={{...section.title, marginBottom: 8}}>Содержание</Text>

        <View>
          {timecodes.map(({id, time, description}) => (
            <View key={id} style={timecodeStyle.wrapper}>
              <Text style={timecodeStyle.timecode}>{time}</Text>
              <Text style={timecodeStyle.description}> — {description}</Text>
            </View>
          ))}
        </View>
      </View>

      <Button
        title="Опубликовать подкаст"
        type="base"
        onPress={handlePublishButtonPress}
        style={generalStyle.publishButton}
      />
    </ScrollView>
  );
};

const generalStyle = StyleSheet.create({
  title: {
    marginTop: 6,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    color: '#000000',
  },
  author: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: '500',
    color: '#4986CC',
  },
  duration: {
    fontSize: 12,
    marginTop: 4,
    color: '#818C99',
  },
  publishButton: {
    marginTop: 24,
  },
});

const timecodeStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  timecode: {
    fontSize: 17,
    lineHeight: 22,
    color: '#4986CC',
  },
  description: {
    fontSize: 17,
    lineHeight: 22,
    color: '#000000',
  },
});

const coverStyle = StyleSheet.create({
  cover: {
    marginRight: 14,
  },
  coverImage: {
    position: 'relative',
    width: 72,
    height: 72,
    borderRadius: 8,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  coverImageButton: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: 18,
    left: 20,
    zIndex: 2,
  },
  coverPlayIcon: {
    width: 32,
    height: 32,
  },
});

const section = StyleSheet.create({
  wrapper: {
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#D7D8D9',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    color: '#000000',
  },
  content: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
  },
});

const post = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 8,
  },
});
