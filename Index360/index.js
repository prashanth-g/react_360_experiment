import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset, 
  NativeModules
} from 'react-360';

const {AudioModule} = NativeModules;

AudioModule.playEnvironmental({
  source: asset('music.mp3'),
  volume: 0.3, // play at 3/10 original volume
});

export default class Index360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Index360', () => Index360);
