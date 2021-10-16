import {PRIMARY} from '@styles/colors';
import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';

type LoaderProps = {
  size?: number | 'small' | 'large';
  color?: string;
  stylesProp?: ViewStyle;
};

const Loader = ({size = 'large', color = PRIMARY, stylesProp}: LoaderProps) => {
  return (
    <View style={stylesProp}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
