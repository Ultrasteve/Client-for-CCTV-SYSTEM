import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainView from './View/MainView';
import CCTVView from './View/CCTV_View';



export default class app extends Component {

  _renderScene(route,navigator) {
    if(route.Component == 'MainView')
      return(<MainView navigator={navigator}/>);
    if(route.Component == 'CCTVView'){
      return(<CCTVView navigator={navigator}/>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
              initialRoute={{Component: 'MainView'}}
              renderScene={this._renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
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
