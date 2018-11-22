import React from 'react';
import {
  Image,
  ScrollView,
  SwipeableFlatList,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';


const data = [
  {
    key: 'like',
    // icon: require('./Thumbnails/like.png'),
    data: 'Like!',
  },
  {
    key: 'heart',
    // icon: require('./Thumbnails/heart.png'),
    data: 'Heart!',
  },
  {
    key: 'party',
    // icon: require('./Thumbnails/party.png'),
    data: 'Party!',
  },
];

class SwipeableFlatListExample extends React.Component{
  render() {
    return (
      <ScrollView
        title={this.props.navigator ? null : '<SwipeableListView>'}
        noSpacer={true}
        noScroll={true}>
        <SwipeableFlatList
          data={data}
          bounceFirstRowOnMount={true}
          maxSwipeDistance={160}
          renderItem={this._renderItem.bind(this)}
          renderQuickActions={this._renderQuickActions.bind(this)}
        />
      </ScrollView>
    );
  }

  _renderItem({item}) {
    return (
      <View style={styles.row}>
        <Image style={styles.rowIcon} source={item.icon} />
        <View style={styles.rowData}>
          <Text style={styles.rowDataText}>{item.data}</Text>
        </View>
      </View>
    );
  }

  _renderQuickActions({item}){
    return (
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  rowData: {
    flex: 1,
  },
  rowDataText: {
    fontSize: 24,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
  },
});

export default SwipeableFlatListExample;