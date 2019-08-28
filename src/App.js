/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, Text, View, StatusBar, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            width: width - 20,
            height: width / 3,
            backgroundColor: 'red',
            elevation: 2,
          }}>
          <Text>EAE</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
