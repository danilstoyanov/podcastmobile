import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {PanelHeader} from './components/PanelHeader';
import {StartView} from './views/StartView';
import {NewPodcastView} from './views/NewPodcast';
import {AudioEditView} from './views/AudioEditView';
import {PostView} from './views/PostView';
import {FinalView} from './views/FinalView';

import {NativeRouter, Route, BackButton} from 'react-router-native';

const App = () => {
  const [postData, setPostData] = useState(null);
  const [audioFile, setAudioFile] = useState({});
  const [timecodes, setTimecodes] = useState([]);

  return (
    <SafeAreaView style={styles.app}>
      <NativeRouter>
        <PanelHeader />

        <BackButton>
          <Route exact path="/" component={StartView} />

          <Route
            exact
            path="/new"
            component={() => (
              <NewPodcastView
                setPostData={setPostData}
                setAudioFile={setAudioFile}
              />
            )}
          />

          <Route
            exact
            path="/audio"
            component={() => (
              <AudioEditView
                audioFile={audioFile}
                timecodes={timecodes}
                setGlobalTimecodes={setTimecodes}
              />
            )}
          />

          <Route
            exact
            path="/preview"
            component={() => <PostView postData={postData} />}
          />

          <Route exact path="/final" component={FinalView} />
        </BackButton>
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default App;
