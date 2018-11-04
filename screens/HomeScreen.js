import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Homecard from "../components/HomeCard"

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
            <Homecard></Homecard>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
