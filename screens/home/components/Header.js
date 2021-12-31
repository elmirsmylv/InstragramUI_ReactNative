import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Logo, Plus, Heart, Chat } from '../../../Icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo fill="#000" />
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity="0.6">
          <Plus fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.6" style={styles.btn}>
          <Heart fill="#000" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.6" style={styles.btn}>
          <Chat fill="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
  },
  btn: {
    marginLeft: 20,
  },
});
