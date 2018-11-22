import React from 'react';
import {
  AppRegistry,
  AsyncStorage,
  BackHandler,
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import SwipeableFlatListExample from './swipeable';

const APP_STATE_KEY = 'random-people.v2';

const Header = ({ onBack, title }) => (
  <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
      <View style={styles.headerCenter}>
        <Text accessibilityRole="heading" aria-level="3" style={styles.title}>{title}</Text>
      </View>
      {onBack ? (
        <React.Fragment>
          <View style={styles.headerLeft}>
            <Button title="Back" onPress={onBack} />
          </View>
          <View style={styles.headerRight}>
          </View>
        </React.Fragment>
      ) : null}
    </View>
  </SafeAreaView>
);

class RNTesterApp extends React.Component {
  UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBack);
  }

  render() {
    return (
      <View style={styles.exampleContainer}>
        <Header title="React Native" />
        <SwipeableFlatListExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#96969A',
    backgroundColor: '#F5F5F6',
  },
  header: {
    padding: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50
  },
  headerCenter: {
    flex: 1,
    order: 2
  },
  headerLeft: {
    order: 1,
    width: 80
  },
  headerRight: {
    order: 3,
    width: 80
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  exampleContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('RNTesterApp', () => RNTesterApp);

// Register suitable examples for snapshot tests

export default RNTesterApp;
