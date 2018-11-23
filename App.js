import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/home';
import Header from './src/header';

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header title="Random People" />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent("App", () => App);
