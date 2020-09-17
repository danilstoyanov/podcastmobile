import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Text,
} from 'react-native';

import {useHistory} from 'react-router-native';
import CheckBox from '@react-native-community/checkbox';
import ImagePicker from 'react-native-image-picker';

import {Button} from '../../ui/Button';
import {Input} from '../../ui/Input';
import theme from '../../theme';

import audioIcon from './audio-icon.png';

import DocumentPicker from 'react-native-document-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Загрузите обложку',
  cancelButtonTitle: 'Отмена',
  takePhotoButtonTitle: 'Сделать фото',
  chooseFromLibraryButtonTitle: 'Выбрать из галереи',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const NewPodcastView = (props) => {
  const {setPostData, setAudioFile} = props;

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [coverImage, setCoverImage] = useState('');
  const [audioFile, setaudioFile] = useState(null);

  const [contentCheckBox, toggleContentCheckBox] = useState(false);
  const [excludeEpisodeCheckBox, toggleExcludeEpisodeCheckBox] = useState(
    false,
  );
  const [trailerCheckBox, setTrailerCheckBox] = useState(true);

  const isFormDisabled = !title || !audioFile;

  const handleAudioUploadPress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });

      setaudioFile({
        uri: res.uri,
        type: res.type,
        name: res.name,
        size: res.size,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const handleAudioEditPress = () => {
    setAudioFile(audioFile);

    history.push('/audio');
  };

  const handleImageUploadPress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = 'data:image/jpeg;base64,' + response.data;
        const source = response.uri;
        setCoverImage(source);
      }
    });
  };

  const handlePodcastSubmit = () => {
    setPostData({
      title: title,
      description: description,
      cover: coverImage,
      audio: audioFile,
      timecodes: [],
    });

    history.push('/preview');
  };

  return (
    <View style={generalStyle.wrapper}>
      <View style={coverSection.wrapper}>
        <View style={coverSection.cover}>
          {coverImage === '' ? (
            <Pressable onPress={handleImageUploadPress}>
              <View style={coverStyle.inputWrapper}>
                <Image
                  style={coverStyle.inputIcon}
                  source={require('./image-icon.png')}
                />
              </View>
            </Pressable>
          ) : (
            <View style={coverStyle.cover}>
              <ImageBackground
                imageStyle={{borderRadius: 8}}
                source={coverImage ? {uri: coverImage} : null}
                style={coverStyle.coverImage}
              />
            </View>
          )}
        </View>

        <Input
          name="title"
          label="Название"
          placeholder="Введите название подкаста"
          onChangeText={setTitle}
          wrapperStyle={coverSection.input}
        />
      </View>

      <View style={descriptionSection.description}>
        <Input
          multiline
          numberOfLines={4}
          name="description"
          label="Описание подкаста"
          onChangeText={setDescription}
          inputStyle={descriptionSection.textarea}
        />
      </View>

      <View style={podcastSection.wrapper}>
        {audioFile === null ? (
          <View>
            <Text style={podcastStyle.title}>Загрузите ваш подкаст</Text>
            <Text style={podcastStyle.description}>
              {'Выберите готовый аудиофайл из вашего\nтелефона и добавьте его'}
            </Text>

            <Button
              title="Загрузить файл"
              type="outlined"
              onPress={handleAudioUploadPress}
            />
          </View>
        ) : (
          <View style={podcastStyle.audio}>
            <View style={podcastStyle.audioWrapper}>
              <Image style={podcastStyle.audioIcon} source={audioIcon}></Image>
              <Text style={podcastStyle.audioTitle}>{audioFile.name}</Text>
            </View>

            <Text style={podcastStyle.audioHint}>
              Вы можете добавить таймкоды и скорректировать подкаст в режиме
              редактирования
            </Text>

            <Button
              title="Редакировать аудио"
              type="outlined"
              onPress={handleAudioEditPress}
            />
          </View>
        )}
      </View>

      <View style={settingsSection.wrapper}>
        <View style={checkboxStyle.wrapper}>
          <CheckBox
            boxType="square"
            onFillColor="#4986CC"
            onTintColor="#4986CC"
            onCheckColor="#FFFFFF"
            disabled={false}
            value={contentCheckBox}
            style={{width: 20, height: 20}}
            onValueChange={(newValue) => toggleContentCheckBox(newValue)}
          />

          <Text style={checkboxStyle.text}>Ненормативный контент</Text>
        </View>

        <View style={{...checkboxStyle.wrapper, marginTop: 24}}>
          <CheckBox
            boxType="square"
            onFillColor="#4986CC"
            onTintColor="#4986CC"
            onCheckColor="#FFFFFF"
            disabled={false}
            value={excludeEpisodeCheckBox}
            style={{width: 20, height: 20}}
            onValueChange={(newValue) => toggleExcludeEpisodeCheckBox(newValue)}
          />

          <Text style={checkboxStyle.text}>Исключить эпизод из экспорта</Text>
        </View>

        <View style={{...checkboxStyle.wrapper, marginTop: 24}}>
          <CheckBox
            boxType="square"
            onFillColor="#4986CC"
            onTintColor="#4986CC"
            onCheckColor="#FFFFFF"
            disabled={false}
            value={trailerCheckBox}
            style={{width: 20, height: 20}}
            onValueChange={(newValue) => setTrailerCheckBox(newValue)}
          />

          <Text style={checkboxStyle.text}>Трейлер подкаста</Text>
        </View>
      </View>

      <View style={footerSection.footer}>
        <Text style={footerSection.text}>
          При публикации записи с эпизодом он становится видимым для всех
          пользователей
        </Text>
      </View>

      <Button
        type={isFormDisabled ? 'disabled' : 'base'}
        title="Далее"
        style={generalStyle.submit}
        onPress={handlePodcastSubmit}
      />
    </View>
  );
};

const generalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  submit: {
    marginTop: 'auto',
  },
});

const coverStyle = StyleSheet.create({
  cover: {
    marginTop: 8,
    height: 72,
    width: 72,
    borderRadius: 6,
  },
  coverImage: {
    height: 72,
    width: 72,
    resizeMode: 'contain',
  },
  inputWrapper: {
    marginTop: 8,
    height: 72,
    width: 72,
    borderRadius: 6,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F5',
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  inputIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

const podcastStyle = StyleSheet.create({
  description: {
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
  upload: {},
  audioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcon: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  audioTitle: {
    fontSize: 16,
    color: '#000',
  },
  audioHint: {
    fontSize: 13,
    color: '#818C99',
    marginTop: 10,
    marginBottom: 16,
  },
});

const coverSection = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  cover: {
    marginRight: 8,
  },
  input: {
    marginTop: 'auto',
    flex: 1,
  },
});

const descriptionSection = StyleSheet.create({
  description: {
    marginTop: 30,
  },
  textarea: {
    height: 64,
  },
});

const podcastSection = StyleSheet.create({
  wrapper: {
    marginTop: 32,
    marginBottom: 24,
  },
});

const settingsSection = StyleSheet.create({
  wrapper: {
    paddingTop: 24,
    borderTopWidth: 0.5,
    borderTopColor: '#D7D8D9',
  },
});

const footerSection = StyleSheet.create({
  footer: {
    marginTop: 18,
    marginBottom: 18,
  },
  text: {
    lineHeight: 18,
    fontSize: 13,
    color: '#818C99',
  },
});

const checkboxStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 17,
    color: '#000',
  },
});
