/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import codePush from "react-native-code-push";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){
    // this.onButtonPress()
    codePush.sync()
  }


  onButtonPress = () => {
    codePush.sync({
      // updateDialog: true,
      installMode: codePush.InstallMode.ON_NEXT_RESUME
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>565656665656565656565</Text>
        <Text style={styles.instructions}>-=-=-=-=-=-=--</Text>
        <Text style={styles.instructions}>_+_+_+__+_+_+__</Text>
        {/*<Button title={'Check for updates'} onPress={this.onButtonPress}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
