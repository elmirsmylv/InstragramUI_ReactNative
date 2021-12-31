import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Dots, Share, Heart, Bookmark, Comment } from '../../Icons';
import FitImage from './FitImage';

dayjs.extend(relativeTime);

const Post = ({ post }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.title}>
          <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
          <Text style={styles.titleText}>{post.user.name}</Text>
        </View>
        <Dots size={24} fill="#262626" />
      </View>
      <FitImage src={post.image} />
      <View style={styles.actionsWrapper}>
        <View style={styles.actions}>
          <View style={styles.leftAct}>
            <TouchableOpacity style={styles.icon}>
              <Heart size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Comment size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Share size={24} fill="#222" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Bookmark size={24} fill="#222" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post.likes} Likes</Text>
        </View>
        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{
            color: '#999',
          }}
          expandOnly={true}
          seeMoreText="more"
        >
          <Text style={styles.username}>{post.user.name}</Text>
          {`  `}
          {post.description}
        </ReadMore>
        <TouchableOpacity style={{ paddingVertical: 8 }}>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 49,
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  actionsWrapper: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  leftAct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  likes: {
    fontWeight: '600',
    marginBottom: 8,
  },
  username: {
    fontWeight: '600',
  },
  comments: {
    marginTop: 8,
    fontWeight: '500',
    opacity: 0.5,
  },
  date: {
    opacity: 0.6,
    fontSize: 13,
  },
});
