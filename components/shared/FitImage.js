import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const FitImage = ({ src }) => {
  const width = Dimensions.get('window').width;
  const ratio = 1080 / width;
  const height = 607 / ratio;

  return <Image source={{ uri: src }} style={{ width, height }} />;
};

export default FitImage;
