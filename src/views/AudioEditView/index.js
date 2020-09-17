import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import {useHistory} from 'react-router-native';
import {v4 as uuid} from 'uuid';

import {Input} from '../../ui/Input';
import {Button} from '../../ui/Button';
import audioMock from './audio.png';
import plusIcon from './plus.png';
import minusIcon from './minus.png';

export const AudioEditView = (props) => {
  const history = useHistory();
  const [timecodes, setTimecodes] = useState([]);

  const {audioFile, setGlobalTimecodes} = props;

  const onRemovePressed = (id) => {
    setTimecodes(timecodes.filter((item) => item.id !== id));
  };

  const onTimecodeInputChanged = (id, field, value) => {
    const newTimecodes = timecodes.map((item) => {
      if (item.id === id) {
        item[field] = value;
        return item;
      }

      return item;
    });

    setTimecodes(newTimecodes);
  };

  const onAddTimeCodePressed = () => {
    const timecode = {
      id: uuid(),
      time: '',
      description: '',
    };

    setTimecodes([...timecodes, timecode]);
  };

  const onSubmitAudioEditingPressed = () => {
    const normalizedTimecodes = timecodes.filter(
      (item) => item.time && item.description,
    );

    setGlobalTimecodes(normalizedTimecodes);

    history.push('/new');
  };

  return (
    <View style={generalStyle.wrapper}>
      <View>
        <View style={generalStyle.audioMockWrapper}>
          <ImageBackground style={generalStyle.audioMock} source={audioMock} />
        </View>

        <View style={timecodeStyle.wrapper}>
          <Text style={timecodeStyle.title}>Таймкоды</Text>

          {timecodes.length > 0 &&
            timecodes.map(({id, time, description}) => {
              return (
                <Pressable
                  key={id}
                  style={timecodeStyle.inputWrapper}
                  onPress={() => {
                    onRemovePressed(id);
                  }}>
                  <Image
                    source={minusIcon}
                    style={{...timecodeStyle.icon, marginTop: 16}}
                  />

                  <Input
                    placeholder="Описание таймкода"
                    onChangeText={(value) => {
                      onTimecodeInputChanged(id, 'description', value);
                    }}
                    wrapperStyle={timecodeStyle.descriptionInput}
                  />

                  <Input
                    type="number"
                    placeholder="00:00"
                    onChangeText={(value) => {
                      onTimecodeInputChanged(id, 'time', value);
                    }}
                    wrapperStyle={timecodeStyle.timecodeInput}
                  />
                </Pressable>
              );
            })}

          <View>
            <Pressable
              style={timecodeStyle.addButton}
              onPress={onAddTimeCodePressed}>
              <Image source={plusIcon} style={timecodeStyle.icon} />
              <Text style={timecodeStyle.addButtonText}>Добавить таймкод</Text>
            </Pressable>
            <Text style={timecodeStyle.hint}>
              Отметки времени с названием темы. Позволяют слушателям легче
              путешествовать по подкасту.
            </Text>
          </View>
        </View>
      </View>

      <Button title="Далее" type="base" onPress={onSubmitAudioEditingPressed} />
    </View>
  );
};

const generalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  audioMockWrapper: {
    marginTop: 8,
    height: 208,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F3F5',
  },
  audioMock: {
    height: 200,
  },
});

const timecodeStyle = StyleSheet.create({
  wrapper: {
    marginTop: 30,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#818C99',
  },
  hint: {
    fontSize: 13,
    color: '#818C99',
    marginBottom: 16,
  },
  icon: {
    width: 22,
    height: 22,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
    paddingTop: 12,
    paddingBottom: 12,
  },
  addButtonText: {
    fontSize: 16,
    color: '#3F8AE0',
    marginLeft: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionInput: {
    flexGrow: 1,
    marginLeft: 12,
  },
  timecodeInput: {
    width: 64,
    marginLeft: 12,
  },
});
