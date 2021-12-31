import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import stories from '../../../data/stories';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories?.map((story) => (
          <View key={story.id} style={styles.story}>
            <LinearGradient
              style={styles.cover}
              colors={['#DE0046', '#F7A34B']}
              key={story.id}
            >
              <Image
                style={styles.avatar}
                source={{ uri: story.user.avatar }}
              />
            </LinearGradient>
            <Text numberOfLines={1}>{story.user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  story: {
    width: 67,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 33.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
});
