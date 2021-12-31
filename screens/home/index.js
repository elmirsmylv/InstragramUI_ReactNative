import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Post from '../../components/shared/Post';
import posts from '../../data/posts';

import Header from './components/Header';
import Stories from './components/Stories';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
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
