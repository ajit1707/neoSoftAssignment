/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';


function App() {
  // covered screen width adding
  const [completed, setcompleted] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  //total screen width
  const [screenWidth, setscreenWidth] = useState(windowWidth);
  let interval;
  let totalWidth = 0;
  useEffect(()=>{
      interval = setInterval(() => {
        totalWidth = totalWidth + (screenWidth/10)
        if (Math.round(totalWidth) == Math.round(screenWidth)) {
          setcompleted(totalWidth);
          clearInterval(interval);
        } else {
          setcompleted(totalWidth);
        }
      }, 10000);
  },[])

  return (
    <View style={styles.container}>
      <Text>Total ScreenWidth: {Math.round(screenWidth)}</Text>
      <Text>Covered Screen Width Completed:  {Math.round(completed)}</Text>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'}
});

export default App;
