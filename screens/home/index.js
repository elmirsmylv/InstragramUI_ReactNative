import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Stories from './components/Stories';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
